import type { Meta, StoryObj } from "@storybook/react";

import { Twitter } from "./index";

const meta: Meta<typeof Twitter> = {
	title: "SVGs/social/Twitter",
	component: Twitter,
	parameters: {
		docs: {
			description: {
				component: "SVG logo of Twitter branding",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Twitter>;

export const sun: Story = {
	args: {
		height: "50px",
	},
};
