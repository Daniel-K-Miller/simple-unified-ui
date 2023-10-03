import React, { FunctionComponent } from "react";

import { Button, IButton } from "components/button";

export interface IFormButton extends IButton {
	readyToSubmit: boolean;
	disabled?: boolean;
}

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
