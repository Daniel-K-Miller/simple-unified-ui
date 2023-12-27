import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { HamburgerButtonStyled } from "./styled";

const meta: Meta<typeof HamburgerButtonStyled> = {
	title: "core/button/Hamburger",
	component: HamburgerButtonStyled,
	parameters: {
		docs: {
			description: {
				component:
					"Hamburger styled button which switches between two visual states dependant of the 'expanded' boolean property",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof HamburgerButtonStyled>;

export const hamburgerButton: Story = {
	render: () => {
		const [isExpanded, setIsExpanded] = useState(false);

		return (
			<HamburgerButtonStyled
				expanded={isExpanded}
				onClick={() => {
					setIsExpanded(!isExpanded);
				}}
			/>
		);
	},
};
