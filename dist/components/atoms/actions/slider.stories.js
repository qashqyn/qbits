import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Slider } from "./slider";
import { Volume2, VolumeX, Sun } from "lucide-react";
const meta = {
    title: "Atoms/Actions/Slider",
    component: Slider,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        disabled: {
            control: "boolean",
        },
        min: {
            control: "number",
        },
        max: {
            control: "number",
        },
        step: {
            control: "number",
        },
    },
};
export default meta;
/**
 * The default single-value slider starting at 50%.
 */
export const Default = {
    args: {
        defaultValue: [50],
        max: 100,
        min: 0,
        step: 1,
    },
    decorators: [
        (Story) => (_jsx("div", { className: "w-[300px] p-4", children: _jsx(Story, {}) })),
    ],
};
/**
 * A multi-thumb range slider, showcasing selecting a range between two bounds.
 */
export const Range = {
    args: {
        defaultValue: [25, 75],
        max: 100,
        min: 0,
        step: 1,
    },
    decorators: [
        (Story) => (_jsx("div", { className: "w-[300px] p-4", children: _jsx(Story, {}) })),
    ],
};
/**
 * An interactive media controller story showcasing the slider combined with icons.
 */
export const WithIcons = {
    render: () => {
        // Hook-based state without using any type
        const [value, setValue] = React.useState([40]);
        const volume = value[0];
        const isMuted = volume === 0;
        const handleToggleMute = () => {
            setValue(isMuted ? [40] : [0]);
        };
        return (_jsxs("div", { className: "flex items-center gap-4 w-[320px] p-4 bg-card rounded-xl border border-border shadow-md", children: [_jsx("button", { onClick: handleToggleMute, className: "text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md p-1", "aria-label": isMuted ? "Unmute" : "Mute", children: isMuted ? (_jsx(VolumeX, { className: "h-5 w-5 text-destructive animate-pulse" })) : (_jsx(Volume2, { className: "h-5 w-5" })) }), _jsx(Slider, { value: value, onValueChange: setValue, max: 100, min: 0, step: 1, "aria-label": "Volume slider" }), _jsxs("span", { className: "text-sm font-semibold text-muted-foreground min-w-[36px] text-right tabular-nums", children: [volume, "%"] })] }));
    },
};
/**
 * A highly interactive, stateful story showcasing controlled slider behavior with real-time HUD styling.
 */
export const InteractiveHUD = {
    render: () => {
        const [value, setValue] = React.useState([70]);
        const intensity = value[0];
        return (_jsxs("div", { className: "flex flex-col gap-4 w-[360px] p-6 bg-slate-950 dark:bg-slate-950 text-slate-50 border border-slate-800 rounded-2xl shadow-2xl relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" }), _jsxs("div", { className: "flex justify-between items-center z-10", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Sun, { className: "h-5 w-5 text-amber-400 animate-spin-slow" }), _jsx("span", { className: "text-xs font-bold tracking-widest uppercase text-slate-400", children: "System Light" })] }), _jsxs("span", { className: "text-3xl font-extrabold tracking-tight text-amber-400 tabular-nums", children: [intensity, "%"] })] }), _jsx("div", { className: "h-1.5 w-full bg-slate-800 rounded-full overflow-hidden z-10", children: _jsx("div", { className: "h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-150", style: { width: `${intensity}%` } }) }), _jsx(Slider, { value: value, onValueChange: setValue, max: 100, min: 0, step: 1, className: "z-10", "aria-label": "HUD brightness control" }), _jsxs("div", { className: "flex justify-between text-[10px] text-slate-500 font-semibold uppercase tracking-wider z-10", children: [_jsx("span", { children: "Starlight" }), _jsx("span", { children: "Supernova" })] })] }));
    },
};
/**
 * Demonstrating the steps and snapping functionality.
 */
export const SnappingSteps = {
    args: {
        defaultValue: [40],
        max: 100,
        min: 0,
        step: 20,
    },
    decorators: [
        (Story) => (_jsxs("div", { className: "w-[300px] p-4 flex flex-col gap-2", children: [_jsx(Story, {}), _jsx("span", { className: "text-xs text-muted-foreground text-center", children: "Snaps to steps of 20 (0, 20, 40, 60, 80, 100)" })] })),
    ],
};
/**
 * Demonstrating the disabled state and its associated styles.
 */
export const Disabled = {
    args: {
        defaultValue: [30],
        max: 100,
        min: 0,
        step: 1,
        disabled: true,
    },
    decorators: [
        (Story) => (_jsx("div", { className: "w-[300px] p-4", children: _jsx(Story, {}) })),
    ],
};
