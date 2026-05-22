import * as React from "react";
import { type ExtendableVariants } from "../../lib/utils";
declare const codeVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface CodeProps extends React.HTMLAttributes<HTMLElement>, ExtendableVariants<typeof codeVariants> {
    asChild?: boolean;
}
declare const Code: React.ForwardRefExoticComponent<CodeProps & React.RefAttributes<HTMLElement>>;
export { Code, codeVariants };
