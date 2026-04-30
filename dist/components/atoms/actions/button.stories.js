import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "./button";
import { Mail } from "lucide-react";
const meta = {
    title: "Atoms/Button",
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
        asChild: {
            control: "boolean",
        },
    },
};
export default meta;
export const Default = {
    args: {
        children: "Button",
        variant: "default",
        size: "default",
    },
};
export const Destructive = {
    args: {
        children: "Destructive",
        variant: "destructive",
    },
};
export const Outline = {
    args: {
        children: "Outline",
        variant: "outline",
    },
};
export const WithIcon = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(Mail, { className: "mr-2 h-4 w-4" }), " Login with Email"] })),
    },
};
export const IconButton = {
    args: {
        size: "icon",
        children: _jsx(Mail, { className: "h-4 w-4" }),
    },
};
