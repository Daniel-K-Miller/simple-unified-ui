import styled, { css } from "styled-components";

import { AlbumControls } from "./index";

const AlbumControlsStyled = styled(AlbumControls)`
	display: none;
	pointer-events: none;

	position: absolute;
	display: flex;
	justify-content: space-between;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	button:nth-of-type(1) svg {
		transform: rotate(180deg);
	}
	${(props) =>
		props.isLeftButtonDisabled &&
		css`
			button:nth-of-type(1) {
				opacity: 0.25;
				cursor: default;
			}
		`}

	${(props) =>
		props.isRightButtonDisabled &&
		css`
			button:nth-of-type(2) {
				opacity: 0.25;
				cursor: default;
			}
		`}
`;

export { AlbumControlsStyled };
