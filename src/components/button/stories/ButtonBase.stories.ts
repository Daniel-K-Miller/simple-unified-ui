import type { Meta, StoryObj } from "@storybook/react";

import { ButtonBase } from "../styled";
import { ButtonType } from "enums/ButtonType";

const meta: Meta<typeof ButtonBase> = {
	component: ButtonBase,
};

export default meta;

type Story = StoryObj<typeof ButtonBase>;

export const buttonBase: Story = {
	args: {
		type: ButtonType.BUTTON,
		children: "Click Here!",
	},
};
