import React, { FunctionComponent } from "react";

import { ILink } from "./props";

const Link: FunctionComponent<ILink> = ({
	className,
	name,
	href,
	withLi,
	isButton,
	isActive,
	handleClick,
}) => {
	// add isClickable class from prop if appropriate
	const generateClassName = () =>
		`${className} ${isButton && "clickable"} ${isActive && "active"}`;

	const handleClickExtension = (
		event:
			| React.MouseEvent<HTMLAnchorElement, MouseEvent>
			| React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		if (isButton) {
			event.preventDefault();

			if (handleClick !== undefined) handleClick(name);
		}
	};

	let link: any = null;

	if (!isButton) {
		link = (
			<a
				className={generateClassName()}
				href={href}
				onClick={(e) => handleClickExtension(e)}
			>
				{name}
			</a>
		);
	} else {
		link = (
			<button
				className={generateClassName()}
				onClick={(e) => handleClickExtension(e)}
			>
				{name}
			</button>
		);
	}

	if (withLi) {
		return <li>{link}</li>;
	}

	return link;
};

export { Link };
