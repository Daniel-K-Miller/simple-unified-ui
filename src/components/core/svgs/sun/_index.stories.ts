import type { Meta, StoryObj } from "@storybook/react";

import { Sun } from "./index";

const meta: Meta<typeof Sun> = {
	title: "core/SVGs/Sun",
	component: Sun,
	parameters: {
		docs: {
			description: {
				component: "Base styling of button component",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Sun>;

export const sun: Story = {
	args: {
		fill: "black",
		height: "50px",
	},
};
