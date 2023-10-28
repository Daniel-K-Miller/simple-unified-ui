import type { Meta, StoryObj } from "@storybook/react";

import { Facebook } from "./index";

const meta: Meta<typeof Facebook> = {
	title: "SVGs/social/Facebook",
	component: Facebook,
	parameters: {
		docs: {
			description: {
				component: "SVG logo of Facebook branding",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Facebook>;

export const sun: Story = {
	args: {
		height: "50px",
	},
};
