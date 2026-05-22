import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";
declare const meta: Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof Checkbox>;
/**
 * Basic standalone checkbox.
 */
export declare const Default: Story;
/**
 * A showcase of the checkbox in various operational states.
 */
export declare const States: Story;
/**
 * Testing the 'ExtendableVariants' pattern with custom Tailwind overrides.
 */
export declare const CustomStyle: Story;
