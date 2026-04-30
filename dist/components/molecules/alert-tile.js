import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { IconButton } from "@/components/atoms/icon-button";
import { X } from "lucide-react";
const alertTileVariants = cva("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
    variants: {
        variant: {
            default: "bg-background text-foreground",
            destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
const AlertTile = React.forwardRef(({ className, variant, title, description, icon, onClose, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, role: "alert", className: cn(alertTileVariants({ variant: variant }), className), ...props, children: [icon && _jsx("div", { className: "absolute left-4 top-4", children: icon }), _jsxs("div", { className: cn("flex flex-col gap-1", icon && "pl-7"), children: [_jsx(Heading, { level: "h5", className: "mb-1 font-medium leading-none tracking-tight", children: title }), description && _jsx(Text, { variant: "small", className: cn("text-sm [&_p]:leading-relaxed", variant === "destructive" ? "text-destructive/80" : "text-muted-foreground"), children: description })] }), onClose && (_jsx(IconButton, { variant: "ghost", className: "absolute right-2 top-2 h-6 w-6 rounded-full", onClick: onClose, children: _jsx(X, { className: "h-4 w-4" }) }))] }));
});
AlertTile.displayName = "AlertTile";
export { AlertTile, alertTileVariants };
