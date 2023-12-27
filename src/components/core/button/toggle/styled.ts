import styled from "styled-components";

import { Toggle } from "./index";

const ToggleBaseStyled = styled(Toggle)`
	position: absolute;
	/* right: ${(props) => props.theme.spacing.margin}; */
	display: flex;
	height: 25px;
	width: 50px;
	transition: opacity 0.25s ease-in-out;
	z-index: 200;
	svg {
		position: absolute;
		top: 0;
		bottom: 0;
		height: 15px;
		margin: auto;
		pointer-events: none;
		z-index: 10;
		& g {
			fill: ${(props) => props.theme.colors.text};
		}
	}

	svg:nth-of-type(1) {
		left: 7px;
		& g {
			fill: #f9f6ef;
		}
	}

	svg:nth-of-type(2) {
		right: 7px;
		& g {
			fill: #fcc314;
		}
	}

	input[type="checkbox"] {
		height: 0;
		width: 0;
		visibility: hidden;
		position: absolute;
	}

	label {
		cursor: pointer;
		width: 100%;
		height: 100%;
		background: #313131;
		display: block;
		border-radius: 100px;
		position: relative;
	}

	label:after {
		content: "";
		position: absolute;
		margin: auto 0;
		top: 0;
		bottom: 0;
		left: 5px;
		width: 40%;
		height: 75%;
		background: rgb(255, 255, 255);
		border-radius: 50%;
		transition: 0.3s;
		z-index: 20;
	}

	input:checked + label {
		background: rgb(26, 26, 26);
	}

	input:checked + label:after {
		left: calc(100% - 5px);
		transform: translateX(-100%);
		background-color: rgb(89, 89, 89);
	}
`;

export { ToggleBaseStyled };
