import * as React from "react"
import { cva } from "class-variance-authority"
import { cn, type ExtendableVariants } from "@/lib/utils"
import { Heading } from "@/components/atoms/heading"
import { Text } from "@/components/atoms/text"
import { Button } from "@/components/atoms/button"

const emptyStateVariants = cva("flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-8 text-center animate-in fade-in-50")

export interface EmptyStateProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ExtendableVariants<typeof emptyStateVariants> {
  title: string;
  description: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, title, description, icon, actionLabel, onAction, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(emptyStateVariants(props as any), className)} {...props}>
        {icon && <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">{icon}</div>}
        <Heading level="h3">{title}</Heading>
        <Text variant="muted" className="max-w-sm">{description}</Text>
        {actionLabel && onAction && (
          <Button className="mt-4" onClick={onAction}>{actionLabel}</Button>
        )}
      </div>
    )
  }
)
EmptyState.displayName = "EmptyState"

export { EmptyState, emptyStateVariants }
