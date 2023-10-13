import styled, { css } from "styled-components";

import { GridContainer } from "./index";

const GridContainerStyled = styled(GridContainer)`
	${(props) => {
		return css`
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
		`;
	}}
`;

export { GridContainerStyled };
