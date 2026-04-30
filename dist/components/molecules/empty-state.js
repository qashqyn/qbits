import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/atoms";
import { Text } from "@/components/atoms";
import { Button } from "@/components/atoms";
const emptyStateVariants = cva("flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-8 text-center animate-in fade-in-50");
const EmptyState = React.forwardRef(({ className, title, description, icon, actionLabel, onAction, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn(emptyStateVariants(props), className), ...props, children: [icon && _jsx("div", { className: "mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground", children: icon }), _jsx(Heading, { level: "h3", children: title }), _jsx(Text, { variant: "muted", className: "max-w-sm", children: description }), actionLabel && onAction && (_jsx(Button, { className: "mt-4", onClick: onAction, children: actionLabel }))] }));
});
EmptyState.displayName = "EmptyState";
export { EmptyState, emptyStateVariants };
