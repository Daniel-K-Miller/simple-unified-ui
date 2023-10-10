import React, { FunctionComponent } from "react";

import { Button } from "../index";
import { IFormButton } from "./props";
import { SizeType } from "@enums/SizeType";

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
			size={SizeType.medium}
		>
			{children}
		</Button>
	);
};

export { FormButton };
