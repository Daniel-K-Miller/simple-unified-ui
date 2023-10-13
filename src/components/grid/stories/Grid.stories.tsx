import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { GridContainerStyled } from "../container/styled";
import { GridItemStyled } from "../item/styled";

const meta: Meta<typeof GridContainerStyled> = {
	component: GridContainerStyled,
};

export default meta;

type Story = StoryObj<typeof GridContainerStyled>;

export const Grid: Story = {
	render: () => (
		<GridContainerStyled>
			<GridItemStyled size={4}>
				<button>test 1/3</button>
			</GridItemStyled>
			<GridItemStyled size={2}>
				<button>test 1/6</button>
			</GridItemStyled>
			<GridItemStyled size={6}>
				<button>test 1/2</button>
			</GridItemStyled>
		</GridContainerStyled>
	),
};
