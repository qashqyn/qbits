import * as React from "react";
import { type ExtendableVariants } from "@/lib/utils";
declare const kbdShortcutVariants: (props?: import("class-variance-authority/dist/types").ClassProp | undefined) => string;
export interface KbdShortcutProps extends React.HTMLAttributes<HTMLDivElement>, ExtendableVariants<typeof kbdShortcutVariants> {
    label?: string;
    keys: string[];
}
declare const KbdShortcut: React.ForwardRefExoticComponent<KbdShortcutProps & React.RefAttributes<HTMLDivElement>>;
export { KbdShortcut, kbdShortcutVariants };
