import * as React from "react";
import { type ExtendableVariants } from "@/lib/utils";
declare const alertTileVariants: (props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface AlertTileProps extends React.HTMLAttributes<HTMLDivElement>, ExtendableVariants<typeof alertTileVariants> {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    onClose?: () => void;
}
declare const AlertTile: React.ForwardRefExoticComponent<AlertTileProps & React.RefAttributes<HTMLDivElement>>;
export { AlertTile, alertTileVariants };
