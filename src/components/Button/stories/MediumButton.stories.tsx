import type { Meta, StoryObj } from "@storybook/react";

import { MediumButton } from "../styled";

const meta: Meta<typeof MediumButton> = {
	component: MediumButton,
};

export default meta;

type Story = StoryObj<typeof MediumButton>;

export const black: Story = {
	args: {
		bgColor: "black",
		text: "button",
	},
};

export const pink: Story = {
	args: {
		bgColor: "pink",
		text: "button",
	},
};
