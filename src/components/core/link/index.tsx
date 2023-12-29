import React, { FunctionComponent } from "react";

import { ILink } from "./props";

const Link: FunctionComponent<ILink> = ({
	className,
	name,
	href,
	withLi,
	isClickable,
	isActive,
	handleClick,
}) => {
	// add isClickable class from prop if appropriate
	const generateClassName = () =>
		`${className} ${isClickable && "clickable"} ${isActive && "active"}`;

	const handleClickExtension = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		if (isClickable) {
			event.preventDefault();

			if (handleClick !== undefined) handleClick(name);
		}
	};

	const link = (
		<a
			className={generateClassName()}
			href={href}
			onClick={(e) => handleClickExtension(e)}
		>
			{name}
		</a>
	);

	if (withLi) {
		return <li>{link}</li>;
	}

	return link;
};

export { Link };
