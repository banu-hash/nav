import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, M as MapPin } from "./index-t0DRXH_U.js";
import { B as Button } from "./AppButton-dE4Uv1dP.js";
import { C as CircleCheck } from "./circle-check-BpFMDyNH.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$2);
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
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$1);
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
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Address",
    value: "University Campus, Main Gate Road, City – 000001"
  },
  { icon: Mail, label: "Email", value: "campusnav@university.edu" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" }
];
function Contact() {
  const [form, setForm] = reactExports.useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState({});
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-14 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-label text-accent", children: "Get in Touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-h2 font-display text-foreground", children: "Contact Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "Have a question about the Campus Navigation System? Found a missing building or incorrect path? We'd love to hear from you." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "flex-1 bg-background py-14 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-h3 font-display text-foreground", children: "Campus Info" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: CONTACT_INFO.map(({ icon: Icon, label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground mt-0.5", children: value })
          ] })
        ] }, label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3 surface-elevated p-6", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col items-center justify-center gap-4 py-12 text-center",
          "data-ocid": "contact.success_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-7 h-7 text-accent" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg text-foreground", children: "Message Sent!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xs", children: "Thank you for reaching out. We'll get back to you within 1–2 business days." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "secondary",
                size: "sm",
                onClick: () => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", message: "" });
                },
                "data-ocid": "contact.send_another_button",
                children: "Send another message"
              }
            )
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          noValidate: true,
          className: "space-y-5",
          "data-ocid": "contact.form",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "name",
                  className: "text-sm font-semibold text-foreground font-display",
                  children: "Full Name"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "name",
                  type: "text",
                  placeholder: "Your full name",
                  value: form.name,
                  onChange: (e) => setForm((f) => ({ ...f, name: e.target.value })),
                  className: "w-full bg-card border border-input rounded-lg px-4 py-2.5 text-sm text-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary placeholder:text-muted-foreground",
                  "data-ocid": "contact.name_input"
                }
              ),
              errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs text-destructive",
                  "data-ocid": "contact.name_field_error",
                  children: errors.name
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "email",
                  className: "text-sm font-semibold text-foreground font-display",
                  children: "Email Address"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "email",
                  type: "email",
                  placeholder: "you@university.edu",
                  value: form.email,
                  onChange: (e) => setForm((f) => ({ ...f, email: e.target.value })),
                  className: "w-full bg-card border border-input rounded-lg px-4 py-2.5 text-sm text-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary placeholder:text-muted-foreground",
                  "data-ocid": "contact.email_input"
                }
              ),
              errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs text-destructive",
                  "data-ocid": "contact.email_field_error",
                  children: errors.email
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "message",
                  className: "text-sm font-semibold text-foreground font-display",
                  children: "Message"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "message",
                  rows: 5,
                  placeholder: "Describe your query or feedback...",
                  value: form.message,
                  onChange: (e) => setForm((f) => ({ ...f, message: e.target.value })),
                  className: "w-full bg-card border border-input rounded-lg px-4 py-2.5 text-sm text-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary placeholder:text-muted-foreground resize-none",
                  "data-ocid": "contact.message_textarea"
                }
              ),
              errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs text-destructive",
                  "data-ocid": "contact.message_field_error",
                  children: errors.message
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "submit",
                variant: "primary",
                size: "md",
                className: "w-full",
                "data-ocid": "contact.submit_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
                  "Send Message"
                ]
              }
            )
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/40 border-t border-border py-10 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center text-sm text-muted-foreground", children: [
      "This project was developed as part of the Final Year Computer Science curriculum at",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "University Campus" }),
      ". All routing data is for demonstration purposes."
    ] }) })
  ] });
}
export {
  Contact as default
};
