import * as React from "react";
import { type ExtendableVariants } from "@/lib/utils";
declare const breadcrumbStepVariants: (props?: import("class-variance-authority/dist/types").ClassProp | undefined) => string;
export interface BreadcrumbStepProps extends React.HTMLAttributes<HTMLDivElement>, ExtendableVariants<typeof breadcrumbStepVariants> {
    label: string;
    isLast?: boolean;
    active?: boolean;
    useIcon?: boolean;
}
declare const BreadcrumbStep: React.ForwardRefExoticComponent<BreadcrumbStepProps & React.RefAttributes<HTMLDivElement>>;
export { BreadcrumbStep, breadcrumbStepVariants };
