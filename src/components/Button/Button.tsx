import React from "react";
import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({ className, text, onClick }) => {
	return (
		<button className={className} onClick={onClick}>
			{text}
		</button>
	);
};
