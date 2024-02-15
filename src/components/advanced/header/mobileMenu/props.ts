import { ISubMenu } from "../props";
import { MenuType } from "@base/enums/MenuType";

export interface IMobileMenu extends ISubMenu {
	initialExpandedValue: boolean;
	previousMenuActive: MenuType | null;
}
