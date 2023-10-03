import React, { FunctionComponent } from "react";

import { IButton } from "./props";

const Button: FunctionComponent<IButton> = ({
	className,
	children,
	type,
	disabled,
	onClick,
}) => {
	return (
		<button
			className={className}
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export { Button };
