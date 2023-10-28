import type { Meta, StoryObj } from "@storybook/react";

import { Chevron } from "./index";

const meta: Meta<typeof Chevron> = {
	title: "SVGs/Chevron",
	component: Chevron,
	parameters: {
		docs: {
			description: {
				component: "Chevron SVG which can be rotated",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Chevron>;

export const chevron: Story = {
	args: {
		fill: "black",
		height: "50px",
	},
};
