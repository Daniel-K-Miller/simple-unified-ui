import type { Meta, StoryObj } from "@storybook/react";

import { ButtonBase } from "../styled";
import { ButtonType } from "@enums/ButtonType";
import { SizeType } from "@enums/SizeType";

const meta: Meta<typeof ButtonBase> = {
	title: "button/Base",
	component: ButtonBase,
	parameters: {
		docs: {
			description: {
				component: "Base styling of button component",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof ButtonBase>;

export const buttonBase: Story = {
	args: {
		type: ButtonType.BUTTON,
		children: "Click Here!",
		size: SizeType.medium,
	},
};
