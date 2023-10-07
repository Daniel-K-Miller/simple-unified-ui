import { ReactNode } from "react";
import { ButtonType } from "../../enums/ButtonType";

export interface IButton {
	className?: string;
	children: string | ReactNode;
	type: ButtonType;
	isActive?: boolean;
	disabled?: boolean;
	onClick?: () => void;
}
