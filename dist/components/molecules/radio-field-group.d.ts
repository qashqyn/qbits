import * as React from "react";
import { type ExtendableVariants } from "@/lib/utils";
import { RadioGroup } from "@/components/atoms/radio-group";
declare const radioFieldGroupVariants: (props?: import("class-variance-authority/dist/types").ClassProp | undefined) => string;
export interface RadioFieldGroupProps extends React.ComponentPropsWithoutRef<typeof RadioGroup>, ExtendableVariants<typeof radioFieldGroupVariants> {
    label?: string;
}
declare const RadioFieldGroup: React.ForwardRefExoticComponent<RadioFieldGroupProps & React.RefAttributes<HTMLDivElement>>;
export { RadioFieldGroup, radioFieldGroupVariants };
