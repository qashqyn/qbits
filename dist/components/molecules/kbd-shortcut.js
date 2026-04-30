import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Kbd } from "@/components/atoms/kbd";
import { Text } from "@/components/atoms/text";
const kbdShortcutVariants = cva("flex items-center gap-2");
const KbdShortcut = React.forwardRef(({ className, label, keys, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn(kbdShortcutVariants(props), className), ...props, children: [label && _jsx(Text, { variant: "small", className: "text-muted-foreground", children: label }), _jsx("div", { className: "flex items-center gap-1", children: keys.map((k, i) => (_jsx(Kbd, { children: k }, i))) })] }));
});
KbdShortcut.displayName = "KbdShortcut";
export { KbdShortcut, kbdShortcutVariants };
