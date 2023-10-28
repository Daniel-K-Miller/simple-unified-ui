import type { Meta, StoryObj } from "@storybook/react";

import { X } from "./index";

const meta: Meta<typeof X> = {
	title: "SVGs/social/X",
	component: X,
	parameters: {
		docs: {
			description: {
				component: "SVG logo of X branding",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof X>;

export const sun: Story = {
	args: {
		fill: "black",
		height: "50px",
	},
};
