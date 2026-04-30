import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/atoms";
const mediaPlaceholderVariants = cva("flex items-center gap-4");
const MediaPlaceholder = React.forwardRef(({ className, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn(mediaPlaceholderVariants(props), className), ...props, children: [_jsx(Skeleton, { className: "h-12 w-12 rounded-full" }), _jsxs("div", { className: "flex w-full flex-col gap-2", children: [_jsx(Skeleton, { className: "h-4 w-3/4" }), _jsx(Skeleton, { className: "h-4 w-1/2" })] })] }));
});
MediaPlaceholder.displayName = "MediaPlaceholder";
export { MediaPlaceholder, mediaPlaceholderVariants };
