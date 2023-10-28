import type { Meta, StoryObj } from "@storybook/react";

import { Discord } from "./index";

const meta: Meta<typeof Discord> = {
	title: "SVGs/social/Discord",
	component: Discord,
	parameters: {
		docs: {
			description: {
				component: "SVG logo of Discord branding",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Discord>;

export const sun: Story = {
	args: {
		height: "50px",
	},
};
