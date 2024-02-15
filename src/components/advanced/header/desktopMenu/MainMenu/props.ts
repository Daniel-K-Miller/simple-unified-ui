import { column } from "@base/interfaces/IHeaderContent";

export interface IMainMenu {
	className?: string;
	content?: column | null;
	isActive: boolean;
}
