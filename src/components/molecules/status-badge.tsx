import * as React from "react"
import { cva } from "class-variance-authority"
import { cn, type ExtendableVariants } from "@/lib/utils"
import { Badge, type BadgeProps } from "@/components/atoms"

const statusBadgeVariants = cva("inline-flex items-center gap-2")

export interface StatusBadgeProps
  extends Omit<BadgeProps, "variant">,
    ExtendableVariants<typeof statusBadgeVariants> {
  statusText?: string;
  indicatorColor?: string;
  badgeVariant?: BadgeProps["variant"];
}

const StatusBadge = React.forwardRef<HTMLDivElement, StatusBadgeProps>(
  ({ className, statusText, indicatorColor, badgeVariant = "default", children, ...props }, ref) => {
    return (
      <Badge ref={ref} variant={badgeVariant} className={cn(statusBadgeVariants(props as any), className)} {...props}>
        {indicatorColor && (
          <span className="flex h-2 w-2 rounded-full" style={{ backgroundColor: indicatorColor }} />
        )}
        {children}
        {statusText && <span>{statusText}</span>}
      </Badge>
    )
  }
)
StatusBadge.displayName = "StatusBadge"

export { StatusBadge, statusBadgeVariants }
