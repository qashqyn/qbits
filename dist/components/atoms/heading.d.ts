import * as React from "react";
import { type ExtendableVariants } from "../../lib/utils";
declare const headingVariants: (props?: ({
    level?: "h2" | "h3" | "h1" | "h4" | "h5" | "h6" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, ExtendableVariants<typeof headingVariants> {
    asChild?: boolean;
}
declare const Heading: React.ForwardRefExoticComponent<HeadingProps & React.RefAttributes<HTMLHeadingElement>>;
export { Heading, headingVariants };
