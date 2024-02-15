import { IHeaderTopLevelILink } from "@interfaces/IHeaderContent";

import { MenuType } from "@base/enums/MenuType";

export interface ISliderMenu {
	className?: string;
	content: Array<IHeaderTopLevelILink>;
	activeTopLevelLink: IHeaderTopLevelILink | null;
	updateSubMenus: (key: string | null) => void;
	previousMenuActive: MenuType | null;
}
