import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { type ExtendableVariants } from "../../lib/utils";
declare const avatarVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>, ExtendableVariants<typeof avatarVariants> {
}
declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLSpanElement>>;
declare const avatarImageVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface AvatarImageProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>, ExtendableVariants<typeof avatarImageVariants> {
}
declare const AvatarImage: React.ForwardRefExoticComponent<AvatarImageProps & React.RefAttributes<HTMLImageElement>>;
declare const avatarFallbackVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface AvatarFallbackProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>, ExtendableVariants<typeof avatarFallbackVariants> {
}
declare const AvatarFallback: React.ForwardRefExoticComponent<AvatarFallbackProps & React.RefAttributes<HTMLSpanElement>>;
export { Avatar, AvatarImage, AvatarFallback, avatarVariants, avatarImageVariants, avatarFallbackVariants };
