import * as React from "react";
import { type ExtendableVariants } from "@/lib/utils";
declare const emptyStateVariants: (props?: import("class-variance-authority/dist/types").ClassProp | undefined) => string;
export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement>, ExtendableVariants<typeof emptyStateVariants> {
    title: string;
    description: string;
    icon?: React.ReactNode;
    actionLabel?: string;
    onAction?: () => void;
}
declare const EmptyState: React.ForwardRefExoticComponent<EmptyStateProps & React.RefAttributes<HTMLDivElement>>;
export { EmptyState, emptyStateVariants };
