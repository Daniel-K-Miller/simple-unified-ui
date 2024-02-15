import styled, { css } from "styled-components";

import { SliderMenu } from "./index";

const SliderMenuStyled = styled(SliderMenu)`
	display: flex;
	flex-direction: row;
	align-items: start;
	gap: 20px;
	overflow-x: hidden;
	${(props) => css`
		ul {
			flex-direction: column;
		}
	`}
`;

export { SliderMenuStyled };
