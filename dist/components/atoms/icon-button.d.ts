import * as React from "react";
import { type ButtonProps } from "@/components/atoms/button";
export interface IconButtonProps extends ButtonProps {
}
declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { IconButton };
