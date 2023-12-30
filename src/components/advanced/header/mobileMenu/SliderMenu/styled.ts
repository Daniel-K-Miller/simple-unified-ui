import styled, { css } from "styled-components";

import { SliderMenu } from "./index";

const SliderMenuStyled = styled(SliderMenu)`
	${(props) => css`
		ul {
			flex-direction: column;
		}
	`}
`;

export { SliderMenuStyled };
