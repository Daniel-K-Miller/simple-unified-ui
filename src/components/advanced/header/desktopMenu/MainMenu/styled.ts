import styled from "styled-components";

import { MainMenu } from "./index";

const MainMenuStyled = styled(MainMenu)`
	display: flex;
	justify-content: center;
	gap: 4rem;
	&.active {
		padding: 1.5rem;
	}
	ul {
		list-style-type: none;
	}

	ul.column {
		display: flex;
		flex-direction: column;
		gap: 20px;
		& li.group {
			display: flex;
			flex-direction: column;
			& div {
				opacity: 0.6;
			}
			& ul.list {
				display: flex;
				flex-direction: column;
			}
			& picture img {
				max-width: 200px;
			}
		}
	}
`;

export { MainMenuStyled };
