import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { type ExtendableVariants } from "../../../lib/utils";
declare const radioGroupVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>, ExtendableVariants<typeof radioGroupVariants> {
}
declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const radioGroupItemVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface RadioGroupItemProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>, ExtendableVariants<typeof radioGroupItemVariants> {
}
declare const RadioGroupItem: React.ForwardRefExoticComponent<RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>>;
export { RadioGroup, RadioGroupItem, radioGroupVariants, radioGroupItemVariants };
