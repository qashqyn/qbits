import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./icon-button";
import {
  ExternalLink,
  Ghost,
  Pencil,
  Plus,
  TableOfContents,
  Trash2,
} from "lucide-react";

const meta: Meta<typeof IconButton> = {
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
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    children: <Plus size={16} />,
    variant: "default",
  },
};

/**
 * A showcase of all button variants in a single view.
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <IconButton variant="default">
        <Plus size={16} />
      </IconButton>
      <IconButton variant="secondary">
        <Pencil size={16} />
      </IconButton>
      <IconButton variant="destructive">
        <Trash2 size={16} />
      </IconButton>
      <IconButton variant="outline">
        <TableOfContents size={16} />
      </IconButton>
      <IconButton variant="ghost">
        <Ghost size={16} />
      </IconButton>
      <IconButton variant="link">
        <ExternalLink size={16} />
      </IconButton>
    </div>
  ),
};
