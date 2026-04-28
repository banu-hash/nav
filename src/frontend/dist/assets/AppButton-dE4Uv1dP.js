import { r as reactExports, j as jsxRuntimeExports, a as cn } from "./index-t0DRXH_U.js";
const variantClasses = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow",
  secondary: "bg-secondary text-secondary-foreground border border-border hover:bg-muted",
  accent: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm hover:shadow",
  ghost: "bg-transparent text-foreground hover:bg-muted",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm"
};
const sizeClasses = {
  sm: "px-3 py-1.5 text-sm rounded-md gap-1.5",
  md: "px-5 py-2.5 text-sm rounded-lg gap-2",
  lg: "px-6 py-3 text-base rounded-xl gap-2.5"
};
const Button = reactExports.forwardRef(
  ({
    variant = "primary",
    size = "md",
    loading = false,
    disabled,
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        ref,
        disabled: disabled || loading,
        className: cn(
          "inline-flex items-center justify-center font-semibold font-display",
          "transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variantClasses[variant],
          sizeClasses[size],
          className
        ),
        ...props,
        children: [
          loading && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              className: "animate-spin w-4 h-4",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  }
                )
              ]
            }
          ),
          children
        ]
      }
    );
  }
);
Button.displayName = "Button";
export {
  Button as B
};
