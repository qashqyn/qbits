import * as React from "react"
import { cva } from "class-variance-authority"
import { cn, type ExtendableVariants } from "@/lib/utils"
import { Label } from "@/components/atoms"
import { RadioGroup } from "@/components/atoms"

const radioFieldGroupVariants = cva("flex flex-col gap-3")

export interface RadioFieldGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroup>,
    ExtendableVariants<typeof radioFieldGroupVariants> {
  label?: string;
}

const RadioFieldGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroup>,
  RadioFieldGroupProps
>(({ className, label, children, ...props }, ref) => {
  return (
    <div className={cn(radioFieldGroupVariants(props as any), className)}>
      {label && <Label>{label}</Label>}
      <RadioGroup ref={ref} {...props}>
        {children}
      </RadioGroup>
    </div>
  )
})
RadioFieldGroup.displayName = "RadioFieldGroup"

export { RadioFieldGroup, radioFieldGroupVariants }
