import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { Button } from "../../../components/atoms";
const IconButton = React.forwardRef((props, ref) => {
    return _jsx(Button, { ref: ref, size: "icon", ...props });
});
IconButton.displayName = "IconButton";
export { IconButton };
