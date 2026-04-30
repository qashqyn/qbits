import * as React from "react"
import { cva } from "class-variance-authority"
import { cn, type ExtendableVariants } from "@/lib/utils"
import { Label } from "@/components/atoms/label"
import { Text } from "@/components/atoms/text"

const fieldVariants = cva("flex w-full flex-col gap-1.5")

export interface FieldProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ExtendableVariants<typeof fieldVariants> {
  label?: string;
  error?: string;
  hint?: string;
  htmlFor?: string;
}

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, label, error, hint, htmlFor, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(fieldVariants(props as any), className)} {...props}>
        {label && <Label htmlFor={htmlFor} className={cn(error && "text-destructive")}>{label}</Label>}
        {children}
        {(error || hint) && (
          <Text variant="small" className={cn("text-muted-foreground", error && "text-destructive")}>
            {error || hint}
          </Text>
        )}
      </div>
    )
  }
)
Field.displayName = "Field"

export { Field, fieldVariants }
