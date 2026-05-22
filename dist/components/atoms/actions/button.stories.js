import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "./button";
const meta = {
    title: "Atoms/Actions/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: [
                "default",
                "destructive",
                "outline",
                "secondary",
                "ghost",
                "link",
            ],
        },
        size: {
            control: "select",
            options: ["default", "sm", "lg", "icon"],
        },
    },
};
export default meta;
/**
 * The default interactive button.
 */
export const Default = {
    args: {
        children: "Button",
        variant: "default",
        size: "default",
    },
};
/**
 * A showcase of all button variants in a single view.
 */
export const AllVariants = {
    render: () => (_jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [_jsx(Button, { variant: "default", children: "Default" }), _jsx(Button, { variant: "secondary", children: "Secondary" }), _jsx(Button, { variant: "destructive", children: "Destructive" }), _jsx(Button, { variant: "outline", children: "Outline" }), _jsx(Button, { variant: "ghost", children: "Ghost" }), _jsx(Button, { variant: "link", children: "Link" })] })),
};
/**
 * A showcase of all button sizes.
 */
export const AllSizes = {
    render: () => (_jsxs("div", { className: "flex flex-wrap items-end gap-4", children: [_jsx(Button, { size: "sm", children: "Small" }), _jsx(Button, { size: "default", children: "Default" }), _jsx(Button, { size: "lg", children: "Large" }), _jsx(Button, { size: "icon", children: _jsx("span", { children: "+" }) })] })),
};
/**
 * Demonstrating the 'asChild' property (Radix Slot) using an anchor tag.
 */
export const AsChild = {
    args: {
        asChild: true,
        children: _jsx("a", { href: "https://github.com", children: "GitHub Link" }),
        variant: "outline",
    },
};
