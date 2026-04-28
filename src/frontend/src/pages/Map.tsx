import { Button } from "@/components/AppButton";
import { Select } from "@/components/CampusSelect";
import { CAMPUS_EDGES, CAMPUS_NODES, NAMED_NODE_IDS } from "@/types";
import type { RouteResult } from "@/types";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Minus,
  Navigation,
  Plus,
  RotateCcw,
} from "lucide-react";
import { useCallback, useRef, useState } from "react";

// ─── Constants ───────────────────────────────────────────────────────────────
const IMG_W = 1319;
const IMG_H = 988;

// Only show the 14 original named nodes in dropdowns
const NAMED_NODES = CAMPUS_NODES.filter((n) => NAMED_NODE_IDS.has(n.id));
const NODE_OPTIONS = NAMED_NODES.map((n) => ({ value: n.id, label: n.label }));
const DEFAULT_SCALE = 0.5; // meters per pixel

// ─── Local Dijkstra (uses full expanded graph with junctions) ─────────────────
function dijkstra(
  startId: string,
  endId: string,
  scaleFactor: number,
): RouteResult {
  const nodeMap = Object.fromEntries(CAMPUS_NODES.map((n) => [n.id, n]));
  const dist: Record<string, number> = {};
  const prev: Record<string, string | null> = {};
  const visited = new Set<string>();

  for (const n of CAMPUS_NODES) {
    dist[n.id] = Number.POSITIVE_INFINITY;
    prev[n.id] = null;
  }
  dist[startId] = 0;

  while (true) {
    let u: string | null = null;
    let best = Number.POSITIVE_INFINITY;
    for (const id of Object.keys(dist)) {
      if (!visited.has(id) && dist[id] < best) {
        best = dist[id];
        u = id;
      }
    }
    if (u === null || u === endId) break;
    visited.add(u);

    for (const [a, b] of CAMPUS_EDGES) {
      const neighbor = a === u ? b : b === u ? a : null;
      if (!neighbor || visited.has(neighbor)) continue;
      const nu = nodeMap[u];
      const nv = nodeMap[neighbor];
      if (!nu || !nv) continue;
      const dx = nu.x - nv.x;
      const dy = nu.y - nv.y;
      const realDist = Math.sqrt(dx * dx + dy * dy) * scaleFactor;
      const alt = dist[u] + realDist;
      if (alt < dist[neighbor]) {
        dist[neighbor] = alt;
        prev[neighbor] = u;
      }
    }
  }

  if (dist[endId] === Number.POSITIVE_INFINITY)
    return { path: [], distance: 0, found: false };

  const path: string[] = [];
  let cur: string | null = endId;
  while (cur !== null) {
    path.unshift(cur);
    cur = prev[cur] ?? null;
  }
  return { path, distance: Math.round(dist[endId]), found: true };
}

// ─── Build smooth SVG path string from a list of node IDs ────────────────────
// Uses cubic bezier control points at each intermediate junction for smooth curves
function buildSvgPath(nodeIds: string[]): string {
  const nodeMap = Object.fromEntries(CAMPUS_NODES.map((n) => [n.id, n]));
  const pts = nodeIds
    .map((id) => nodeMap[id])
    .filter(Boolean)
    .map((n) => ({ x: n!.x, y: n!.y }));

  if (pts.length === 0) return "";
  if (pts.length === 1) return `M ${pts[0].x} ${pts[0].y}`;

  // Catmull-Rom to cubic bezier conversion for smooth road-following curve
  const d: string[] = [`M ${pts[0].x} ${pts[0].y}`];

  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(pts.length - 1, i + 2)];

    // Catmull-Rom control points (alpha = 0.5 tension)
    const tension = 0.25;
    const cp1x = p1.x + (p2.x - p0.x) * tension;
    const cp1y = p1.y + (p2.y - p0.y) * tension;
    const cp2x = p2.x - (p3.x - p1.x) * tension;
    const cp2y = p2.y - (p3.y - p1.y) * tension;

    d.push(`C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`);
  }

  return d.join(" ");
}

// ─── MapCanvas ────────────────────────────────────────────────────────────────
interface MapCanvasProps {
  route: string[] | null;
  activePin: string | null;
  onPinHover: (id: string | null) => void;
  zoom: number;
  pan: { x: number; y: number };
  onZoomChange: (z: number) => void;
  onPanChange: (p: { x: number; y: number }) => void;
}

function MapCanvas({
  route,
  activePin,
  onPinHover,
  zoom,
  pan,
  onZoomChange,
  onPanChange,
}: MapCanvasProps) {
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0, px: 0, py: 0 });

  const routeSet = new Set(route ?? []);
  const svgPathD = route && route.length >= 2 ? buildSvgPath(route) : "";

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.15 : 0.15;
      onZoomChange(Math.min(3, Math.max(0.5, zoom + delta)));
    },
    [zoom, onZoomChange],
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      isDragging.current = true;
      dragStart.current = { x: e.clientX, y: e.clientY, px: pan.x, py: pan.y };
    },
    [pan],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return;
      onPanChange({
        x: dragStart.current.px + (e.clientX - dragStart.current.x),
        y: dragStart.current.py + (e.clientY - dragStart.current.y),
      });
    },
    [onPanChange],
  );

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-muted/20 rounded-b-lg select-none"
      style={{ height: "480px", cursor: zoom > 1 ? "grab" : "default" }}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Zoom controls */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-1">
        <button
          type="button"
          aria-label="Zoom in"
          onClick={() => onZoomChange(Math.min(3, zoom + 0.25))}
          className="w-8 h-8 rounded-lg bg-card border border-border shadow-sm flex items-center justify-center hover:bg-muted transition-colors"
          data-ocid="map.zoom_in_button"
        >
          <Plus className="w-4 h-4 text-foreground" />
        </button>
        <button
          type="button"
          aria-label="Zoom out"
          onClick={() => onZoomChange(Math.max(0.5, zoom - 0.25))}
          className="w-8 h-8 rounded-lg bg-card border border-border shadow-sm flex items-center justify-center hover:bg-muted transition-colors"
          data-ocid="map.zoom_out_button"
        >
          <Minus className="w-4 h-4 text-foreground" />
        </button>
        <button
          type="button"
          aria-label="Reset zoom"
          onClick={() => {
            onZoomChange(1);
            onPanChange({ x: 0, y: 0 });
          }}
          className="w-8 h-8 rounded-lg bg-card border border-border shadow-sm flex items-center justify-center hover:bg-muted transition-colors"
          data-ocid="map.zoom_reset_button"
        >
          <RotateCcw className="w-3.5 h-3.5 text-foreground" />
        </button>
      </div>

      {/* Zoom label */}
      <div className="absolute top-3 left-3 z-10 bg-card/80 backdrop-blur-sm border border-border rounded-md px-2 py-0.5 text-xs font-mono text-muted-foreground">
        {Math.round(zoom * 100)}%
      </div>

      {/* Transformed map layer */}
      <div
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
          transformOrigin: "center center",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <img
          src="/assets/campus-map.png"
          alt="EGS Pillay Engineering College campus map"
          className="w-full h-full object-contain"
          draggable={false}
        />

        {/* SVG overlay */}
        <svg
          viewBox={`0 0 ${IMG_W} ${IMG_H}`}
          className="absolute inset-0 w-full h-full"
          aria-label="Campus map overlay with location pins"
          role="img"
          style={{ pointerEvents: "none" }}
        >
          <defs>
            <filter
              id="route-glow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter
              id="pin-shadow"
              x="-30%"
              y="-30%"
              width="160%"
              height="160%"
            >
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="3"
                floodOpacity="0.25"
              />
            </filter>
            <style>{`
              @media (prefers-reduced-motion: no-preference) {
                @keyframes dash-march {
                  from { stroke-dashoffset: 40; }
                  to   { stroke-dashoffset: 0; }
                }
                .route-animated {
                  animation: dash-march 1.2s linear infinite;
                }
              }
              .route-animated { stroke-dasharray: 20 8; }
            `}</style>
          </defs>

          {/* Route: glow layer */}
          {route && svgPathD && (
            <path
              d={svgPathD}
              fill="none"
              stroke="oklch(70% 0.2 170)"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.22"
              filter="url(#route-glow)"
            />
          )}
          {/* Route: solid base */}
          {route && svgPathD && (
            <path
              d={svgPathD}
              fill="none"
              stroke="oklch(60% 0.22 170)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
          {/* Route: animated dashes */}
          {route && svgPathD && (
            <path
              d={svgPathD}
              fill="none"
              stroke="oklch(88% 0.18 170)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="route-animated"
            />
          )}

          {/* Pins — only named nodes (no junctions) */}
          {CAMPUS_NODES.filter((n) => NAMED_NODE_IDS.has(n.id)).map((node) => {
            const inRoute = routeSet.has(node.id);
            const isStart = route?.[0] === node.id;
            const isEnd = route?.[route.length - 1] === node.id;
            const isHovered = activePin === node.id;
            const pinColor = isEnd
              ? "oklch(60% 0.22 170)"
              : isStart
                ? "oklch(42% 0.18 240)"
                : inRoute
                  ? "oklch(55% 0.20 200)"
                  : "oklch(42% 0.14 240)";

            return (
              <g
                key={node.id}
                style={{ pointerEvents: "all", cursor: "pointer" }}
                onMouseEnter={() => onPinHover(node.id)}
                onMouseLeave={() => onPinHover(null)}
              >
                {(isStart || isEnd) && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={22}
                    fill={pinColor}
                    opacity={0.15}
                  />
                )}
                {isHovered && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={18}
                    fill="none"
                    stroke={pinColor}
                    strokeWidth="2"
                    opacity={0.5}
                  />
                )}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={inRoute ? 11 : 8}
                  fill={pinColor}
                  stroke="white"
                  strokeWidth="3"
                  filter="url(#pin-shadow)"
                />
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={inRoute ? 5 : 3}
                  fill="white"
                  opacity={0.9}
                />
                <text
                  x={node.x}
                  y={node.y - 17}
                  fontSize={inRoute ? "16" : "13"}
                  fill={inRoute ? pinColor : "oklch(25% 0.02 230)"}
                  textAnchor="middle"
                  fontFamily="'Space Grotesk', sans-serif"
                  fontWeight={inRoute ? "700" : "500"}
                  paintOrder="stroke"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinejoin="round"
                >
                  {node.label}
                </text>
                <title>{node.label}</title>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Hover tooltip */}
      {activePin && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <div className="bg-card/95 backdrop-blur-sm border border-border rounded-lg px-3 py-1.5 text-sm font-semibold text-foreground shadow-md">
            {CAMPUS_NODES.find((n) => n.id === activePin)?.label}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Calibration Panel ────────────────────────────────────────────────────────
interface CalibrationPanelProps {
  scaleFactor: number;
  onScaleChange: (s: number) => void;
}

function CalibrationPanel({
  scaleFactor,
  onScaleChange,
}: CalibrationPanelProps) {
  const [open, setOpen] = useState(false);
  const [customScale, setCustomScale] = useState(String(scaleFactor));
  const [calA, setCalA] = useState("");
  const [calB, setCalB] = useState("");
  const [realDist, setRealDist] = useState("");
  const [calError, setCalError] = useState("");

  const applyCustomScale = () => {
    const s = Number.parseFloat(customScale);
    if (!Number.isFinite(s) || s <= 0) return;
    onScaleChange(s);
  };

  const calculateScaleFromPoints = () => {
    setCalError("");
    const nodeA = NAMED_NODES.find((n) => n.id === calA);
    const nodeB = NAMED_NODES.find((n) => n.id === calB);
    const rd = Number.parseFloat(realDist);
    if (!nodeA || !nodeB || !Number.isFinite(rd) || rd <= 0) {
      setCalError(
        "Select two different locations and enter a positive distance.",
      );
      return;
    }
    if (calA === calB) {
      setCalError("Select two different locations.");
      return;
    }
    const dx = nodeA.x - nodeB.x;
    const dy = nodeA.y - nodeB.y;
    const pixelDist = Math.sqrt(dx * dx + dy * dy);
    const computed = rd / pixelDist;
    setCustomScale(computed.toFixed(4));
    onScaleChange(computed);
  };

  return (
    <div className="surface-card overflow-hidden">
      <button
        type="button"
        className="w-full flex items-center justify-between px-5 py-3 text-sm font-semibold font-display text-foreground hover:bg-muted/30 transition-colors"
        onClick={() => setOpen((o) => !o)}
        data-ocid="map.calibration_toggle"
        aria-expanded={open}
      >
        <span>Map Scale Calibration</span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="border-t border-border px-5 py-4 space-y-5 bg-background/40">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Scale Factor (meters per pixel)
            </p>
            <div className="flex gap-2">
              <input
                type="number"
                min="0.01"
                step="0.05"
                value={customScale}
                onChange={(e) => setCustomScale(e.target.value)}
                className="flex-1 border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="e.g. 0.5"
                data-ocid="map.scale_input"
              />
              <Button
                variant="secondary"
                size="sm"
                onClick={applyCustomScale}
                data-ocid="map.apply_scale_button"
              >
                Apply
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Current: <strong>{scaleFactor} m/px</strong> — default is 0.5
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Auto-Calculate from Known Distance
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div>
                <label
                  htmlFor="cal-point-a"
                  className="text-xs text-muted-foreground mb-1 block"
                >
                  Point A
                </label>
                <select
                  id="cal-point-a"
                  value={calA}
                  onChange={(e) => setCalA(e.target.value)}
                  className="w-full border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  data-ocid="map.cal_point_a_select"
                >
                  <option value="">Select location…</option>
                  {NAMED_NODES.map((n) => (
                    <option key={n.id} value={n.id}>
                      {n.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="cal-point-b"
                  className="text-xs text-muted-foreground mb-1 block"
                >
                  Point B
                </label>
                <select
                  id="cal-point-b"
                  value={calB}
                  onChange={(e) => setCalB(e.target.value)}
                  className="w-full border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  data-ocid="map.cal_point_b_select"
                >
                  <option value="">Select location…</option>
                  {NAMED_NODES.map((n) => (
                    <option key={n.id} value={n.id}>
                      {n.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="number"
                min="1"
                value={realDist}
                onChange={(e) => setRealDist(e.target.value)}
                className="flex-1 border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Real distance (meters)"
                data-ocid="map.cal_distance_input"
              />
              <Button
                variant="accent"
                size="sm"
                onClick={calculateScaleFromPoints}
                data-ocid="map.cal_calculate_button"
              >
                Calculate
              </Button>
            </div>
            {calError && (
              <p className="text-xs text-destructive mt-1">{calError}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function CampusMap() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [shouldSearch, setShouldSearch] = useState(false);
  const [scaleFactor, setScaleFactor] = useState(DEFAULT_SCALE);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [activePin, setActivePin] = useState<string | null>(null);

  // Use purely local Dijkstra over the full expanded graph (junctions included)
  const localRoute: RouteResult | null =
    shouldSearch && start && end && start !== end
      ? dijkstra(start, end, scaleFactor)
      : null;

  const sameNodeError =
    start && end && start === end
      ? "Start and destination must be different."
      : undefined;

  const handleFindRoute = () => {
    if (!start || !end || sameNodeError) return;
    setShouldSearch(true);
  };

  const handleStartChange = (v: string) => {
    setStart(v);
    setShouldSearch(false);
  };

  const handleEndChange = (v: string) => {
    setEnd(v);
    setShouldSearch(false);
  };

  const handleScaleChange = (s: number) => {
    setScaleFactor(s);
    if (shouldSearch) setShouldSearch(false);
  };

  // Named stops only (skip junctions in directions panel)
  const namedStops = localRoute?.found
    ? localRoute.path.filter((id) => NAMED_NODE_IDS.has(id))
    : [];

  const walkTime = localRoute?.found ? Math.ceil(localRoute.distance / 80) : 0;

  return (
    <div className="flex-1 flex flex-col bg-background">
      {/* Page header */}
      <div className="bg-card border-b border-border px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-label text-accent mb-1">Campus Navigation</p>
          <h1 className="text-h2 font-display text-foreground">
            Find Your Route Across Campus
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">
            EGS Pillay Engineering College — select a start and destination to
            compute the shortest walking path following real campus roads.
          </p>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Route selector */}
        <div className="surface-elevated p-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
            <Select
              id="start-location"
              label="Start Location"
              placeholder="Select start location"
              options={NODE_OPTIONS}
              value={start}
              onChange={(e) => handleStartChange(e.target.value)}
              data-ocid="map.start_select"
            />
            <Select
              id="end-location"
              label="Destination Building"
              placeholder="Select destination"
              options={NODE_OPTIONS}
              value={end}
              onChange={(e) => handleEndChange(e.target.value)}
              error={sameNodeError}
              data-ocid="map.end_select"
            />
            <Button
              variant="primary"
              size="lg"
              onClick={handleFindRoute}
              disabled={!start || !end || !!sameNodeError}
              className="w-full"
              data-ocid="map.find_route_button"
            >
              <Navigation className="w-5 h-5" />
              Find Route
            </Button>
          </div>
        </div>

        {/* Map + Results */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map area */}
          <div className="lg:col-span-2 surface-card overflow-hidden">
            <div className="px-4 py-3 border-b border-border bg-muted/30 flex items-center gap-2">
              <Navigation className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold font-display text-foreground">
                Campus Map
              </span>
              {localRoute?.found ? (
                <div className="ml-auto flex items-center gap-2">
                  <span className="text-xs bg-accent/10 text-accent border border-accent/20 rounded-full px-2.5 py-0.5 font-semibold">
                    Road route highlighted
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Scroll to zoom · Drag to pan
                  </span>
                </div>
              ) : (
                <span className="text-xs text-muted-foreground ml-auto">
                  Scroll to zoom · Drag to pan
                </span>
              )}
            </div>
            <MapCanvas
              route={localRoute?.found ? localRoute.path : null}
              activePin={activePin}
              onPinHover={setActivePin}
              zoom={zoom}
              pan={pan}
              onZoomChange={setZoom}
              onPanChange={setPan}
            />
          </div>

          {/* Route info */}
          <div className="surface-card flex flex-col">
            <div className="px-4 py-3 border-b border-border bg-muted/30">
              <span className="text-sm font-semibold font-display text-foreground">
                Route Information
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col gap-4">
              {/* Route found */}
              {localRoute?.found && (
                <>
                  <div
                    className="flex items-center gap-2 text-sm text-accent font-semibold"
                    data-ocid="map.success_state"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Route found — road-following path
                  </div>

                  <div className="space-y-0 text-sm">
                    {[
                      {
                        label: "Total Distance",
                        value: `${localRoute.distance} m`,
                      },
                      { label: "Est. Walk Time", value: `~${walkTime} min` },
                      { label: "Via", value: `${namedStops.length} stops` },
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        className="flex justify-between items-center py-2 border-b border-border last:border-0"
                      >
                        <span className="text-muted-foreground">{label}</span>
                        <span className="font-semibold text-foreground">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Step-by-Step Directions
                    </p>
                    <ol className="space-y-1.5">
                      {namedStops.map((nodeId, idx) => {
                        const label =
                          CAMPUS_NODES.find((n) => n.id === nodeId)?.label ??
                          nodeId;
                        const isLast = idx === namedStops.length - 1;
                        return (
                          <li
                            key={nodeId}
                            className="flex items-center gap-2 text-sm"
                            data-ocid={`map.route_step.item.${idx + 1}`}
                          >
                            <span
                              className={[
                                "w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0",
                                isLast
                                  ? "bg-accent text-accent-foreground"
                                  : idx === 0
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-muted-foreground",
                              ].join(" ")}
                            >
                              {idx + 1}
                            </span>
                            <span
                              className={
                                isLast
                                  ? "text-accent font-semibold"
                                  : "text-foreground"
                              }
                            >
                              {label}
                            </span>
                            {!isLast && (
                              <ArrowRight className="w-3 h-3 text-muted-foreground ml-auto shrink-0" />
                            )}
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </>
              )}

              {/* No route */}
              {localRoute && !localRoute.found && (
                <div
                  className="flex-1 flex flex-col items-center justify-center gap-3 text-center py-6"
                  data-ocid="map.empty_state"
                >
                  <AlertCircle className="w-8 h-8 text-muted-foreground" />
                  <p className="text-sm font-semibold text-foreground">
                    No route found
                  </p>
                  <p className="text-xs text-muted-foreground">
                    No connected path exists between these locations.
                  </p>
                </div>
              )}

              {/* Idle */}
              {!localRoute && (
                <div
                  className="flex-1 flex flex-col items-center justify-center gap-3 text-center py-6"
                  data-ocid="map.idle_state"
                >
                  <Navigation className="w-8 h-8 text-muted-foreground" />
                  <p className="text-sm font-semibold text-foreground">
                    Select locations above
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Choose a start and destination, then click "Find Route".
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Calibration panel */}
        <CalibrationPanel
          scaleFactor={scaleFactor}
          onScaleChange={handleScaleChange}
        />
      </div>
    </div>
  );
}
