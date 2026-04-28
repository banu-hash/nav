import { c as createLucideIcon, j as jsxRuntimeExports, M as MapPin, L as Link } from "./index-t0DRXH_U.js";
import { B as Button } from "./AppButton-dE4Uv1dP.js";
import { N as Navigation } from "./navigation-4dt471MC.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
const FEATURES = [
  {
    icon: Navigation,
    title: "Shortest Path",
    desc: "Dijkstra's algorithm finds the optimal route between any two campus locations instantly."
  },
  {
    icon: Building2,
    title: "All Buildings",
    desc: "Every major campus building is mapped — from the Main Gate to the Hostel block."
  },
  {
    icon: Users,
    title: "For Everyone",
    desc: "Designed for students, staff, and first-time visitors alike. No sign-in required."
  }
];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-20 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-accent text-sm font-semibold font-display", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5" }),
        "University Campus"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-hero text-foreground font-display", children: [
        "Campus Navigation ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "System" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed", children: "Find the shortest path between any two buildings on campus in seconds. Powered by Dijkstra's Algorithm for precise, efficient routing." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/map", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "lg",
            variant: "primary",
            "data-ocid": "home.find_route_cta",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { className: "w-5 h-5" }),
              "Find Your Route"
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "lg",
            variant: "secondary",
            "data-ocid": "home.learn_more_cta",
            children: "Learn More"
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-label text-accent mb-2", children: "Why CampusNav" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-h2 text-foreground font-display", children: "Navigate smarter, not harder" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: FEATURES.map(({ icon: Icon, title, desc }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "surface-card p-6 space-y-4 hover:shadow-md transition-smooth",
          "data-ocid": `home.feature_card.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg text-foreground", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: desc })
          ]
        },
        title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/40 border-t border-border py-14 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-h2 font-display text-foreground", children: "Ready to explore?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Open the interactive map and find your way around campus in seconds." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/map", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "lg",
          variant: "accent",
          className: "mt-2",
          "data-ocid": "home.explore_map_cta",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5" }),
            "Open Campus Map"
          ]
        }
      ) })
    ] }) })
  ] });
}
export {
  Home as default
};
