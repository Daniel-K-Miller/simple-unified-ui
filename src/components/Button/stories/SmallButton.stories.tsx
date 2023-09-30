import type { Meta, StoryObj } from "@storybook/react";

import { SmallButton } from "../styled";

const meta: Meta<typeof SmallButton> = {
	component: SmallButton,
};

export default meta;

type Story = StoryObj<typeof SmallButton>;

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
