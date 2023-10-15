import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { GridContainerStyled } from "../container/styled";
import { GridItemStyled } from "../item/styled";

const meta: Meta<typeof GridContainerStyled> = {
	component: GridContainerStyled,
};

export default meta;

type Story = StoryObj<typeof GridContainerStyled>;

const textString = (size: number) => {
	return `${(size / 12).toFixed(3)}% width`;
};

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
