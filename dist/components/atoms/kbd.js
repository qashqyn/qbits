import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
const kbdVariants = cva("pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100");
const Kbd = React.forwardRef(({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "kbd";
    return (_jsx(Comp, { className: cn(kbdVariants(props), className), ref: ref, ...props }));
});
Kbd.displayName = "Kbd";
export { Kbd, kbdVariants };
