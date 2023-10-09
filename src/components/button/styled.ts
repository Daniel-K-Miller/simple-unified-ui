import styled from "styled-components";
import { StylingTool } from "@utils/stylingTool";

import { Button } from "../button/index";

const ButtonBase = styled(Button)`
	height: auto;
	width: auto;
	background-color: ${(props) => props.theme.colors.background};
	color: ${(props) => props.theme.colors.text};
	border: none;
	outline: none;
	border-radius: ${(props) => props.theme.radius.small};
	padding: ${(props) =>
		StylingTool.multiplyStyle(props.theme.spacing.padding, 0.5) +
		" " +
		StylingTool.multiplyStyle(props.theme.spacing.padding, 1)};
	cursor: pointer;
	transition: all 0.2s ease-out;
	&:hover {
		background-color: ${(props) => props.theme.colors.backgroundAlt};
	}
`;

export { ButtonBase };
