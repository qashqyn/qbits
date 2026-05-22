import * as React from "react";
import { type ExtendableVariants } from "../../lib/utils";
declare const inputGroupVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement>, ExtendableVariants<typeof inputGroupVariants> {
}
declare const InputGroup: React.ForwardRefExoticComponent<InputGroupProps & React.RefAttributes<HTMLDivElement>>;
export { InputGroup, inputGroupVariants };
