import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { type ExtendableVariants } from "@/lib/utils";
declare const separatorVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface SeparatorProps extends Omit<React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>, "orientation">, ExtendableVariants<typeof separatorVariants> {
}
declare const Separator: React.ForwardRefExoticComponent<SeparatorProps & React.RefAttributes<HTMLDivElement>>;
export { Separator, separatorVariants };
