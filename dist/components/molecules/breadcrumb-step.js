import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Text } from "@/components/atoms";
import { Separator } from "@/components/atoms";
import { ChevronRight } from "lucide-react";
const breadcrumbStepVariants = cva("flex items-center gap-2");
const BreadcrumbStep = React.forwardRef(({ className, label, isLast = false, active = false, useIcon = true, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn(breadcrumbStepVariants(props), className), ...props, children: [_jsx(Text, { variant: "small", className: cn("transition-colors", active ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground cursor-pointer"), children: label }), !isLast && (useIcon ? _jsx(ChevronRight, { className: "h-4 w-4 text-muted-foreground" }) : _jsx(Separator, { orientation: "vertical", className: "h-4" }))] }));
});
BreadcrumbStep.displayName = "BreadcrumbStep";
export { BreadcrumbStep, breadcrumbStepVariants };
