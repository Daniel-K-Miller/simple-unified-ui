import type { Meta, StoryObj } from "@storybook/react";

import { Moon } from "./index";

const meta: Meta<typeof Moon> = {
	component: Moon,
	parameters: {
		docs: {
			description: {
				component: "Base styling of button component",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Moon>;

export const buttonBase: Story = {
	args: {},
};
