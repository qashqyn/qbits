import * as React from "react"
import { cva } from "class-variance-authority"
import { cn, type ExtendableVariants } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar"
import { Heading } from "@/components/atoms/heading"
import { Text } from "@/components/atoms/text"

const userTileVariants = cva("flex items-center gap-3")

export interface UserTileProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ExtendableVariants<typeof userTileVariants> {
  name: string;
  subtext?: string;
  src?: string;
  fallback?: string;
}

const UserTile = React.forwardRef<HTMLDivElement, UserTileProps>(
  ({ className, name, subtext, src, fallback, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(userTileVariants(props as any), className)} {...props}>
        <Avatar>
          <AvatarImage src={src} alt={name} />
          <AvatarFallback>{fallback || name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <Heading level="h6" className="leading-none">{name}</Heading>
          {subtext && <Text variant="small" className="text-muted-foreground">{subtext}</Text>}
        </div>
      </div>
    )
  }
)
UserTile.displayName = "UserTile"

export { UserTile, userTileVariants }
