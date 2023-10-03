import type { Meta, StoryObj } from "@storybook/react";

import { AlbumControlsStyled } from "../styled";

const meta: Meta<typeof AlbumControlsStyled> = {
	component: AlbumControlsStyled,
};

export default meta;

type Story = StoryObj<typeof AlbumControlsStyled>;

export const threeItems: Story = {
	args: { currentItemIndex: 0, shouldDisplay: true },
};
