import type { Meta, StoryObj } from "@storybook/react";

import { YouTube } from "./index";

const meta: Meta<typeof YouTube> = {
	title: "SVGs/social/YouTube",
	component: YouTube,
	parameters: {
		docs: {
			description: {
				component: "SVG logo of YouTube branding",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof YouTube>;

export const sun: Story = {
	args: {
		height: "50px",
	},
};
