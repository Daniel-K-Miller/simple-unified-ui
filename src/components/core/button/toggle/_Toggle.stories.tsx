import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ToggleBaseStyled } from "./styled";

import { Moon } from "@base/components/core/svgs/moon/index";
import { Sun } from "@base/components/core/svgs/sun/index";

const meta: Meta<typeof ToggleBaseStyled> = {
	title: "core/button/Toggle",
	component: ToggleBaseStyled,
	parameters: {
		docs: {
			description: {
				component:
					"Simple toggle component with optional SVGs behind each switch",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof ToggleBaseStyled>;

export const Toggle: Story = {
	render: () => {
		const [toggleState, setToggleState] = useState(false);

		return (
			<ToggleBaseStyled
				initialValue={toggleState}
				handleToggle={() => setToggleState(!toggleState)}
				leftSVG={<Moon />}
				rightSVG={<Sun />}
			/>
		);
	},
};
