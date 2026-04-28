import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, a as cn } from "./index-t0DRXH_U.js";
import { B as Button } from "./AppButton-dE4Uv1dP.js";
import { N as Navigation } from "./navigation-4dt471MC.js";
import { C as CircleCheck } from "./circle-check-BpFMDyNH.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["path", { d: "M5 12h14", key: "1ays0h" }]];
const Minus = createLucideIcon("minus", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode);
const Select = reactExports.forwardRef(
  ({ options, placeholder, label, error, className, id, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
      label && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "label",
        {
          htmlFor: id,
          className: "text-sm font-semibold text-foreground font-display",
          children: label
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            ref,
            id,
            className: cn(
              "w-full appearance-none bg-card border border-input rounded-lg",
              "px-4 py-2.5 pr-10 text-sm text-foreground",
              "transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error && "border-destructive focus:ring-destructive",
              className
            ),
            ...props,
            children: [
              placeholder && /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: placeholder }),
              options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt.value, children: opt.label }, opt.value))
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChevronDown,
          {
            className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none",
            "aria-hidden": "true"
          }
        )
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", role: "alert", children: error })
    ] });
  }
);
Select.displayName = "NativeSelect";
const NAMED_NODES$1 = [
  { id: "east-entrance", label: "East Entrance (Main Gate)", x: 660, y: 900 },
  { id: "sj-block", label: "SJ Block", x: 370, y: 195 },
  { id: "apj-block", label: "Dr. APJ Block", x: 310, y: 390 },
  { id: "pg-block", label: "PG Block", x: 330, y: 560 },
  { id: "gg-block", label: "GG Block", x: 660, y: 490 },
  { id: "main-block", label: "Main Block", x: 1e3, y: 640 },
  { id: "boys-hostel", label: "Boys Hostel", x: 130, y: 530 },
  { id: "staff-quarters", label: "Staff Quarters", x: 160, y: 680 },
  { id: "canteen", label: "Canteen", x: 340, y: 460 },
  { id: "founders-memorial", label: "Founder's Memorial", x: 580, y: 340 },
  { id: "eng-labs", label: "Engineering Labs", x: 1e3, y: 390 },
  { id: "das-parking", label: "DAS Parking", x: 570, y: 210 },
  { id: "west-entrance", label: "West Entrance", x: 730, y: 75 },
  { id: "atm", label: "ATM", x: 1090, y: 760 }
];
const JUNCTION_NODES = [
  // West Entrance entry road descending south to main corridor
  { id: "j-west-rd-1", label: "Junction", x: 730, y: 200, isJunction: true },
  { id: "j-west-rd-2", label: "Junction", x: 730, y: 340, isJunction: true },
  { id: "j-west-rd-3", label: "Junction", x: 730, y: 430, isJunction: true },
  // Main horizontal corridor nodes (y≈500)
  { id: "j-mr-1", label: "Junction", x: 160, y: 500, isJunction: true },
  { id: "j-mr-2", label: "Junction", x: 280, y: 500, isJunction: true },
  { id: "j-mr-3", label: "Junction", x: 400, y: 500, isJunction: true },
  { id: "j-mr-4", label: "Junction", x: 520, y: 500, isJunction: true },
  { id: "j-mr-5", label: "Junction", x: 640, y: 500, isJunction: true },
  { id: "j-mr-6", label: "Junction", x: 760, y: 500, isJunction: true },
  { id: "j-mr-7", label: "Junction", x: 880, y: 500, isJunction: true },
  { id: "j-mr-8", label: "Junction", x: 1e3, y: 500, isJunction: true },
  { id: "j-mr-9", label: "Junction", x: 1100, y: 500, isJunction: true },
  { id: "j-mr-10", label: "Junction", x: 1180, y: 500, isJunction: true },
  // East Entrance entry road climbing north to main corridor
  { id: "j-east-rd-1", label: "Junction", x: 660, y: 780, isJunction: true },
  { id: "j-east-rd-2", label: "Junction", x: 660, y: 640, isJunction: true },
  // DAS Parking north spur from main corridor
  { id: "j-das-1", label: "Junction", x: 570, y: 430, isJunction: true },
  { id: "j-das-2", label: "Junction", x: 570, y: 310, isJunction: true },
  { id: "j-west-das", label: "Junction", x: 640, y: 310, isJunction: true },
  // SJ / APJ Block north spur
  { id: "j-apj-1", label: "Junction", x: 340, y: 430, isJunction: true },
  { id: "j-apj-2", label: "Junction", x: 310, y: 310, isJunction: true },
  { id: "j-sj-1", label: "Junction", x: 370, y: 280, isJunction: true },
  // PG Block / Boys Hostel / Staff Quarters south spur
  { id: "j-pg-1", label: "Junction", x: 280, y: 560, isJunction: true },
  { id: "j-bs-1", label: "Junction", x: 160, y: 560, isJunction: true },
  { id: "j-sq-1", label: "Junction", x: 160, y: 620, isJunction: true },
  // Canteen south spur
  { id: "j-can-1", label: "Junction", x: 400, y: 460, isJunction: true },
  // Engineering Labs north spur
  { id: "j-el-1", label: "Junction", x: 1e3, y: 430, isJunction: true },
  // Main Block south spur
  { id: "j-mb-1", label: "Junction", x: 1e3, y: 570, isJunction: true },
  // ATM south-east spur
  { id: "j-atm-1", label: "Junction", x: 1100, y: 600, isJunction: true },
  { id: "j-atm-2", label: "Junction", x: 1090, y: 680, isJunction: true }
];
const CAMPUS_NODES = [...NAMED_NODES$1, ...JUNCTION_NODES];
const NAMED_NODE_IDS = new Set(
  NAMED_NODES$1.map((n) => n.id)
);
const RAW_EDGES = [
  // West Entrance entry road (descends south to main corridor)
  ["west-entrance", "j-west-rd-1"],
  ["j-west-rd-1", "j-west-rd-2"],
  ["j-west-rd-2", "j-west-rd-3"],
  ["j-west-rd-3", "j-mr-6"],
  // Upper road: West Entrance → DAS Parking (horizontal top road)
  ["j-west-rd-1", "das-parking"],
  // West entry road spur connecting to DAS cross-path
  ["j-west-rd-2", "j-west-das"],
  // Main horizontal corridor (left ↔ right)
  ["j-mr-1", "j-mr-2"],
  ["j-mr-2", "j-mr-3"],
  ["j-mr-3", "j-mr-4"],
  ["j-mr-4", "j-mr-5"],
  ["j-mr-5", "j-mr-6"],
  ["j-mr-6", "j-mr-7"],
  ["j-mr-7", "j-mr-8"],
  ["j-mr-8", "j-mr-9"],
  ["j-mr-9", "j-mr-10"],
  // East Entrance entry road (climbs north to main corridor)
  ["east-entrance", "j-east-rd-1"],
  ["j-east-rd-1", "j-east-rd-2"],
  ["j-east-rd-2", "j-mr-5"],
  // DAS Parking north spur
  ["das-parking", "j-das-2"],
  ["j-das-2", "j-west-das"],
  ["j-das-2", "j-das-1"],
  ["j-das-1", "j-mr-4"],
  ["j-west-das", "j-mr-5"],
  // Founder's Memorial — branches off DAS spur
  ["founders-memorial", "j-das-2"],
  ["founders-memorial", "j-west-das"],
  // SJ Block north spur
  ["sj-block", "j-sj-1"],
  ["j-sj-1", "j-apj-2"],
  ["j-sj-1", "das-parking"],
  // APJ Block north spur
  ["apj-block", "j-apj-2"],
  ["j-apj-2", "j-sj-1"],
  ["j-apj-2", "j-apj-1"],
  ["j-apj-1", "j-mr-2"],
  ["j-apj-1", "j-mr-3"],
  // Canteen south spur
  ["canteen", "j-can-1"],
  ["j-can-1", "j-mr-3"],
  ["j-can-1", "j-apj-1"],
  // PG Block south spur
  ["pg-block", "j-pg-1"],
  ["j-pg-1", "j-mr-2"],
  ["j-pg-1", "j-bs-1"],
  // Boys Hostel west south spur
  ["boys-hostel", "j-bs-1"],
  ["j-bs-1", "j-mr-1"],
  ["j-bs-1", "j-sq-1"],
  // Staff Quarters
  ["staff-quarters", "j-sq-1"],
  ["j-sq-1", "j-bs-1"],
  // GG Block — sits on main corridor
  ["gg-block", "j-mr-4"],
  ["gg-block", "j-mr-5"],
  // Engineering Labs north spur
  ["eng-labs", "j-el-1"],
  ["j-el-1", "j-mr-8"],
  // Main Block south spur
  ["main-block", "j-mb-1"],
  ["j-mb-1", "j-mr-8"],
  ["j-mb-1", "j-east-rd-2"],
  // ATM south-east spur
  ["atm", "j-atm-2"],
  ["j-atm-2", "j-atm-1"],
  ["j-atm-1", "j-mr-9"],
  ["j-atm-2", "main-block"],
  // West-side corridor cross: j-mr-1 to APJ spur
  ["j-mr-1", "j-apj-1"],
  // East cross path: j-east-rd-2 → main-block
  ["j-east-rd-2", "main-block"]
];
function deduplicateEdges(edges) {
  const seen = /* @__PURE__ */ new Set();
  const result = [];
  for (const [a, b] of edges) {
    const key = a < b ? `${a}|${b}` : `${b}|${a}`;
    if (!seen.has(key)) {
      seen.add(key);
      result.push([a, b]);
    }
  }
  return result;
}
const CAMPUS_EDGES = deduplicateEdges(RAW_EDGES);
const IMG_W = 1319;
const IMG_H = 988;
const NAMED_NODES = CAMPUS_NODES.filter((n) => NAMED_NODE_IDS.has(n.id));
const NODE_OPTIONS = NAMED_NODES.map((n) => ({ value: n.id, label: n.label }));
const DEFAULT_SCALE = 0.5;
function dijkstra(startId, endId, scaleFactor) {
  const nodeMap = Object.fromEntries(CAMPUS_NODES.map((n) => [n.id, n]));
  const dist = {};
  const prev = {};
  const visited = /* @__PURE__ */ new Set();
  for (const n of CAMPUS_NODES) {
    dist[n.id] = Number.POSITIVE_INFINITY;
    prev[n.id] = null;
  }
  dist[startId] = 0;
  while (true) {
    let u = null;
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
  const path = [];
  let cur = endId;
  while (cur !== null) {
    path.unshift(cur);
    cur = prev[cur] ?? null;
  }
  return { path, distance: Math.round(dist[endId]), found: true };
}
function buildSvgPath(nodeIds) {
  const nodeMap = Object.fromEntries(CAMPUS_NODES.map((n) => [n.id, n]));
  const pts = nodeIds.map((id) => nodeMap[id]).filter(Boolean).map((n) => ({ x: n.x, y: n.y }));
  if (pts.length === 0) return "";
  if (pts.length === 1) return `M ${pts[0].x} ${pts[0].y}`;
  const d = [`M ${pts[0].x} ${pts[0].y}`];
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(pts.length - 1, i + 2)];
    const tension = 0.25;
    const cp1x = p1.x + (p2.x - p0.x) * tension;
    const cp1y = p1.y + (p2.y - p0.y) * tension;
    const cp2x = p2.x - (p3.x - p1.x) * tension;
    const cp2y = p2.y - (p3.y - p1.y) * tension;
    d.push(`C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`);
  }
  return d.join(" ");
}
function MapCanvas({
  route,
  activePin,
  onPinHover,
  zoom,
  pan,
  onZoomChange,
  onPanChange
}) {
  var _a;
  const isDragging = reactExports.useRef(false);
  const dragStart = reactExports.useRef({ x: 0, y: 0, px: 0, py: 0 });
  const routeSet = new Set(route ?? []);
  const svgPathD = route && route.length >= 2 ? buildSvgPath(route) : "";
  const handleWheel = reactExports.useCallback(
    (e) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.15 : 0.15;
      onZoomChange(Math.min(3, Math.max(0.5, zoom + delta)));
    },
    [zoom, onZoomChange]
  );
  const handleMouseDown = reactExports.useCallback(
    (e) => {
      isDragging.current = true;
      dragStart.current = { x: e.clientX, y: e.clientY, px: pan.x, py: pan.y };
    },
    [pan]
  );
  const handleMouseMove = reactExports.useCallback(
    (e) => {
      if (!isDragging.current) return;
      onPanChange({
        x: dragStart.current.px + (e.clientX - dragStart.current.x),
        y: dragStart.current.py + (e.clientY - dragStart.current.y)
      });
    },
    [onPanChange]
  );
  const handleMouseUp = reactExports.useCallback(() => {
    isDragging.current = false;
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative w-full overflow-hidden bg-muted/20 rounded-b-lg select-none",
      style: { height: "480px", cursor: zoom > 1 ? "grab" : "default" },
      onWheel: handleWheel,
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseUp,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 right-3 z-10 flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Zoom in",
              onClick: () => onZoomChange(Math.min(3, zoom + 0.25)),
              className: "w-8 h-8 rounded-lg bg-card border border-border shadow-sm flex items-center justify-center hover:bg-muted transition-colors",
              "data-ocid": "map.zoom_in_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 text-foreground" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Zoom out",
              onClick: () => onZoomChange(Math.max(0.5, zoom - 0.25)),
              className: "w-8 h-8 rounded-lg bg-card border border-border shadow-sm flex items-center justify-center hover:bg-muted transition-colors",
              "data-ocid": "map.zoom_out_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-4 h-4 text-foreground" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "aria-label": "Reset zoom",
              onClick: () => {
                onZoomChange(1);
                onPanChange({ x: 0, y: 0 });
              },
              className: "w-8 h-8 rounded-lg bg-card border border-border shadow-sm flex items-center justify-center hover:bg-muted transition-colors",
              "data-ocid": "map.zoom_reset_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-3.5 h-3.5 text-foreground" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 left-3 z-10 bg-card/80 backdrop-blur-sm border border-border rounded-md px-2 py-0.5 text-xs font-mono text-muted-foreground", children: [
          Math.round(zoom * 100),
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: "center center",
              width: "100%",
              height: "100%",
              position: "relative"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "/assets/campus-map.png",
                  alt: "EGS Pillay Engineering College campus map",
                  className: "w-full h-full object-contain",
                  draggable: false
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  viewBox: `0 0 ${IMG_W} ${IMG_H}`,
                  className: "absolute inset-0 w-full h-full",
                  "aria-label": "Campus map overlay with location pins",
                  role: "img",
                  style: { pointerEvents: "none" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "filter",
                        {
                          id: "route-glow",
                          x: "-20%",
                          y: "-20%",
                          width: "140%",
                          height: "140%",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: "6", result: "blur" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("feComposite", { in: "SourceGraphic", in2: "blur", operator: "over" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "filter",
                        {
                          id: "pin-shadow",
                          x: "-30%",
                          y: "-30%",
                          width: "160%",
                          height: "160%",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "feDropShadow",
                            {
                              dx: "0",
                              dy: "2",
                              stdDeviation: "3",
                              floodOpacity: "0.25"
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
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
            ` })
                    ] }),
                    route && svgPathD && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: svgPathD,
                        fill: "none",
                        stroke: "oklch(70% 0.2 170)",
                        strokeWidth: "16",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        opacity: "0.22",
                        filter: "url(#route-glow)"
                      }
                    ),
                    route && svgPathD && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: svgPathD,
                        fill: "none",
                        stroke: "oklch(60% 0.22 170)",
                        strokeWidth: "6",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }
                    ),
                    route && svgPathD && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: svgPathD,
                        fill: "none",
                        stroke: "oklch(88% 0.18 170)",
                        strokeWidth: "3.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "route-animated"
                      }
                    ),
                    CAMPUS_NODES.filter((n) => NAMED_NODE_IDS.has(n.id)).map((node) => {
                      const inRoute = routeSet.has(node.id);
                      const isStart = (route == null ? void 0 : route[0]) === node.id;
                      const isEnd = (route == null ? void 0 : route[route.length - 1]) === node.id;
                      const isHovered = activePin === node.id;
                      const pinColor = isEnd ? "oklch(60% 0.22 170)" : isStart ? "oklch(42% 0.18 240)" : inRoute ? "oklch(55% 0.20 200)" : "oklch(42% 0.14 240)";
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "g",
                        {
                          style: { pointerEvents: "all", cursor: "pointer" },
                          onMouseEnter: () => onPinHover(node.id),
                          onMouseLeave: () => onPinHover(null),
                          children: [
                            (isStart || isEnd) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "circle",
                              {
                                cx: node.x,
                                cy: node.y,
                                r: 22,
                                fill: pinColor,
                                opacity: 0.15
                              }
                            ),
                            isHovered && /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "circle",
                              {
                                cx: node.x,
                                cy: node.y,
                                r: 18,
                                fill: "none",
                                stroke: pinColor,
                                strokeWidth: "2",
                                opacity: 0.5
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "circle",
                              {
                                cx: node.x,
                                cy: node.y,
                                r: inRoute ? 11 : 8,
                                fill: pinColor,
                                stroke: "white",
                                strokeWidth: "3",
                                filter: "url(#pin-shadow)"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "circle",
                              {
                                cx: node.x,
                                cy: node.y,
                                r: inRoute ? 5 : 3,
                                fill: "white",
                                opacity: 0.9
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "text",
                              {
                                x: node.x,
                                y: node.y - 17,
                                fontSize: inRoute ? "16" : "13",
                                fill: inRoute ? pinColor : "oklch(25% 0.02 230)",
                                textAnchor: "middle",
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: inRoute ? "700" : "500",
                                paintOrder: "stroke",
                                stroke: "white",
                                strokeWidth: "4",
                                strokeLinejoin: "round",
                                children: node.label
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: node.label })
                          ]
                        },
                        node.id
                      );
                    })
                  ]
                }
              )
            ]
          }
        ),
        activePin && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card/95 backdrop-blur-sm border border-border rounded-lg px-3 py-1.5 text-sm font-semibold text-foreground shadow-md", children: (_a = CAMPUS_NODES.find((n) => n.id === activePin)) == null ? void 0 : _a.label }) })
      ]
    }
  );
}
function CalibrationPanel({
  scaleFactor,
  onScaleChange
}) {
  const [open, setOpen] = reactExports.useState(false);
  const [customScale, setCustomScale] = reactExports.useState(String(scaleFactor));
  const [calA, setCalA] = reactExports.useState("");
  const [calB, setCalB] = reactExports.useState("");
  const [realDist, setRealDist] = reactExports.useState("");
  const [calError, setCalError] = reactExports.useState("");
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
        "Select two different locations and enter a positive distance."
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "w-full flex items-center justify-between px-5 py-3 text-sm font-semibold font-display text-foreground hover:bg-muted/30 transition-colors",
        onClick: () => setOpen((o) => !o),
        "data-ocid": "map.calibration_toggle",
        "aria-expanded": open,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Map Scale Calibration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              className: `w-4 h-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border px-5 py-4 space-y-5 bg-background/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2", children: "Scale Factor (meters per pixel)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              min: "0.01",
              step: "0.05",
              value: customScale,
              onChange: (e) => setCustomScale(e.target.value),
              className: "flex-1 border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
              placeholder: "e.g. 0.5",
              "data-ocid": "map.scale_input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "secondary",
              size: "sm",
              onClick: applyCustomScale,
              "data-ocid": "map.apply_scale_button",
              children: "Apply"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
          "Current: ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            scaleFactor,
            " m/px"
          ] }),
          " — default is 0.5"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2", children: "Auto-Calculate from Known Distance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "cal-point-a",
                className: "text-xs text-muted-foreground mb-1 block",
                children: "Point A"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                id: "cal-point-a",
                value: calA,
                onChange: (e) => setCalA(e.target.value),
                className: "w-full border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                "data-ocid": "map.cal_point_a_select",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select location…" }),
                  NAMED_NODES.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: n.id, children: n.label }, n.id))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "cal-point-b",
                className: "text-xs text-muted-foreground mb-1 block",
                children: "Point B"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                id: "cal-point-b",
                value: calB,
                onChange: (e) => setCalB(e.target.value),
                className: "w-full border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                "data-ocid": "map.cal_point_b_select",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select location…" }),
                  NAMED_NODES.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: n.id, children: n.label }, n.id))
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              min: "1",
              value: realDist,
              onChange: (e) => setRealDist(e.target.value),
              className: "flex-1 border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
              placeholder: "Real distance (meters)",
              "data-ocid": "map.cal_distance_input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "accent",
              size: "sm",
              onClick: calculateScaleFromPoints,
              "data-ocid": "map.cal_calculate_button",
              children: "Calculate"
            }
          )
        ] }),
        calError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive mt-1", children: calError })
      ] })
    ] })
  ] });
}
function CampusMap() {
  const [start, setStart] = reactExports.useState("");
  const [end, setEnd] = reactExports.useState("");
  const [shouldSearch, setShouldSearch] = reactExports.useState(false);
  const [scaleFactor, setScaleFactor] = reactExports.useState(DEFAULT_SCALE);
  const [zoom, setZoom] = reactExports.useState(1);
  const [pan, setPan] = reactExports.useState({ x: 0, y: 0 });
  const [activePin, setActivePin] = reactExports.useState(null);
  const localRoute = shouldSearch && start && end && start !== end ? dijkstra(start, end, scaleFactor) : null;
  const sameNodeError = start && end && start === end ? "Start and destination must be different." : void 0;
  const handleFindRoute = () => {
    if (!start || !end || sameNodeError) return;
    setShouldSearch(true);
  };
  const handleStartChange = (v) => {
    setStart(v);
    setShouldSearch(false);
  };
  const handleEndChange = (v) => {
    setEnd(v);
    setShouldSearch(false);
  };
  const handleScaleChange = (s) => {
    setScaleFactor(s);
    if (shouldSearch) setShouldSearch(false);
  };
  const namedStops = (localRoute == null ? void 0 : localRoute.found) ? localRoute.path.filter((id) => NAMED_NODE_IDS.has(id)) : [];
  const walkTime = (localRoute == null ? void 0 : localRoute.found) ? Math.ceil(localRoute.distance / 80) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-label text-accent mb-1", children: "Campus Navigation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-h2 font-display text-foreground", children: "Find Your Route Across Campus" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 text-sm", children: "EGS Pillay Engineering College — select a start and destination to compute the shortest walking path following real campus roads." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "surface-elevated p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Select,
          {
            id: "start-location",
            label: "Start Location",
            placeholder: "Select start location",
            options: NODE_OPTIONS,
            value: start,
            onChange: (e) => handleStartChange(e.target.value),
            "data-ocid": "map.start_select"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Select,
          {
            id: "end-location",
            label: "Destination Building",
            placeholder: "Select destination",
            options: NODE_OPTIONS,
            value: end,
            onChange: (e) => handleEndChange(e.target.value),
            error: sameNodeError,
            "data-ocid": "map.end_select"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "primary",
            size: "lg",
            onClick: handleFindRoute,
            disabled: !start || !end || !!sameNodeError,
            className: "w-full",
            "data-ocid": "map.find_route_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { className: "w-5 h-5" }),
              "Find Route"
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 surface-card overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-border bg-muted/30 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { className: "w-4 h-4 text-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold font-display text-foreground", children: "Campus Map" }),
            (localRoute == null ? void 0 : localRoute.found) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-accent/10 text-accent border border-accent/20 rounded-full px-2.5 py-0.5 font-semibold", children: "Road route highlighted" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Scroll to zoom · Drag to pan" })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-auto", children: "Scroll to zoom · Drag to pan" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            MapCanvas,
            {
              route: (localRoute == null ? void 0 : localRoute.found) ? localRoute.path : null,
              activePin,
              onPinHover: setActivePin,
              zoom,
              pan,
              onZoomChange: setZoom,
              onPanChange: setPan
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-b border-border bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold font-display text-foreground", children: "Route Information" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex-1 flex flex-col gap-4", children: [
            (localRoute == null ? void 0 : localRoute.found) && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-2 text-sm text-accent font-semibold",
                  "data-ocid": "map.success_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
                    "Route found — road-following path"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0 text-sm", children: [
                {
                  label: "Total Distance",
                  value: `${localRoute.distance} m`
                },
                { label: "Est. Walk Time", value: `~${walkTime} min` },
                { label: "Via", value: `${namedStops.length} stops` }
              ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex justify-between items-center py-2 border-b border-border last:border-0",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: value })
                  ]
                },
                label
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2", children: "Step-by-Step Directions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-1.5", children: namedStops.map((nodeId, idx) => {
                  var _a;
                  const label = ((_a = CAMPUS_NODES.find((n) => n.id === nodeId)) == null ? void 0 : _a.label) ?? nodeId;
                  const isLast = idx === namedStops.length - 1;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-center gap-2 text-sm",
                      "data-ocid": `map.route_step.item.${idx + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: [
                              "w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0",
                              isLast ? "bg-accent text-accent-foreground" : idx === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                            ].join(" "),
                            children: idx + 1
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: isLast ? "text-accent font-semibold" : "text-foreground",
                            children: label
                          }
                        ),
                        !isLast && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3 text-muted-foreground ml-auto shrink-0" })
                      ]
                    },
                    nodeId
                  );
                }) })
              ] })
            ] }),
            localRoute && !localRoute.found && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex-1 flex flex-col items-center justify-center gap-3 text-center py-6",
                "data-ocid": "map.empty_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-8 h-8 text-muted-foreground" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "No route found" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "No connected path exists between these locations." })
                ]
              }
            ),
            !localRoute && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex-1 flex flex-col items-center justify-center gap-3 text-center py-6",
                "data-ocid": "map.idle_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { className: "w-8 h-8 text-muted-foreground" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Select locations above" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: 'Choose a start and destination, then click "Find Route".' })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CalibrationPanel,
        {
          scaleFactor,
          onScaleChange: handleScaleChange
        }
      )
    ] })
  ] });
}
export {
  CampusMap as default
};
