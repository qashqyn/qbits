import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn, type ExtendableVariants } from "@/lib/utils";

const codeVariants = cva(
  "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
);

export interface CodeProps
  extends
    React.HTMLAttributes<HTMLElement>,
    ExtendableVariants<typeof codeVariants> {
  asChild?: boolean;
}

const Code = React.forwardRef<HTMLElement, CodeProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "code";
    return (
      <Comp
        className={cn(codeVariants(props as any), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Code.displayName = "Code";

export { Code, codeVariants };
