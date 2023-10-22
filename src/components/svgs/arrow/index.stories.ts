import type { Meta, StoryObj } from "@storybook/react";

import { Arrow } from "../arrow";

const meta: Meta<typeof Arrow> = {
	component: Arrow,
	parameters: {
		docs: {
			description: {
				component: "Arrow SVG which can be rotated",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Arrow>;

export const buttonBase: Story = {
	args: {
		fill: "black",
		width: "24px",
		stroke: "pink",
	},
};
