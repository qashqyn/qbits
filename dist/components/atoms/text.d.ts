import * as React from "react";
import { type ExtendableVariants } from "../../lib/utils";
declare const textVariants: (props?: ({
    variant?: "default" | "small" | "muted" | "lead" | "large" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement>, ExtendableVariants<typeof textVariants> {
    asChild?: boolean;
}
declare const Text: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLParagraphElement>>;
export { Text, textVariants };
