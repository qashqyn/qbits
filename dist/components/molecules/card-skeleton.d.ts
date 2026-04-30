import * as React from "react";
import { type ExtendableVariants } from "@/lib/utils";
declare const cardSkeletonVariants: (props?: import("class-variance-authority/dist/types").ClassProp | undefined) => string;
export interface CardSkeletonProps extends React.HTMLAttributes<HTMLDivElement>, ExtendableVariants<typeof cardSkeletonVariants> {
}
declare const CardSkeleton: React.ForwardRefExoticComponent<CardSkeletonProps & React.RefAttributes<HTMLDivElement>>;
export { CardSkeleton, cardSkeletonVariants };
