import * as React from "react"
import { cva } from "class-variance-authority"
import { cn, type ExtendableVariants } from "@/lib/utils"
import { Heading } from "@/components/atoms/heading"
import { Text } from "@/components/atoms/text"
import { IconButton } from "@/components/atoms/icon-button"
import { X } from "lucide-react"

const alertTileVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface AlertTileProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ExtendableVariants<typeof alertTileVariants> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
}

const AlertTile = React.forwardRef<HTMLDivElement, AlertTileProps>(
  ({ className, variant, title, description, icon, onClose, ...props }, ref) => {
    return (
      <div ref={ref} role="alert" className={cn(alertTileVariants({ variant: variant as any }), className)} {...props}>
        {icon && <div className="absolute left-4 top-4">{icon}</div>}
        <div className={cn("flex flex-col gap-1", icon && "pl-7")}>
          <Heading level="h5" className="mb-1 font-medium leading-none tracking-tight">{title}</Heading>
          {description && <Text variant="small" className={cn("text-sm [&_p]:leading-relaxed", variant === "destructive" ? "text-destructive/80" : "text-muted-foreground")}>{description}</Text>}
        </div>
        {onClose && (
          <IconButton 
            variant="ghost" 
            className="absolute right-2 top-2 h-6 w-6 rounded-full" 
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </IconButton>
        )}
      </div>
    )
  }
)
AlertTile.displayName = "AlertTile"

export { AlertTile, alertTileVariants }
