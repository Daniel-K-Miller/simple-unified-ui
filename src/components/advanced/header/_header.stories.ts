import type { Meta, StoryObj } from "@storybook/react";

import { HeaderStyled } from "./styled";

const meta: Meta<typeof HeaderStyled> = {
	title: "advanced/Header",
	component: HeaderStyled,
	parameters: {
		docs: {
			description: {
				component: "HeaderStyled component",
			},
		},
	},
};
export default meta;

type Story = StoryObj<typeof HeaderStyled>;

export const Header: Story = {
	args: {
		links: [
			{ name: "home", isClickable: false, content: null, href: "#" },
			{
				name: "about",
				isClickable: true,
				content: [
					[
						{
							title: "heading 1:1",
							links: [
								{
									name: "link 1",
									href: "#",
								},
								{
									name: "link 2",
									href: "#",
								},
							],
						},
						{
							title: "heading 1:2",
							links: [
								{
									name: "link 1",
									href: "#",
								},
								{
									name: "link 2",
									href: "#",
								},
								{
									name: "link 3",
									href: "#",
								},
							],
						},
					],
					[
						{
							title: "heading 2:1",
							links: [
								{
									name: "link 1",
									href: "#",
								},
								{
									name: "link 2",
									href: "#",
								},
								{
									name: "link 3",
									href: "#",
								},
							],
						},
						{
							title: "heading 2:2",
							links: [
								{
									name: "link 1",
									href: "#",
								},
								{
									name: "link 2",
									href: "#",
								},
								{
									name: "link 3",
									href: "#",
								},
							],
						},
					],
					[
						{
							title: "heading 3:1",
							links: [
								{
									name: "link 1",
									href: "#",
								},
								{
									name: "link 2",
									href: "#",
								},
								{
									name: "link 3",
									href: "#",
								},
							],
						},
						{
							title: "heading 3:2",
							links: [
								{
									name: "link 1",
									href: "#",
								},
								{
									name: "link 2",
									href: "#",
								},
								{
									name: "link 3",
									href: "#",
								},
							],
						},
					],
					[
						{
							title: "heading 4:1",
							links: [
								{
									name: "link 1",
									href: "#",
								},
								{
									name: "link 2",
									href: "#",
								},
								{
									name: "link 3",
									href: "#",
								},
							],
						},
						{
							src: "https://images.unsplash.com/photo-1503818454-2a008dc38d43?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFsbHxlbnwwfHwwfHx8MA%3D%3D",
							alt: "Tall image of a dog",
							name: "Tall image of a dog",
							href: "#",
						},
					],
				],
				href: "#",
			},
			{
				name: "contact",
				isClickable: true,
				content: [
					[
						{
							title: "heading 1:1",
							links: [
								{
									name: "link 1",
									href: "#",
								},
								{
									name: "link 2",
									href: "#",
								},
								{
									name: "link 3",
									href: "#",
								},
							],
						},
					],
				],
				href: "#",
			},
		],
	},
};
