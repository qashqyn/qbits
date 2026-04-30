import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Label } from "@/components/atoms";
import { RadioGroup } from "@/components/atoms";
const radioFieldGroupVariants = cva("flex flex-col gap-3");
const RadioFieldGroup = React.forwardRef(({ className, label, children, ...props }, ref) => {
    return (_jsxs("div", { className: cn(radioFieldGroupVariants(props), className), children: [label && _jsx(Label, { children: label }), _jsx(RadioGroup, { ref: ref, ...props, children: children })] }));
});
RadioFieldGroup.displayName = "RadioFieldGroup";
export { RadioFieldGroup, radioFieldGroupVariants };
