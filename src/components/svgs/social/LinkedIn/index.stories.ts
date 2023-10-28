import type { Meta, StoryObj } from "@storybook/react";

import { LinkedIn } from "./index";

const meta: Meta<typeof LinkedIn> = {
	title: "SVGs/social/LinkedIn",
	component: LinkedIn,
	parameters: {
		docs: {
			description: {
				component: "SVG logo of LinkedIn branding",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof LinkedIn>;

export const sun: Story = {
	args: {
		height: "50px",
	},
};
