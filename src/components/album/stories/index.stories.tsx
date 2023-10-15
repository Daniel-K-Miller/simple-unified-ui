import type { Meta, StoryObj } from "@storybook/react";

import { AlbumStyled } from "../styled";

const meta: Meta<typeof AlbumStyled> = {
	component: AlbumStyled,
};

export default meta;

type Story = StoryObj<typeof AlbumStyled>;

export const sevenItems: Story = {
	args: {
		itemGap: 15,
		itemWidth: 250,
		name: "test album",
		handleItemClick: () => console.log("test"),
		items: [
			{
				src: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9zdGF0aWMvaW1hZ2VzL3dlYnNpdGUvMjAyMi0wNS91cHdrNjE3Nzc1NjYtd2lraW1lZGlhLWltYWdlLWtvd2JvM2E5LmpwZw.jpg?s=QHn-xgeDSM1a2uwZdW0U-PLrJ5bJESVKO-qNWJV5i4Y",
				alt: "dog",
			},
			{
				src: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/frfish_orange_tropical_fish-image-kybbmds2.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=c8a03a1a5b05319b53edec0e3ba0cc01",
				alt: "fish",
			},
			{
				src: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk76575664-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=988f85e8210a90a1788cbcd706500507",
				alt: "cat",
			},
			{
				src: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9zdGF0aWMvaW1hZ2VzL3dlYnNpdGUvMjAyMi0wNS91cHdrNjE3Nzc1NjYtd2lraW1lZGlhLWltYWdlLWtvd2JvM2E5LmpwZw.jpg?s=QHn-xgeDSM1a2uwZdW0U-PLrJ5bJESVKO-qNWJV5i4Y",
				alt: "dog",
			},
			{
				src: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/frfish_orange_tropical_fish-image-kybbmds2.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=c8a03a1a5b05319b53edec0e3ba0cc01",
				alt: "fish",
			},
			{
				src: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk76575664-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=988f85e8210a90a1788cbcd706500507",
				alt: "cat",
			},
			{
				src: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9zdGF0aWMvaW1hZ2VzL3dlYnNpdGUvMjAyMi0wNS91cHdrNjE3Nzc1NjYtd2lraW1lZGlhLWltYWdlLWtvd2JvM2E5LmpwZw.jpg?s=QHn-xgeDSM1a2uwZdW0U-PLrJ5bJESVKO-qNWJV5i4Y",
				alt: "dog",
			},
		],
	},
};
