import * as React from "react"
import { cva } from "class-variance-authority"
import { cn, type ExtendableVariants } from "@/lib/utils"

const inputGroupVariants = cva("relative flex w-full items-center")

export interface InputGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ExtendableVariants<typeof inputGroupVariants> {}

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(inputGroupVariants(props as any), className)} {...props}>
        {children}
      </div>
    )
  }
)
InputGroup.displayName = "InputGroup"

export { InputGroup, inputGroupVariants }
