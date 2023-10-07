import { IButton } from "components/button/props";

export interface IFormButton extends IButton {
	readyToSubmit: boolean;
	disabled?: boolean;
}
