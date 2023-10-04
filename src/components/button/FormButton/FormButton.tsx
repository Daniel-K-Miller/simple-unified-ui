import React, { FunctionComponent } from "react";

import { Button } from "../index";
import { IFormButton } from "./props";

const FormButton: FunctionComponent<IFormButton> = ({
	className,
	children,
	type,
	disabled,
	onClick,
}) => {
	return (
		<Button
			className={className}
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</Button>
	);
};

export { FormButton };
