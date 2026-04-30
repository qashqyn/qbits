import { type ClassValue } from "clsx";
import { type VariantProps } from "class-variance-authority";
export declare function cn(...inputs: ClassValue[]): string;
export type ExtendableVariants<T extends (...args: any) => any> = {
    [K in keyof VariantProps<T>]?: VariantProps<T>[K] | (string & {});
};
