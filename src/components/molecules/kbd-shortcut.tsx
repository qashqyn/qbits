import * as React from "react"
import { cva } from "class-variance-authority"
import { cn, type ExtendableVariants } from "@/lib/utils"
import { Kbd } from "@/components/atoms"
import { Text } from "@/components/atoms"

const kbdShortcutVariants = cva("flex items-center gap-2")

export interface KbdShortcutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ExtendableVariants<typeof kbdShortcutVariants> {
  label?: string;
  keys: string[];
}

const KbdShortcut = React.forwardRef<HTMLDivElement, KbdShortcutProps>(
  ({ className, label, keys, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(kbdShortcutVariants(props as any), className)} {...props}>
        {label && <Text variant="small" className="text-muted-foreground">{label}</Text>}
        <div className="flex items-center gap-1">
          {keys.map((k, i) => (
            <Kbd key={i}>{k}</Kbd>
          ))}
        </div>
      </div>
    )
  }
)
KbdShortcut.displayName = "KbdShortcut"

export { KbdShortcut, kbdShortcutVariants }
