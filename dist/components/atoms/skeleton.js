import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
const skeletonVariants = cva("animate-pulse rounded-md bg-muted");
const Skeleton = React.forwardRef(({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (_jsx(Comp, { className: cn(skeletonVariants(props), className), ref: ref, ...props }));
});
Skeleton.displayName = "Skeleton";
export { Skeleton, skeletonVariants };
