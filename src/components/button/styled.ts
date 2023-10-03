import styled from "styled-components";

import { Button } from "components/button/index";

const ButtonWithPointer = styled(Button)`
	pointer-events: all !important;
	:hover {
		cursor: pointer;
	}
`;

const ButtonBaseStyled = styled(Button)`
	height: auto;
	width: auto;
	background-color: black;
	border: none;
	outline: none;
	border-radius: 10px;
	color: white;
	cursor: pointer;
`;

const ButtonSmlStyled = styled(ButtonBaseStyled)`
	padding: 0.5em;
`;

const ButtonLongStyled = styled(Button)`
	height: auto;
	width: 100%;
	padding: 0.75em 0.5em;
	margin-bottom: 1rem;
	outline: none;
	border: none;
	border-radius: 5px;
	background-color: black;
	color: black;
	cursor: pointer;
`;

const PageButtonStyled = styled(ButtonSmlStyled)`
	background-color: transparent !important;
	border-radius: 5px;
	height: fit-content !important;
	&:hover {
		background-color: black !important;
		fill: white;
	}
`;

const CreateNewBlogButton = styled(ButtonLongStyled)`
	border-radius: 0;
	@media only screen and (min-width: ${(props) =>
			props.theme.mediaQueryBreakPoints.smlMobile}) {
		border-radius: 5px;
	}
`;

const AlbumButtonStyled = styled(ButtonWithPointer)`
	width: 32px;
	height: 32px;
	margin: auto 0;
	border: none;
	border-radius: 20px;
	background-color: white;
	box-sizing: border-box;
`;

const FormButtonStyled = styled(ButtonSmlStyled)`
	margin-top: 1em;
	background-color: ${(props) => props.theme.colors.accents.orange};
`;

const NavButton = styled(ButtonBaseStyled)`
	height: 100%;
	aspect-ratio: 1;
	z-index: 100;
	background-color: black;
	svg {
		transform: ${(props) => (!props.isActive ? "rotate(180deg)" : "0")};
	}
`;

export {
	ButtonBaseStyled,
	ButtonSmlStyled,
	ButtonLongStyled,
	CreateNewBlogButton,
	PageButtonStyled,
	AlbumButtonStyled,
	FormButtonStyled,
	NavButton,
};
