import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/atoms/skeleton";
const cardSkeletonVariants = cva("flex flex-col gap-4 rounded-xl border p-4 shadow-sm");
const CardSkeleton = React.forwardRef(({ className, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn(cardSkeletonVariants(props), className), ...props, children: [_jsx(Skeleton, { className: "h-48 w-full rounded-lg" }), _jsxs("div", { className: "flex flex-col gap-2", children: [_jsx(Skeleton, { className: "h-5 w-2/3" }), _jsx(Skeleton, { className: "h-4 w-full" }), _jsx(Skeleton, { className: "h-4 w-4/5" })] }), _jsxs("div", { className: "mt-auto flex items-center gap-2 pt-4", children: [_jsx(Skeleton, { className: "h-8 w-8 rounded-full" }), _jsx(Skeleton, { className: "h-4 w-24" })] })] }));
});
CardSkeleton.displayName = "CardSkeleton";
export { CardSkeleton, cardSkeletonVariants };
