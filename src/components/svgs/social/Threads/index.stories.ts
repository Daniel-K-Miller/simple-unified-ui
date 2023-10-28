import type { Meta, StoryObj } from "@storybook/react";

import { Threads } from "./index";

const meta: Meta<typeof Threads> = {
	title: "SVGs/social/Threads",
	component: Threads,
	parameters: {
		docs: {
			description: {
				component: "SVG logo of Threads branding",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Threads>;

export const sun: Story = {
	args: {
		fill: "black",
		height: "50px",
	},
};
