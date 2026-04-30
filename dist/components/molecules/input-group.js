import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
const inputGroupVariants = cva("relative flex w-full items-center");
const InputGroup = React.forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn(inputGroupVariants(props), className), ...props, children: children }));
});
InputGroup.displayName = "InputGroup";
export { InputGroup, inputGroupVariants };
