import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn, type ExtendableVariants } from "@/lib/utils"

const headingVariants = cva(
  "scroll-m-20 tracking-tight",
  {
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
  }
)

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    ExtendableVariants<typeof headingVariants> {
  asChild?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = "h1", asChild = false, ...props }, ref) => {
    const Comp = (asChild ? Slot : level || "h1") as any
    return (
      <Comp
        className={cn(headingVariants({ level: level as any }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"

export { Heading, headingVariants }
