import { IHeaderTopLevelILink } from "@base/interfaces/IHeaderContent";

export interface IHeaderProps {
	className?: string;
	hasThemeToggle: boolean;
	links: Array<IHeaderTopLevelILink>;
}

export interface ISubMenu {
	subMenuLinks: Array<IHeaderTopLevelILink>;
	currentSubMenuLinks: IHeaderTopLevelILink | null;
	updateSubMenus: (contentKey: string | null) => void;
}
