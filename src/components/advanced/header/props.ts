import { IHeaderTopLevelILink } from "@base/interfaces/IHeaderContent";

export interface IHeaderProps {
	className?: string;
	hasThemeToggle: boolean;
	links: Array<IHeaderTopLevelILink>;
}
