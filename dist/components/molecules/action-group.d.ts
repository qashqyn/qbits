import * as React from "react";
import { type ExtendableVariants } from "../../lib/utils";
declare const actionGroupVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ActionGroupProps extends React.HTMLAttributes<HTMLDivElement>, ExtendableVariants<typeof actionGroupVariants> {
}
declare const ActionGroup: React.ForwardRefExoticComponent<ActionGroupProps & React.RefAttributes<HTMLDivElement>>;
export { ActionGroup, actionGroupVariants };
