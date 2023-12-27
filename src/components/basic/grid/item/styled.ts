import styled, { css } from "styled-components";

import { GridItem } from "./index";

const GridItemStyled = styled(GridItem)`
	${(props) => {
		return css`
			flex-basis: ${(props.size / 12) * 100}%;
			flex-grow: 0;
			max-width: ${(props.size / 12) * 100}%;
		`;
	}}
`;

export { GridItemStyled };
