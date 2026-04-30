import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
const headingVariants = cva("scroll-m-20 tracking-tight", {
    variants: {
        level: {
            h1: "text-4xl font-extrabold lg:text-5xl",
            h2: "text-3xl font-semibold transition-colors first:mt-0",
            h3: "text-2xl font-semibold",
            h4: "text-xl font-semibold",
            h5: "text-lg font-semibold",
            h6: "text-base font-semibold",
        },
    },
    defaultVariants: {
        level: "h1",
    },
});
const Heading = React.forwardRef(({ className, level = "h1", asChild = false, ...props }, ref) => {
    const Comp = (asChild ? Slot : level || "h1");
    return (_jsx(Comp, { className: cn(headingVariants({ level: level }), className), ref: ref, ...props }));
});
Heading.displayName = "Heading";
export { Heading, headingVariants };
