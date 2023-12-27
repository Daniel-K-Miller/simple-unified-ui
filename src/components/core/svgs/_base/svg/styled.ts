import styled, { css } from "styled-components";

import { Svg } from "@base/components/core/svgs/_base/svg";

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

		const width = props.width ? `${props.width}` : "auto";
		const height = props.height ? `${props.height}` : "auto";

		return css`
			width: ${width};
			height: ${height};
			${fill};
			${transform};
			${props.stroke && `stroke: ${props.stroke}`};
		`;
	}}
`;

export { SvgBaseStyled };
