import * as React from "react";
import { type ExtendableVariants } from "@/lib/utils";
declare const mediaPlaceholderVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface MediaPlaceholderProps extends React.HTMLAttributes<HTMLDivElement>, ExtendableVariants<typeof mediaPlaceholderVariants> {
}
declare const MediaPlaceholder: React.ForwardRefExoticComponent<MediaPlaceholderProps & React.RefAttributes<HTMLDivElement>>;
export { MediaPlaceholder, mediaPlaceholderVariants };
