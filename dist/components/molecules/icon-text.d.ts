import * as React from "react";
import { type ExtendableVariants } from "@/lib/utils";
declare const iconTextVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface IconTextProps extends React.HTMLAttributes<HTMLDivElement>, ExtendableVariants<typeof iconTextVariants> {
    icon: React.ReactNode;
    text: string;
}
declare const IconText: React.ForwardRefExoticComponent<IconTextProps & React.RefAttributes<HTMLDivElement>>;
export { IconText, iconTextVariants };
