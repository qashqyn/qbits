import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
const separatorVariants = cva("shrink-0 bg-border", {
    variants: {
        orientation: {
            horizontal: "h-[1px] w-full",
            vertical: "h-full w-[1px]",
        },
    },
    defaultVariants: {
        orientation: "horizontal",
    },
});
const Separator = React.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (_jsx(SeparatorPrimitive.Root, { ref: ref, decorative: decorative, orientation: orientation, className: cn(separatorVariants({ orientation: orientation }), className), ...props })));
Separator.displayName = SeparatorPrimitive.Root.displayName;
export { Separator, separatorVariants };
