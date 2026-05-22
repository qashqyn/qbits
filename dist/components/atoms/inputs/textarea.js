import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";
const textareaVariants = cva("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50");
const Textarea = React.forwardRef(({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "textarea";
    return (_jsx(Comp, { className: cn(textareaVariants(props), className), ref: ref, ...props }));
});
Textarea.displayName = "Textarea";
export { Textarea, textareaVariants };
