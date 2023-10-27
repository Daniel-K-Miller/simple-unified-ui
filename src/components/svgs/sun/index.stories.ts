import type { Meta, StoryObj } from "@storybook/react";

import { Sun } from "./index";

const meta: Meta<typeof Sun> = {
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

export const buttonBase: Story = {
	args: {},
};
