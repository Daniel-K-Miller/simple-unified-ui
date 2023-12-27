import type { Meta, StoryObj } from "@storybook/react";

import { Snapchat } from "./index";

const meta: Meta<typeof Snapchat> = {
	title: "core/SVGs/social/Snapchat",
	component: Snapchat,
	parameters: {
		docs: {
			description: {
				component: "SVG logo of Snapchat branding",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Snapchat>;

export const sun: Story = {
	args: {
		height: "50px",
	},
};
