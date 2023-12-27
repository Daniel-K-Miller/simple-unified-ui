import type { Meta, StoryObj } from "@storybook/react";

import { SocialPostStyled } from "./styled";
import { Socials } from "@enums/SocialsType";
import { MediaType } from "@base/enums/MediaType";

const meta: Meta<typeof SocialPostStyled> = {
	title: "Advanced/SocialPost",
	component: SocialPostStyled,
	parameters: {
		docs: {
			description: {
				component: "SocialPostStyled component",
			},
		},
	},
};
export default meta;

type Story = StoryObj<typeof SocialPostStyled>;

export const socialPost: Story = {
	args: {
		post: {
			caption:
				"This is a test caption I should maybe put some Lorem Ipsum in here. Maybe?",
			dateCreated: new Date().toDateString(),
			handle: "SimpleSimon",
			platform: Socials.TWITTER,
			media: {
				type: MediaType.IMAGE,
				url: "https://pbs.twimg.com/media/F8VJIihWIAEZHKS?format=jpg&name=4096x4096",
			},
		},
	},
};
