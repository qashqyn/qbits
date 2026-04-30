import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Label } from "@/components/atoms";
import { Text } from "@/components/atoms";
const fieldVariants = cva("flex w-full flex-col gap-1.5");
const Field = React.forwardRef(({ className, label, error, hint, htmlFor, children, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn(fieldVariants(props), className), ...props, children: [label && _jsx(Label, { htmlFor: htmlFor, className: cn(error && "text-destructive"), children: label }), children, (error || hint) && (_jsx(Text, { variant: "small", className: cn("text-muted-foreground", error && "text-destructive"), children: error || hint }))] }));
});
Field.displayName = "Field";
export { Field, fieldVariants };
