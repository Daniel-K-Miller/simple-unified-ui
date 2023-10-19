import styled, { css } from "styled-components";

import { Svg } from "@components/svgs/base/svg";

const SvgBaseStyled = styled(Svg)`
	${(props) => {
		const fill = !props.fill
			? ""
			: `
				fill: ${props.fill};
			`;

		const transform = props.rotate
			? `transform: rotate(${props.rotate}deg)`
			: ``;

		const width = props.width ? `${props.width}px` : "auto";
		const height = props.height ? `${props.height}px` : "auto";

		return css`
			width: ${width};
			height: ${height};
			${fill};
			${transform};
		`;
	}}
`;

export { SvgBaseStyled };
