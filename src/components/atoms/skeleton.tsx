import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn, type ExtendableVariants } from "@/lib/utils"

const skeletonVariants = cva("animate-pulse rounded-md bg-muted")

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ExtendableVariants<typeof skeletonVariants> {
  asChild?: boolean;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        className={cn(skeletonVariants(props as any), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Skeleton.displayName = "Skeleton"

export { Skeleton, skeletonVariants }
