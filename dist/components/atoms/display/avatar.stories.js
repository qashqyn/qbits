import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
const meta = {
    title: "Atoms/Avatar",
    component: Avatar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => (_jsxs(Avatar, { children: [_jsx(AvatarImage, { src: "https://github.com/shadcn.png", alt: "@shadcn" }), _jsx(AvatarFallback, { children: "CN" })] })),
};
export const Fallback = {
    render: () => (_jsx(Avatar, { children: _jsx(AvatarFallback, { children: "JD" }) })),
};
