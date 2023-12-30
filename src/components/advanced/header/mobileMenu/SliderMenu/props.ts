import { IHeaderTopLevelILink } from "@interfaces/IHeaderContent";

export interface ISliderMenu {
	className?: string;
	content: Array<IHeaderTopLevelILink>;
	activeTopLevelLink: IHeaderTopLevelILink | null;
	updateSubMenus: (key: string | null) => void;
}
