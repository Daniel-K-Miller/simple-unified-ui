import React, { FunctionComponent } from "react";

import { IButton } from "./props";
import { SizeType } from "@enums/SizeType";

const Button: FunctionComponent<IButton> = ({
	className,
	children,
	type,
	disabled,
	size = SizeType.medium,
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
