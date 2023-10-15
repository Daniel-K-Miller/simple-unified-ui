import { ReactElement } from "react";
import { IGridItem } from "../item/props";

export interface IGridContainer {
	className?: string;
	children: Array<ReactElement<IGridItem>>;
}
