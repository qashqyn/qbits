import * as React from "react"
import { cva } from "class-variance-authority"
import { cn, type ExtendableVariants } from "@/lib/utils"
import { Text } from "@/components/atoms"

const iconTextVariants = cva("inline-flex items-center gap-2")

export interface IconTextProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ExtendableVariants<typeof iconTextVariants> {
  icon: React.ReactNode;
  text: string;
}

const IconText = React.forwardRef<HTMLDivElement, IconTextProps>(
  ({ className, icon, text, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(iconTextVariants(props as any), className)} {...props}>
        <div className="flex shrink-0 items-center justify-center text-muted-foreground">{icon}</div>
        <Text variant="small" className="text-foreground">{text}</Text>
      </div>
    )
  }
)
IconText.displayName = "IconText"

export { IconText, iconTextVariants }
