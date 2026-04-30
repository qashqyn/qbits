import * as React from "react"
import { cva } from "class-variance-authority"
import { cn, type ExtendableVariants } from "@/lib/utils"
import { Text } from "@/components/atoms"
import { Separator } from "@/components/atoms"
import { ChevronRight } from "lucide-react"

const breadcrumbStepVariants = cva("flex items-center gap-2")

export interface BreadcrumbStepProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ExtendableVariants<typeof breadcrumbStepVariants> {
  label: string;
  isLast?: boolean;
  active?: boolean;
  useIcon?: boolean;
}

const BreadcrumbStep = React.forwardRef<HTMLDivElement, BreadcrumbStepProps>(
  ({ className, label, isLast = false, active = false, useIcon = true, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(breadcrumbStepVariants(props as any), className)} {...props}>
        <Text variant="small" className={cn("transition-colors", active ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground cursor-pointer")}>
          {label}
        </Text>
        {!isLast && (
          useIcon ? <ChevronRight className="h-4 w-4 text-muted-foreground" /> : <Separator orientation="vertical" className="h-4" />
        )}
      </div>
    )
  }
)
BreadcrumbStep.displayName = "BreadcrumbStep"

export { BreadcrumbStep, breadcrumbStepVariants }
