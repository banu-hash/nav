import { c as createLucideIcon, j as jsxRuntimeExports } from "./index-t0DRXH_U.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
];
const CodeXml = createLucideIcon("code-xml", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
];
const GraduationCap = createLucideIcon("graduation-cap", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
];
const Lightbulb = createLucideIcon("lightbulb", __iconNode);
const TEAM = [
  {
    name: "Dr. A. Ramesh",
    role: "Project Mentor",
    dept: "Dept. of Computer Science"
  },
  {
    name: "Priya Sharma",
    role: "Frontend Developer",
    dept: "Final Year, B.Tech CSE"
  },
  {
    name: "Karan Mehta",
    role: "Algorithm Engineer",
    dept: "Final Year, B.Tech CSE"
  },
  {
    name: "Sneha Iyer",
    role: "UI/UX Designer",
    dept: "Final Year, B.Tech CSE"
  }
];
const TECH = [
  {
    icon: CodeXml,
    label: "Frontend",
    value: "React 19 + TypeScript + Tailwind CSS"
  },
  { icon: BookOpen, label: "Routing", value: "TanStack Router" },
  { icon: Lightbulb, label: "Algorithm", value: "Dijkstra's Shortest Path" },
  {
    icon: GraduationCap,
    label: "Backend",
    value: "Motoko on Internet Computer"
  }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-14 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-label text-accent", children: "About This Project" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-h2 font-display text-foreground", children: "Built for the campus community" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Campus Navigation System is a final-year academic project developed to solve a real problem: students and visitors struggling to locate buildings across a sprawling campus. We leverage Dijkstra's graph algorithm to compute the shortest walking paths between any two locations in real time." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-14 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-h3 font-display text-foreground mb-8 text-center", children: "Technology Stack" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: TECH.map(({ icon: Icon, label, value }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "surface-card p-5 flex items-start gap-4",
          "data-ocid": `about.tech_item.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-accent" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: value })
            ] })
          ]
        },
        label
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/40 border-t border-border py-14 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-h3 font-display text-foreground mb-8 text-center", children: "Our Team" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: TEAM.map(({ name, role, dept }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "surface-card p-5 text-center space-y-2",
          "data-ocid": `about.team_member.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary font-display font-bold text-lg", children: name.charAt(0) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-sm", children: name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent text-xs font-semibold", children: role }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs", children: dept })
          ]
        },
        name
      )) })
    ] }) })
  ] });
}
export {
  About as default
};
