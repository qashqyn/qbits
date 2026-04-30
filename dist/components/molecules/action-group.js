import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
const actionGroupVariants = cva("inline-flex items-center rounded-md border p-1 shadow-sm [&_button]:rounded-sm", {
    variants: {
        orientation: {
            horizontal: "flex-row",
            vertical: "flex-col",
        },
    },
    defaultVariants: {
        orientation: "horizontal",
    },
});
const ActionGroup = React.forwardRef(({ className, orientation, children, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn(actionGroupVariants({ orientation: orientation }), className), ...props, children: children }));
});
ActionGroup.displayName = "ActionGroup";
export { ActionGroup, actionGroupVariants };
