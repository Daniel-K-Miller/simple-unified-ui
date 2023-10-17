export interface IControls {
	/** Used automatically for styled-components */
	className?: string;
	/** Value to determine whether to render controls or not */
	shouldDisplay: boolean | null;
	/** Index of current button so buttons can update state on click */
	currentItemIndex: number;
	/** handleButton click to update currentIndex */
	handleButtonOnClick: (index: number) => void;
	/** Value to set disable attribute on left button */
	isLeftButtonDisabled: boolean | null;
	/** Value to set disable attribute on right button */
	isRightButtonDisabled: boolean | null;
}
