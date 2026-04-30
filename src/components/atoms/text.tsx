import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn, type ExtendableVariants } from "@/lib/utils"

const textVariants = cva(
  "leading-7",
  {
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
  }
)

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    ExtendableVariants<typeof textVariants> {
  asChild?: boolean;
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "p"
    return (
      <Comp
        className={cn(textVariants({ variant: variant as any }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Text.displayName = "Text"

export { Text, textVariants }
