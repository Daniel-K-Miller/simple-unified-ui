import styled, { css } from "styled-components";

import { Block } from "./index";

const BlockStyled = styled(Block)`
	${(props) => css`
		display: flex;
		flex-direction: column;
		width: 100%;
		background-color: ${props.theme.colors.background};
		padding: 2em 1.5em 2em 1.5em;
		box-sizing: border-box;
		margin-bottom: 1rem;
		filter: drop-shadow(
			0px 0px 3px ${(props) => props.theme.colors.backgroundAlt}
		);

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin-top: 0;
			margin-bottom: 1rem;
		}

		p {
			margin-bottom: 1.5em;
			line-height: 1.5;
		}

		p:first-of-type {
			margin-top: 0;
		}

		p:last-of-type {
			margin-bottom: 0;
		}

		@media only screen and (min-width: ${(props) =>
				props.theme.breakPoints.smlMobile}) {
			padding: 2em 3em;
			border-radius: ${props.theme.radius.medium};
		}
	`}
`;

export { BlockStyled };
