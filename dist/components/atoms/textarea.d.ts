import * as React from "react";
import { type ExtendableVariants } from "../../lib/utils";
declare const textareaVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, ExtendableVariants<typeof textareaVariants> {
    asChild?: boolean;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export { Textarea, textareaVariants };
