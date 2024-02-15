import { IHeaderTopLevelILink } from "@base/interfaces/IHeaderContent";

import { MenuType } from "@base/enums/MenuType";

export interface IHeaderProps {
	className?: string;
	hasThemeToggle: boolean;
	links: Array<IHeaderTopLevelILink>;
}

export interface ISubMenu {
	subMenuLinks: Array<IHeaderTopLevelILink>;
	currentSubMenuLinks: IHeaderTopLevelILink | null;
	updateSubMenus: (contentKey: string | null) => void;
	setPreviousMenuType: React.Dispatch<React.SetStateAction<MenuType | null>>;
}
