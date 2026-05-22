import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { type ExtendableVariants } from "../../../lib/utils";
declare const sliderVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, ExtendableVariants<typeof sliderVariants> {
}
declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLSpanElement>>;
export { Slider, sliderVariants };
