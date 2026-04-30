import * as React from "react";
import { type ExtendableVariants } from "@/lib/utils";
declare const inputVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, ExtendableVariants<typeof inputVariants> {
    asChild?: boolean;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { Input, inputVariants };
