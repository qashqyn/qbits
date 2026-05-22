import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconButton } from "./icon-button";
import { ExternalLink, Ghost, Pencil, Plus, TableOfContents, Trash2, } from "lucide-react";
const meta = {
    title: "Atoms/Actions/Button/Icon Button",
    component: IconButton,
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
    },
};
export default meta;
export const Default = {
    args: {
        children: _jsx(Plus, { size: 16 }),
        variant: "default",
    },
};
/**
 * A showcase of all button variants in a single view.
 */
export const AllVariants = {
    render: () => (_jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [_jsx(IconButton, { variant: "default", children: _jsx(Plus, { size: 16 }) }), _jsx(IconButton, { variant: "secondary", children: _jsx(Pencil, { size: 16 }) }), _jsx(IconButton, { variant: "destructive", children: _jsx(Trash2, { size: 16 }) }), _jsx(IconButton, { variant: "outline", children: _jsx(TableOfContents, { size: 16 }) }), _jsx(IconButton, { variant: "ghost", children: _jsx(Ghost, { size: 16 }) }), _jsx(IconButton, { variant: "link", children: _jsx(ExternalLink, { size: 16 }) })] })),
};
