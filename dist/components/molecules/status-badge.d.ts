import * as React from "react";
import { type ExtendableVariants } from "@/lib/utils";
import { type BadgeProps } from "@/components/atoms";
declare const statusBadgeVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface StatusBadgeProps extends Omit<BadgeProps, "variant">, ExtendableVariants<typeof statusBadgeVariants> {
    statusText?: string;
    indicatorColor?: string;
    badgeVariant?: BadgeProps["variant"];
}
declare const StatusBadge: React.ForwardRefExoticComponent<StatusBadgeProps & React.RefAttributes<HTMLDivElement>>;
export { StatusBadge, statusBadgeVariants };
