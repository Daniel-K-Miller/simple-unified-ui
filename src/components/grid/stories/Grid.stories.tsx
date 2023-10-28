import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { GridContainerStyled } from "../container/styled";
import { GridItemStyled } from "../item/styled";

const meta: Meta<typeof GridContainerStyled> = {
	title: "Core/Grid",
	component: GridContainerStyled,
	parameters: {
		docs: {
			description: {
				component:
					"Grid component consisting of parent GridContainer (simply a parent div container) and children GridItems (child div container which has a size property). The GridItems have a maximum size value of 12. This implementation is based on the flex box CSS styling. \n \n NOTE: THIS IS NOT A SINGLE COMPONENT BUT AN EXAMPLE OF USING BOTH 'GridContainer' & 'GridItem' together",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof GridContainerStyled>;

const textString = (size: number) => {
	return `size: ${size} (${(size / 12).toFixed(3)}% width)`;
};

/** example usage of three GridItems */

export const CompleteGrid: Story = {
	render: () => (
		<GridContainerStyled>
			<GridItemStyled size={4}>
				<div style={{ backgroundColor: "pink", border: "solid 2px black" }}>
					{textString(4)}
				</div>
			</GridItemStyled>
			<GridItemStyled size={2}>
				<div style={{ backgroundColor: "yellow", border: "solid 2px black" }}>
					{textString(2)}
				</div>
			</GridItemStyled>
			<GridItemStyled size={6}>
				<div
					style={{ backgroundColor: "lightgreen", border: "solid 2px black" }}
				>
					{textString(6)}
				</div>
			</GridItemStyled>
		</GridContainerStyled>
	),
};

/** example usage of four GridItems spanning over two rows */

export const WrappedGrid: Story = {
	render: () => (
		<GridContainerStyled>
			<GridItemStyled size={8}>
				<div
					style={{ backgroundColor: "lightblue", border: "solid 1px black" }}
				>
					{textString(8)}
				</div>
			</GridItemStyled>
			<GridItemStyled size={4}>
				<div
					style={{ backgroundColor: "lightpink", border: "solid 1px black" }}
				>
					{textString(4)}
				</div>
			</GridItemStyled>
			<GridItemStyled size={6}>
				<div
					style={{ backgroundColor: "lightgreen", border: "solid 1px black" }}
				>
					{textString(6)}
				</div>
			</GridItemStyled>
			<GridItemStyled size={6}>
				<div
					style={{ backgroundColor: "lightgreen", border: "solid 1px black" }}
				>
					{textString(6)}
				</div>
			</GridItemStyled>
		</GridContainerStyled>
	),
};

/** example usage of four GridItems spanning over three rows (due to odd sizes - remember a row is only avaiable for a maximum size of 12) */

export const WrapperOverflowGrid: Story = {
	render: () => (
		<GridContainerStyled>
			<GridItemStyled size={8}>
				<div
					style={{ backgroundColor: "lightblue", border: "solid 1px black" }}
				>
					{textString(8)}
				</div>
			</GridItemStyled>
			<GridItemStyled size={8}>
				<div
					style={{ backgroundColor: "lightblue", border: "solid 1px black" }}
				>
					{textString(8)}
				</div>
			</GridItemStyled>
			<GridItemStyled size={6}>
				<div
					style={{ backgroundColor: "lightgreen", border: "solid 1px black" }}
				>
					{textString(6)}
				</div>
			</GridItemStyled>
			<GridItemStyled size={6}>
				<div
					style={{ backgroundColor: "lightgreen", border: "solid 1px black" }}
				>
					{textString(6)}
				</div>
			</GridItemStyled>
		</GridContainerStyled>
	),
};
