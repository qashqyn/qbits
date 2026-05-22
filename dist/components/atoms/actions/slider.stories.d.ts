import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./slider";
declare const meta: Meta<typeof Slider>;
export default meta;
type Story = StoryObj<typeof Slider>;
/**
 * The default single-value slider starting at 50%.
 */
export declare const Default: Story;
/**
 * A multi-thumb range slider, showcasing selecting a range between two bounds.
 */
export declare const Range: Story;
/**
 * An interactive media controller story showcasing the slider combined with icons.
 */
export declare const WithIcons: Story;
/**
 * A highly interactive, stateful story showcasing controlled slider behavior with real-time HUD styling.
 */
export declare const InteractiveHUD: Story;
/**
 * Demonstrating the steps and snapping functionality.
 */
export declare const SnappingSteps: Story;
/**
 * Demonstrating the disabled state and its associated styles.
 */
export declare const Disabled: Story;
