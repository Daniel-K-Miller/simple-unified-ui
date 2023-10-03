import styled from "styled-components";

import { FormButton } from "components/button/FormButton/FormButton";

const FormButtonStyled = styled(FormButton)`
	height: auto;
	width: auto;
	border: none;
	outline: none;
	border-radius: 10px;
	color: ${(props) => props.theme.colors.text};
	padding: 0.5em;
	margin-top: 1em;
	background-color: ${(props) => props.theme.colors.accents.orange};
	opacity: ${(props) => (props.readyToSubmit ? 1 : 0.5)};
	cursor: pointer;
`;

export { FormButtonStyled };
