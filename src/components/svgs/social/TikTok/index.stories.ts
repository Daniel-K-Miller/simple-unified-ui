import type { Meta, StoryObj } from "@storybook/react";

import { TikTok } from "./index";

const meta: Meta<typeof TikTok> = {
	title: "SVGs/social/TikTok",
	component: TikTok,
	parameters: {
		docs: {
			description: {
				component: "SVG logo of TikTok branding",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof TikTok>;

export const sun: Story = {
	args: {
		fill: "black",
		height: "50px",
	},
};
