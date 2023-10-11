import styled, { css } from "styled-components";
import { StylingTool } from "@utils/stylingTool";

import { Button } from "../button/index";

const ButtonBase = styled(Button)`
	${(props) => {
		const stylingTool = new StylingTool(props.theme, props.size);

		return css`
			padding: ${stylingTool.calcPadding()};
			height: auto;
			width: auto;
			background-color: ${(props) => props.theme.colors.background};
			color: ${(props) => props.theme.colors.text};
			font-size: ${stylingTool.calcFontSize()};
			border: none;
			outline: none;
			border-radius: ${stylingTool.calcBorderRadius()};
			cursor: pointer;
			transition: all 0.2s ease-out;
			&:hover {
				background-color: ${(props) => props.theme.colors.backgroundAlt};
			}
		`;
	}}
`;

const ButtonOutline = styled(ButtonBase)`
	${(props) => {
		const stylingTool = new StylingTool(props.theme, props.size);

		return css`
			border: solid ${(props) => props.theme.colors.background}
				${stylingTool.calcBorderSize()};
			background-color: transparent;
			&:hover {
				border-color: ${(props) => props.theme.colors.backgroundAlt};
				background-color: transparent;
			}
		`;
	}}
`;

// use case most likely with SVGs (text with aspect ratio 1:1 can be quite large!)
const ButtonCircular = styled(ButtonBase)`
	border-radius: 50%;
	height: max-content;
	aspect-ratio: 1 / 1;
`;

export { ButtonBase, ButtonOutline, ButtonCircular };
