import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { type ExtendableVariants } from "@/lib/utils";
declare const Select: React.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: React.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
declare const selectTriggerVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface SelectTriggerProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>, ExtendableVariants<typeof selectTriggerVariants> {
}
declare const SelectTrigger: React.ForwardRefExoticComponent<SelectTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const selectScrollButtonVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface SelectScrollUpButtonProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>, ExtendableVariants<typeof selectScrollButtonVariants> {
}
declare const SelectScrollUpButton: React.ForwardRefExoticComponent<SelectScrollUpButtonProps & React.RefAttributes<HTMLDivElement>>;
export interface SelectScrollDownButtonProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>, ExtendableVariants<typeof selectScrollButtonVariants> {
}
declare const SelectScrollDownButton: React.ForwardRefExoticComponent<SelectScrollDownButtonProps & React.RefAttributes<HTMLDivElement>>;
declare const selectContentVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface SelectContentProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>, ExtendableVariants<typeof selectContentVariants> {
}
declare const SelectContent: React.ForwardRefExoticComponent<SelectContentProps & React.RefAttributes<HTMLDivElement>>;
declare const selectLabelVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface SelectLabelProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>, ExtendableVariants<typeof selectLabelVariants> {
}
declare const SelectLabel: React.ForwardRefExoticComponent<SelectLabelProps & React.RefAttributes<HTMLDivElement>>;
declare const selectItemVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>, ExtendableVariants<typeof selectItemVariants> {
}
declare const SelectItem: React.ForwardRefExoticComponent<SelectItemProps & React.RefAttributes<HTMLDivElement>>;
declare const selectSeparatorVariants: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
export interface SelectSeparatorProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>, ExtendableVariants<typeof selectSeparatorVariants> {
}
declare const SelectSeparator: React.ForwardRefExoticComponent<SelectSeparatorProps & React.RefAttributes<HTMLDivElement>>;
export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton, selectTriggerVariants, selectContentVariants, selectItemVariants, selectLabelVariants, selectSeparatorVariants, };
