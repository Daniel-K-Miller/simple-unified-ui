import styled, { css } from "styled-components";

import { Header } from "./index";

const HeaderStyled = styled(Header)`
	${(props) => css`
		background-color: ${props.theme.colors.background};
		padding: 1rem 0;
		// top level nav
		> nav {
			& > ul {
				display: flex;
				justify-content: center;
				list-style-type: none;
				gap: 20px;
			}
		}
	`}
`;

export { HeaderStyled };
