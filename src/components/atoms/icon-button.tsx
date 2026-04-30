import * as React from "react"
import { Button, type ButtonProps } from "@/components/atoms/button"

export interface IconButtonProps extends ButtonProps {}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    return <Button ref={ref} size="icon" {...props} />
  }
)
IconButton.displayName = "IconButton"

export { IconButton }
