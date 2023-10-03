import styled, { css } from "styled-components";

import { AlbumItems } from "./index";

const AlbumItemsStyled = styled(AlbumItems)`
	> div {
		display: flex;
		flex-direction: row;
		gap: ${(props) => (props.itemGap != null ? `${props.itemGap}px` : "20px")};
		overflow-y: hidden;
		overflow-x: scroll;
		scroll-behavior: smooth;
		&::-webkit-scrollbar {
			display: none;
		}
		div {
			position: relative;
			height: 125px;
			width: ${(props) =>
				props.itemWidth != null ? `${props.itemWidth}px` : "200px"};
			border-radius: 10px;
			flex: 0 0 auto;
			opacity: 0.5;
			transition: opacity 0.075s ease-out;
			user-select: none;
			background-color: white;
			img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: 5px;
			}
			&:hover {
				opacity: 1;
				cursor: pointer;
			}
		}
	}
	@media only screen and (min-width: ${(props) =>
			props.theme.mediaQueryBreakPoints.smlMobile}) {
		${(props) =>
			props.addControlBoxing &&
			css`
				margin: 0 32px;
				padding: 0 1em;
			`}
	}
`;

export { AlbumItemsStyled };
