import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { Badge } from "../../components/atoms";
const statusBadgeVariants = cva("inline-flex items-center gap-2");
const StatusBadge = React.forwardRef(({ className, statusText, indicatorColor, badgeVariant = "default", children, ...props }, ref) => {
    return (_jsxs(Badge, { ref: ref, variant: badgeVariant, className: cn(statusBadgeVariants(props), className), ...props, children: [indicatorColor && (_jsx("span", { className: "flex h-2 w-2 rounded-full", style: { backgroundColor: indicatorColor } })), children, statusText && _jsx("span", { children: statusText })] }));
});
StatusBadge.displayName = "StatusBadge";
export { StatusBadge, statusBadgeVariants };
