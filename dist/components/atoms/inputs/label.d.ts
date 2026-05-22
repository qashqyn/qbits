import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { type ExtendableVariants } from "../../../lib/utils";
declare const labelVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>, ExtendableVariants<typeof labelVariants> {
}
declare const Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLLabelElement>>;
export { Label, labelVariants };
