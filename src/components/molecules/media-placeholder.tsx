import * as React from "react"
import { cva } from "class-variance-authority"
import { cn, type ExtendableVariants } from "@/lib/utils"
import { Skeleton } from "@/components/atoms"

const mediaPlaceholderVariants = cva("flex items-center gap-4")

export interface MediaPlaceholderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ExtendableVariants<typeof mediaPlaceholderVariants> {}

const MediaPlaceholder = React.forwardRef<HTMLDivElement, MediaPlaceholderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(mediaPlaceholderVariants(props as any), className)} {...props}>
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="flex w-full flex-col gap-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    )
  }
)
MediaPlaceholder.displayName = "MediaPlaceholder"

export { MediaPlaceholder, mediaPlaceholderVariants }
