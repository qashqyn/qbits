import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Switch } from "./switch";
import { Label } from "../../../components/atoms/inputs/label";
import { Sun, Moon } from "lucide-react";
const meta = {
    title: "Atoms/Actions/Switch",
    component: Switch,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        disabled: {
            control: "boolean",
        },
        checked: {
            control: "boolean",
        },
    },
};
export default meta;
/**
 * The default unchecked state of the switch toggle.
 */
export const Default = {
    args: {
        defaultChecked: false,
    },
};
/**
 * The checked state of the switch toggle.
 */
export const Checked = {
    args: {
        defaultChecked: true,
    },
};
/**
 * The disabled state, showing visual feedback for locked interactive states.
 */
export const Disabled = {
    args: {
        disabled: true,
        defaultChecked: true,
    },
};
/**
 * A standard toggle paired with a labeled input using atomic patterns.
 */
export const Labeled = {
    render: () => (_jsxs("div", { className: "flex items-center space-x-3 p-2", children: [_jsx(Switch, { id: "airplane-mode" }), _jsx(Label, { htmlFor: "airplane-mode", className: "cursor-pointer", children: "Airplane Mode" })] })),
};
/**
 * An interactive setting preference pane illustrating multiple toggles at a molecular level.
 */
export const SettingsShowcase = {
    render: () => {
        // Standard typed state definition
        const [settings, setSettings] = React.useState({
            email: true,
            push: false,
            beta: true,
        });
        const handleToggle = (key) => {
            setSettings((prev) => ({
                ...prev,
                [key]: !prev[key],
            }));
        };
        return (_jsxs("div", { className: "w-[350px] p-6 bg-card border border-border rounded-xl shadow-lg flex flex-col gap-6", children: [_jsxs("div", { children: [_jsx("h4", { className: "text-base font-semibold text-foreground", children: "Preferences" }), _jsx("p", { className: "text-xs text-muted-foreground", children: "Manage your alerts and integrations." })] }), _jsxs("div", { className: "flex flex-col gap-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex flex-col gap-1", children: [_jsx(Label, { htmlFor: "email-alerts", className: "font-semibold text-foreground cursor-pointer", children: "Email Alerts" }), _jsx("span", { className: "text-xs text-muted-foreground", children: "Receive weekly summary reports" })] }), _jsx(Switch, { id: "email-alerts", checked: settings.email, onCheckedChange: () => handleToggle("email") })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex flex-col gap-1", children: [_jsx(Label, { htmlFor: "push-alerts", className: "font-semibold text-foreground cursor-pointer", children: "Push Notifications" }), _jsx("span", { className: "text-xs text-muted-foreground", children: "Get instant notifications on your device" })] }), _jsx(Switch, { id: "push-alerts", checked: settings.push, onCheckedChange: () => handleToggle("push") })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex flex-col gap-1 flex-1", children: [_jsxs("div", { className: "flex items-center gap-1.5", children: [_jsx(Label, { htmlFor: "beta-features", className: "font-semibold text-foreground cursor-pointer", children: "Beta Access" }), _jsx("span", { className: "inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400", children: "New" })] }), _jsx("span", { className: "text-xs text-muted-foreground", children: "Test experimental features early" })] }), _jsx(Switch, { id: "beta-features", checked: settings.beta, onCheckedChange: () => handleToggle("beta") })] })] })] }));
    },
};
/**
 * An interactive theme selector illustrating micro-animations and custom styles.
 */
export const ThemeToggle = {
    render: () => {
        const [darkMode, setDarkMode] = React.useState(false);
        return (_jsxs("div", { className: "flex items-center justify-between w-[320px] p-4 bg-slate-50 dark:bg-slate-900 border border-border rounded-xl shadow-md transition-colors duration-300", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "p-2 rounded-lg bg-primary/10 text-primary", children: darkMode ? (_jsx(Moon, { className: "h-5 w-5 text-indigo-500 animate-pulse" })) : (_jsx(Sun, { className: "h-5 w-5 text-amber-500 animate-spin-slow" })) }), _jsxs("div", { className: "flex flex-col gap-0.5", children: [_jsx("span", { className: "text-sm font-semibold text-foreground", children: "Dark Theme" }), _jsx("span", { className: "text-xs text-muted-foreground", children: darkMode ? "Active" : "Inactive" })] })] }), _jsx(Switch, { checked: darkMode, onCheckedChange: setDarkMode, "aria-label": "Toggle dark mode" })] }));
    },
};
