import styled, { css } from "styled-components";

import { Svg } from "@components/svgs/base/svg";

const SvgBaseStyled = styled(Svg)`
	width: ${(props) => props.width}px;
	height: ${(props) => props.height}px;
	${(props) =>
		props.fill === "none"
			? css`
					stroke: ${(props) => props.theme.colors.textAlt};
					stroke-width: 28px;
					fill: none !important;
			  `
			: css`
					fill: ${props.fill};
			  `};
`;

export { SvgBaseStyled };
