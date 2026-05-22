import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
declare const meta: Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof Button>;
/**
 * The default interactive button.
 */
export declare const Default: Story;
/**
 * A showcase of all button variants in a single view.
 */
export declare const AllVariants: Story;
/**
 * A showcase of all button sizes.
 */
export declare const AllSizes: Story;
/**
 * Demonstrating the 'asChild' property (Radix Slot) using an anchor tag.
 */
export declare const AsChild: Story;
