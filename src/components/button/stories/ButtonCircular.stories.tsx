import type { Meta, StoryObj } from "@storybook/react";

import React from "react";

import { ButtonCircular } from "../styled";
import { ButtonType } from "@enums/ButtonType";
import { SizeType } from "@enums/SizeType";

import { Chevron } from "@base/components/svgs/chevron";

const meta: Meta<typeof ButtonCircular> = {
	title: "button/Circular",
	component: ButtonCircular,
	parameters: {
		docs: {
			description: {
				component:
					"Circular styling of button component (extended from ButtonBase)",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof ButtonCircular>;

export const buttonCircular: Story = {
	render: () => {
		return (
			<ButtonCircular size={SizeType.medium} type={ButtonType.BUTTON}>
				<Chevron />
			</ButtonCircular>
		);
	},
};
