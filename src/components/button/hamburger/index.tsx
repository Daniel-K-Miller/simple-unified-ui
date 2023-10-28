import React, { FunctionComponent } from "react";

import { IHamburgerButton } from "./props";

const HamburgerButton: FunctionComponent<IHamburgerButton> = ({
	className,
	onClick,
}) => {
	return (
		<div className={className}>
			<button onClick={onClick}>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
	);
};

export { HamburgerButton };
