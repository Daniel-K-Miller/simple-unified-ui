import { Button } from "./Button";
import styled from "styled-components";
const SmallButton = styled(Button) `
	background: ${(props) => props.bgColor};
	font-size: 1em;
	padding: 0.5em;
	color: white;
	border-radius: 0.25;
`;
const MediumButton = styled(Button) `
	background: ${(props) => props.bgColor};
	font-size: 1.5em;
	padding: 0.75em;
	color: white;
	border-radius: 0.25;
`;
const LargeButton = styled(Button) `
	background: ${(props) => props.bgColor};
	font-size: 1.5em;
	padding: 0.75em;
	color: white;
	border-radius: 0.25;
`;
export { SmallButton, MediumButton, LargeButton };
//# sourceMappingURL=styled.js.map