import * as React from "react";
import { type ExtendableVariants } from "@/lib/utils";
declare const kbdVariants: (props?: import("class-variance-authority/dist/types").ClassProp | undefined) => string;
export interface KbdProps extends React.HTMLAttributes<HTMLElement>, ExtendableVariants<typeof kbdVariants> {
    asChild?: boolean;
}
declare const Kbd: React.ForwardRefExoticComponent<KbdProps & React.RefAttributes<HTMLElement>>;
export { Kbd, kbdVariants };
