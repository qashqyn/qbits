import * as React from "react"
import { cva } from "class-variance-authority"
import { cn, type ExtendableVariants } from "@/lib/utils"

const actionGroupVariants = cva(
  "inline-flex items-center rounded-md border p-1 shadow-sm [&_button]:rounded-sm",
  {
    variants: {
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
)

export interface ActionGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ExtendableVariants<typeof actionGroupVariants> {}

const ActionGroup = React.forwardRef<HTMLDivElement, ActionGroupProps>(
  ({ className, orientation, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(actionGroupVariants({ orientation: orientation as any }), className)} {...props}>
        {children}
      </div>
    )
  }
)
ActionGroup.displayName = "ActionGroup"

export { ActionGroup, actionGroupVariants }
