import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";
import { Label } from "../inputs/label";

const meta: Meta<typeof Checkbox> = {
  title: "Atoms/Actions/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/**
 * Basic standalone checkbox.
 */
export const Default: Story = {
  args: {
    id: "terms",
  },
};

/**
 * A showcase of the checkbox in various operational states.
 */
export const States: Story = {
  render: () => (
    <div className="grid gap-6">
      <div className="flex items-center space-x-2">
        <Checkbox id="unchecked" />
        <Label htmlFor="unchecked">Default Unchecked</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="checked" defaultChecked />
        <Label htmlFor="checked">Default Checked</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled">Disabled State</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-checked" disabled defaultChecked />
        <Label htmlFor="disabled-checked">Disabled & Checked</Label>
      </div>
    </div>
  ),
};

/**
 * Testing the 'ExtendableVariants' pattern with custom Tailwind overrides.
 */
export const CustomStyle: Story = {
  args: {
    className: "h-6 w-6 border-destructive data-[state=checked]:bg-destructive",
    defaultChecked: true,
  },
};
