export interface IControls {
	className?: string;
	shouldDisplay: boolean | null;
	currentItemIndex: number;
	handleButtonOnClick: (index: number) => void;
	isLeftButtonDisabled: boolean | null;
	isRightButtonDisabled: boolean | null;
}
