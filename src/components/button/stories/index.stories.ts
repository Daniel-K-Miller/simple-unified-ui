import type { Meta, StoryObj } from "@storybook/react";

import { ButtonBaseStyled } from "../styled";
import { ButtonType } from "enums/ButtonType";

const meta: Meta<typeof ButtonBaseStyled> = {
	component: ButtonBaseStyled,
};

export default meta;

type Story = StoryObj<typeof ButtonBaseStyled>;

export const baseStyled: Story = {
	args: {
		type: ButtonType.BUTTON,
		children: "test button",
	},
};
