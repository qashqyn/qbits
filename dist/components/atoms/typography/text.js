import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";
const textVariants = cva("leading-7", {
    variants: {
        variant: {
            default: "",
            lead: "text-xl text-muted-foreground",
            large: "text-lg font-semibold",
            small: "text-sm font-medium leading-none",
            muted: "text-sm text-muted-foreground",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
const Text = React.forwardRef(({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "p";
    return (_jsx(Comp, { className: cn(textVariants({ variant: variant }), className), ref: ref, ...props }));
});
Text.displayName = "Text";
export { Text, textVariants };
