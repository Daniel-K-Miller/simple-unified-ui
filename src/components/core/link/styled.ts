import styled, { css } from "styled-components";

import { Link } from "./index";

const LinkStyled = styled(Link)`
	${(props) => css`
		position: relative;
		text-decoration: none;
		color: ${props.theme.colors.text};
		max-width: max-content;
		border: none;
		background: transparent;
		font-size: 1rem;
		cursor: pointer;
		&:hover {
			color: ${props.theme.colors.textAlt};
			&.clickable {
				&::after {
					background-color: ${props.theme.colors.textAlt};
					opacity: 0.5;
				}
			}
			// if .active override lower opacity hover effect
			&.active {
				&::after {
					opacity: 1;
				}
			}
		}
		&.clickable {
			&::after {
				content: "";
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				display: block;
				margin: auto auto;
				width: 100%;
				max-width: 100%;
				height: 2px;
				background-color: transparent;
			}
		}
		&.active {
			&::after {
				background-color: ${props.theme.colors.textAlt};
				opacity: 1;
			}
		}
	`}
`;

export { LinkStyled };
