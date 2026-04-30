import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Text } from "@/components/atoms/text";
const iconTextVariants = cva("inline-flex items-center gap-2");
const IconText = React.forwardRef(({ className, icon, text, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn(iconTextVariants(props), className), ...props, children: [_jsx("div", { className: "flex shrink-0 items-center justify-center text-muted-foreground", children: icon }), _jsx(Text, { variant: "small", className: "text-foreground", children: text })] }));
});
IconText.displayName = "IconText";
export { IconText, iconTextVariants };
