import { MouseEventHandler } from "react";

export interface ButtonProps {
	className?: string;
	text: string;
	bgColor?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}
