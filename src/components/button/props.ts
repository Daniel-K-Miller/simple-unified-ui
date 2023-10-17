import { ReactNode } from "react";
import { ButtonType } from "@enums/ButtonType";
import { SizeType } from "@enums/SizeType";

export interface IButton {
	/** Used automatically for styled-components */
	className?: string;
	/** Should either be text or SVG */
	children: string | ReactNode;
	/** Mapped directly to HTML type attribute */
	type: ButtonType;
	/** Size to render button */
	size: SizeType;
	/** Utilised with styled-components */
	isActive?: boolean;
	/** Mapped directly to HTML disabled attribute */
	disabled?: boolean;
	/** onClick event */
	onClick?: () => void;
}
