export interface CampusNode {
  id: string;
  label: string;
  x: number;
  y: number;
  isJunction?: boolean;
}

export interface RouteResult {
  path: string[];
  distance: number;
  found: boolean;
}

// ─── 14 original named campus nodes ──────────────────────────────────────────
// Image dimensions: 1319 x 988 px
const NAMED_NODES: CampusNode[] = [
  { id: "east-entrance", label: "East Entrance (Main Gate)", x: 660, y: 900 },
  { id: "sj-block", label: "SJ Block", x: 370, y: 195 },
  { id: "apj-block", label: "Dr. APJ Block", x: 310, y: 390 },
  { id: "pg-block", label: "PG Block", x: 330, y: 560 },
  { id: "gg-block", label: "GG Block", x: 660, y: 490 },
  { id: "main-block", label: "Main Block", x: 1000, y: 640 },
  { id: "boys-hostel", label: "Boys Hostel", x: 130, y: 530 },
  { id: "staff-quarters", label: "Staff Quarters", x: 160, y: 680 },
  { id: "canteen", label: "Canteen", x: 340, y: 460 },
  { id: "founders-memorial", label: "Founder's Memorial", x: 580, y: 340 },
  { id: "eng-labs", label: "Engineering Labs", x: 1000, y: 390 },
  { id: "das-parking", label: "DAS Parking", x: 570, y: 210 },
  { id: "west-entrance", label: "West Entrance", x: 730, y: 75 },
  { id: "atm", label: "ATM", x: 1090, y: 760 },
];

// ─── Junction / waypoint nodes (invisible — trace real road network) ──────────
//
// Road topology on the 1319×988 map:
//
//  MAIN HORIZONTAL CORRIDOR  y≈500, x from ~160 → 1180
//    west-entrance (730,75) descends via j-west-rd-* to join corridor at j-mr-6
//    east-entrance (660,900) climbs via j-east-rd-* to join corridor at j-mr-5
//
//  NORTH BRANCHES from corridor:
//    → DAS Parking (570,210) via j-das-1/2, j-west-das
//    → West Entrance upper road through j-west-rd-1 → das-parking
//    → SJ Block (370,195) via j-sj-1, j-apj-2
//    → APJ Block (310,390) via j-apj-1/2
//    → Founder's Memorial (580,340) via j-das-2
//    → Eng Labs (1000,390) via j-el-1
//
//  SOUTH BRANCHES from corridor:
//    → GG Block (660,490) directly off j-mr-4/j-mr-5
//    → PG Block (330,560) via j-pg-1
//    → Boys Hostel (130,530) via j-bs-1
//    → Staff Quarters (160,680) via j-sq-1
//    → Canteen (340,460) via j-can-1
//    → Main Block (1000,640) via j-mb-1
//    → ATM (1090,760) via j-atm-1/2
//
const JUNCTION_NODES: CampusNode[] = [
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
  { id: "j-mr-8", label: "Junction", x: 1000, y: 500, isJunction: true },
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
  { id: "j-el-1", label: "Junction", x: 1000, y: 430, isJunction: true },

  // Main Block south spur
  { id: "j-mb-1", label: "Junction", x: 1000, y: 570, isJunction: true },

  // ATM south-east spur
  { id: "j-atm-1", label: "Junction", x: 1100, y: 600, isJunction: true },
  { id: "j-atm-2", label: "Junction", x: 1090, y: 680, isJunction: true },
];

// All nodes combined
export const CAMPUS_NODES: CampusNode[] = [...NAMED_NODES, ...JUNCTION_NODES];

// Set of original 14 named node IDs — used to filter pins/labels/directions
export const NAMED_NODE_IDS: ReadonlySet<string> = new Set(
  NAMED_NODES.map((n) => n.id),
);

// ─── Road-following edge list ─────────────────────────────────────────────────
// Every edge is a short segment along a real walkable road segment.
// No edge crosses a building or leaps diagonally across the map.
const RAW_EDGES: [string, string][] = [
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
  ["j-east-rd-2", "main-block"],
];

// Deduplicate edges (identical A|B or B|A)
function deduplicateEdges(edges: [string, string][]): [string, string][] {
  const seen = new Set<string>();
  const result: [string, string][] = [];
  for (const [a, b] of edges) {
    const key = a < b ? `${a}|${b}` : `${b}|${a}`;
    if (!seen.has(key)) {
      seen.add(key);
      result.push([a, b]);
    }
  }
  return result;
}

export const CAMPUS_EDGES: [string, string][] = deduplicateEdges(RAW_EDGES);
