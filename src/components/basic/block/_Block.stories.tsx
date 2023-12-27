import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { BlockStyled } from "./styled";
import { BlockType } from "@enums/BlockType";
import { HeadingType } from "@base/enums/HeadingType";

const meta: Meta<typeof BlockStyled> = {
	title: "Basic/Block",
	component: BlockStyled,
	parameters: {
		docs: {
			description: {
				component:
					"Component implementing a base container element (either div / article / section) coupled with children (ReactNode) and optional heading (h1, h2, h3, h4, h5, h6). Also has simple styling.",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof BlockStyled>;

export const blockDivH1: Story = {
	render: () => (
		<BlockStyled
			type={BlockType.DIV}
			heading={{
				size: HeadingType.H1,
				text: "Lorem Ipsum",
			}}
		>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quam
				ligula, fringilla et rutrum a, tempus eu eros. Nulla facilisi.
				Pellentesque habitant morbi tristique senectus et netus et malesuada
				fames ac turpis egestas. Mauris eu sapien vitae lorem pulvinar varius in
				et turpis. Ut nibh mauris, lobortis eget felis a, auctor auctor est.
				Cras eleifend massa a leo tincidunt, commodo pharetra augue commodo.
				Phasellus sed lorem ultricies, lacinia ante eget, semper est. Vivamus
				euismod leo tempus nisi posuere, sit amet volutpat mauris varius. Cras
				condimentum enim quis placerat tempus. Nulla id sodales justo. Sed
				blandit sodales turpis, et tempor felis scelerisque ut. Aenean faucibus
				leo id odio vehicula condimentum. Aenean mattis leo vel ultrices
				pulvinar. Proin porta dui a dolor dapibus porttitor. Aliquam dapibus
				massa quis dui ullamcorper malesuada.
			</p>
		</BlockStyled>
	),
};

export const blockDiv: Story = {
	render: () => (
		<BlockStyled type={BlockType.DIV}>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quam
				ligula, fringilla et rutrum a, tempus eu eros. Nulla facilisi.
				Pellentesque habitant morbi tristique senectus et netus et malesuada
				fames ac turpis egestas. Mauris eu sapien vitae lorem pulvinar varius in
				et turpis. Ut nibh mauris, lobortis eget felis a, auctor auctor est.
				Cras eleifend massa a leo tincidunt, commodo pharetra augue commodo.
				Phasellus sed lorem ultricies, lacinia ante eget, semper est. Vivamus
				euismod leo tempus nisi posuere, sit amet volutpat mauris varius. Cras
				condimentum enim quis placerat tempus. Nulla id sodales justo. Sed
				blandit sodales turpis, et tempor felis scelerisque ut. Aenean faucibus
				leo id odio vehicula condimentum. Aenean mattis leo vel ultrices
				pulvinar. Proin porta dui a dolor dapibus porttitor. Aliquam dapibus
				massa quis dui ullamcorper malesuada.
			</p>
		</BlockStyled>
	),
};

export const blockArticleH2: Story = {
	render: () => (
		<BlockStyled
			type={BlockType.ARTICLE}
			heading={{
				size: HeadingType.H2,
				text: "Lorem Ipsum",
			}}
		>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quam
				ligula, fringilla et rutrum a, tempus eu eros. Nulla facilisi.
				Pellentesque habitant morbi tristique senectus et netus et malesuada
				fames ac turpis egestas. Mauris eu sapien vitae lorem pulvinar varius in
				et turpis. Ut nibh mauris, lobortis eget felis a, auctor auctor est.
				Cras eleifend massa a leo tincidunt, commodo pharetra augue commodo.
				Phasellus sed lorem ultricies, lacinia ante eget, semper est. Vivamus
				euismod leo tempus nisi posuere, sit amet volutpat mauris varius. Cras
				condimentum enim quis placerat tempus. Nulla id sodales justo. Sed
				blandit sodales turpis, et tempor felis scelerisque ut. Aenean faucibus
				leo id odio vehicula condimentum. Aenean mattis leo vel ultrices
				pulvinar. Proin porta dui a dolor dapibus porttitor. Aliquam dapibus
				massa quis dui ullamcorper malesuada.
			</p>
		</BlockStyled>
	),
};

export const blockSectionH3: Story = {
	render: () => (
		<BlockStyled
			type={BlockType.ARTICLE}
			heading={{
				size: HeadingType.H2,
				text: "Lorem Ipsum",
			}}
		>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quam
				ligula, fringilla et rutrum a, tempus eu eros. Nulla facilisi.
				Pellentesque habitant morbi tristique senectus et netus et malesuada
				fames ac turpis egestas. Mauris eu sapien vitae lorem pulvinar varius in
				et turpis. Ut nibh mauris, lobortis eget felis a, auctor auctor est.
				Cras eleifend massa a leo tincidunt, commodo pharetra augue commodo.
				Phasellus sed lorem ultricies, lacinia ante eget, semper est. Vivamus
				euismod leo tempus nisi posuere, sit amet volutpat mauris varius. Cras
				condimentum enim quis placerat tempus. Nulla id sodales justo. Sed
				blandit sodales turpis, et tempor felis scelerisque ut. Aenean faucibus
				leo id odio vehicula condimentum. Aenean mattis leo vel ultrices
				pulvinar. Proin porta dui a dolor dapibus porttitor. Aliquam dapibus
				massa quis dui ullamcorper malesuada.
			</p>
		</BlockStyled>
	),
};
