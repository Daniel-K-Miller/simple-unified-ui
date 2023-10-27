import { ReactElement } from "react";

export interface IToggle {
	className?: string;
	initialValue: boolean;
	handleToggle: () => void;
	leftSVG?: ReactElement;
	rightSVG?: ReactElement;
}
