import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { type ExtendableVariants } from "@/lib/utils";
declare const switchVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>, ExtendableVariants<typeof switchVariants> {
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLButtonElement>>;
export { Switch, switchVariants };
