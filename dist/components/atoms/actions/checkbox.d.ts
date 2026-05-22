import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { type ExtendableVariants } from "../../../lib/utils";
declare const checkboxVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, ExtendableVariants<typeof checkboxVariants> {
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLButtonElement>>;
export { Checkbox, checkboxVariants };
