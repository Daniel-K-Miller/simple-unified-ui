export interface IHamburgerButton {
	/** Used automatically for styled-components */
	className?: string;
	/** onClick to be used to update expanded state */
	onClick: () => void;
	/** value which updates style */
	expanded: boolean;
}
