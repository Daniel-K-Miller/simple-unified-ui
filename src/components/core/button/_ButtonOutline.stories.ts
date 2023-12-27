import type { Meta, StoryObj } from "@storybook/react";

import { ButtonOutline } from "./styled";
import { ButtonType } from "@enums/ButtonType";
import { SizeType } from "@enums/SizeType";

const meta: Meta<typeof ButtonOutline> = {
	title: "core/button/Outline",
	component: ButtonOutline,
	parameters: {
		docs: {
			description: {
				component:
					"Outline styling of button component (extended from ButtonBase)",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof ButtonOutline>;

export const buttonOutline: Story = {
	args: {
		type: ButtonType.BUTTON,
		children: "Click Here!",
		size: SizeType.medium,
	},
};
