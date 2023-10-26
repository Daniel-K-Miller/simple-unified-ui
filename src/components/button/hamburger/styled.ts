import styled, { css } from "styled-components";

import { HamburgerButton } from "./index";

const HamburgerButtonStyled = styled(HamburgerButton)`
	position: absolute; // new
	top: 1em; // new
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	aspect-ratio: 1;
	background-color: ${(props) => props.theme.colors.background};
	border-radius: 5px;
	outline: none;
	border: none;
	margin-left: 1em;
	z-index: 300;
	&:hover {
		cursor: pointer;
	}
	& span {
		transform: rotate(0deg);
		transition: transform 0.2s ease-in-out, opacity 0.3s ease-in-out;
		&:first-child {
			margin-top: 0;
		}
		background-color: ${(props) => props.theme.colors.text};
		height: 2px;
		width: 20px;
		opacity: 1;
		margin-top: 5px;
	}

	// expanded state
	${(props) =>
		props.expanded === true &&
		css`
			& span {
				position: relative;
				transition: transform 0.2s ease-in-out, opacity 0.1s ease-in-out;
				&:first-child {
					transform: translate(0, 7px) rotate(45deg);
				}
				&:nth-child(2) {
					opacity: 0;
				}
				&:last-child {
					transform: translate(0, -7px) rotate(-45deg);
				}
			}
		`}
`;

export { HamburgerButtonStyled };
