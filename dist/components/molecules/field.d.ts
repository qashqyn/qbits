import * as React from "react";
import { type ExtendableVariants } from "@/lib/utils";
declare const fieldVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement>, ExtendableVariants<typeof fieldVariants> {
    label?: string;
    error?: string;
    hint?: string;
    htmlFor?: string;
}
declare const Field: React.ForwardRefExoticComponent<FieldProps & React.RefAttributes<HTMLDivElement>>;
export { Field, fieldVariants };
