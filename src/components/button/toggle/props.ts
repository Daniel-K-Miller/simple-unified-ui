import { ReactElement } from "react";

export interface IToggle {
	/** Used automatically for styled-components */
	className?: string;
	/** Intial state of the toggle */
	initialValue: boolean;
	/** Click event to update toggle state */
	handleToggle: () => void;
	/** Optional SVG to sit inside the left side of toggle */
	leftSVG?: ReactElement;
	/** Optional SVG to sit inside the right side of toggle */
	rightSVG?: ReactElement;
}
