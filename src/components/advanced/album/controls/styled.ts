import styled, { css } from "styled-components";

import { AlbumControls } from "./index";

const AlbumControlsStyled = styled(AlbumControls)`
	${(props) => {
		return css`
			display: none;
			pointer-events: none;
			position: absolute;
			display: flex;
			justify-content: space-between;
			align-items: center;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;

			button {
				pointer-events: all;
				height: inherit;

				&:nth-of-type(1) svg {
					transform: rotate(180deg);
				}

				&:disabled {
					opacity: 0.25;
					cursor: default;
				}

				@media only screen and (max-width: ${props.theme.breakPoints.smlMobile}) {
					border-radius: 50%;
					height: max-content;
					aspect-ratio: 1 / 1;
					margin: 0.5em;
					}
				}
			}
		}
	`;
	}}
`;

export { AlbumControlsStyled };
