import * as React from "react";
import { type ExtendableVariants } from "@/lib/utils";
declare const skeletonVariants: (props?: import("class-variance-authority/dist/types").ClassProp | undefined) => string;
export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement>, ExtendableVariants<typeof skeletonVariants> {
    asChild?: boolean;
}
declare const Skeleton: React.ForwardRefExoticComponent<SkeletonProps & React.RefAttributes<HTMLDivElement>>;
export { Skeleton, skeletonVariants };
