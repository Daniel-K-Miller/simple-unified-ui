import type { Meta, StoryObj } from "@storybook/react";

import { Instagram } from "./index";

const meta: Meta<typeof Instagram> = {
	title: "SVGs/social/Instagram",
	component: Instagram,
	parameters: {
		docs: {
			description: {
				component: "SVG logo of Instagram branding",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Instagram>;

export const sun: Story = {
	args: {
		fill: "black",
		height: "50px",
	},
};
