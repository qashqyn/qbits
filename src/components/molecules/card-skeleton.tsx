import * as React from "react"
import { cva } from "class-variance-authority"
import { cn, type ExtendableVariants } from "@/lib/utils"
import { Skeleton } from "@/components/atoms/skeleton"

const cardSkeletonVariants = cva("flex flex-col gap-4 rounded-xl border p-4 shadow-sm")

export interface CardSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ExtendableVariants<typeof cardSkeletonVariants> {}

const CardSkeleton = React.forwardRef<HTMLDivElement, CardSkeletonProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(cardSkeletonVariants(props as any), className)} {...props}>
        <Skeleton className="h-48 w-full rounded-lg" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
        <div className="mt-auto flex items-center gap-2 pt-4">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    )
  }
)
CardSkeleton.displayName = "CardSkeleton"

export { CardSkeleton, cardSkeletonVariants }
