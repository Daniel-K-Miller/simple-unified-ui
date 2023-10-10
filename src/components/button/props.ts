import { ReactNode } from "react";
import { ButtonType } from "@enums/ButtonType";
import { SizeType } from "@enums/SizeType";

export interface IButton {
	className?: string;
	children: string | ReactNode;
	type: ButtonType;
	size: SizeType;
	isActive?: boolean;
	disabled?: boolean;
	onClick?: () => void;
}
