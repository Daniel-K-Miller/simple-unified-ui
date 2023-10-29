import styled from "styled-components";

import { SocialPost } from "./index";

const SocialPostStyled = styled(SocialPost)`
	position: relative;
	width: 100%;
	> .top {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1em;
		.social-logo-and-handle {
			display: flex;

			svg {
				width: 25px;
				height: 25px;
			}

			.handle {
				margin-left: 0.3125em;

				a {
					display: flex;
					flex-direction: row;
					text-decoration: none;
					color: ${(props) => props.theme.colors.text};
					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
	}
	img,
	video {
		min-width: 100%;
		max-width: 100%;
		aspect-ratio: 1;
		border-radius: 10px;
		margin-bottom: 1em;
	}
`;

export { SocialPostStyled };
