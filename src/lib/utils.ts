import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { type VariantProps } from "class-variance-authority";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ExtendableVariants<T extends (...args: any) => any> = {
  [K in keyof VariantProps<T>]?: VariantProps<T>[K] | (string & {});
};
