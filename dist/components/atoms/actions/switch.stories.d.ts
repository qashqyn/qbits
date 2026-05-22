import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch";
declare const meta: Meta<typeof Switch>;
export default meta;
type Story = StoryObj<typeof Switch>;
/**
 * The default unchecked state of the switch toggle.
 */
export declare const Default: Story;
/**
 * The checked state of the switch toggle.
 */
export declare const Checked: Story;
/**
 * The disabled state, showing visual feedback for locked interactive states.
 */
export declare const Disabled: Story;
/**
 * A standard toggle paired with a labeled input using atomic patterns.
 */
export declare const Labeled: Story;
/**
 * An interactive setting preference pane illustrating multiple toggles at a molecular level.
 */
export declare const SettingsShowcase: Story;
/**
 * An interactive theme selector illustrating micro-animations and custom styles.
 */
export declare const ThemeToggle: Story;
