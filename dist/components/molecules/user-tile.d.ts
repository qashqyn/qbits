import * as React from "react";
import { type ExtendableVariants } from "@/lib/utils";
declare const userTileVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface UserTileProps extends React.HTMLAttributes<HTMLDivElement>, ExtendableVariants<typeof userTileVariants> {
    name: string;
    subtext?: string;
    src?: string;
    fallback?: string;
}
declare const UserTile: React.ForwardRefExoticComponent<UserTileProps & React.RefAttributes<HTMLDivElement>>;
export { UserTile, userTileVariants };
