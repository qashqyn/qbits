import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Checkbox } from "./checkbox";
import { Label } from "../inputs/label";
const meta = {
    title: "Atoms/Actions/Checkbox",
    component: Checkbox,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
/**
 * Basic standalone checkbox.
 */
export const Default = {
    args: {
        id: "terms",
    },
};
/**
 * A showcase of the checkbox in various operational states.
 */
export const States = {
    render: () => (_jsxs("div", { className: "grid gap-6", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "unchecked" }), _jsx(Label, { htmlFor: "unchecked", children: "Default Unchecked" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "checked", defaultChecked: true }), _jsx(Label, { htmlFor: "checked", children: "Default Checked" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "disabled", disabled: true }), _jsx(Label, { htmlFor: "disabled", children: "Disabled State" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "disabled-checked", disabled: true, defaultChecked: true }), _jsx(Label, { htmlFor: "disabled-checked", children: "Disabled & Checked" })] })] })),
};
/**
 * Testing the 'ExtendableVariants' pattern with custom Tailwind overrides.
 */
export const CustomStyle = {
    args: {
        className: "h-6 w-6 border-destructive data-[state=checked]:bg-destructive",
        defaultChecked: true,
    },
};
