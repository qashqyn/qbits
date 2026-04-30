import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
const codeVariants = cva("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold");
const Code = React.forwardRef(({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "code";
    return (_jsx(Comp, { className: cn(codeVariants(props), className), ref: ref, ...props }));
});
Code.displayName = "Code";
export { Code, codeVariants };
