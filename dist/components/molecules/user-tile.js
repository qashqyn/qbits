import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
const userTileVariants = cva("flex items-center gap-3");
const UserTile = React.forwardRef(({ className, name, subtext, src, fallback, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn(userTileVariants(props), className), ...props, children: [_jsxs(Avatar, { children: [_jsx(AvatarImage, { src: src, alt: name }), _jsx(AvatarFallback, { children: fallback || name.charAt(0) })] }), _jsxs("div", { className: "flex flex-col", children: [_jsx(Heading, { level: "h6", className: "leading-none", children: name }), subtext && _jsx(Text, { variant: "small", className: "text-muted-foreground", children: subtext })] })] }));
});
UserTile.displayName = "UserTile";
export { UserTile, userTileVariants };
