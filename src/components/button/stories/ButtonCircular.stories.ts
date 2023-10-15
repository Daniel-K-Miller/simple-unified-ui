import type { Meta, StoryObj } from "@storybook/react";

import { ButtonCircular } from "../styled";
import { ButtonType } from "@enums/ButtonType";
import { SizeType } from "@enums/SizeType";

const meta: Meta<typeof ButtonCircular> = {
	component: ButtonCircular,
};

export default meta;

type Story = StoryObj<typeof ButtonCircular>;

export const buttonCircular: Story = {
	args: {
		type: ButtonType.BUTTON,
		children: "!",
		size: SizeType.medium,
	},
};