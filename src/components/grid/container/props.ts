import { ReactElement } from "react";
import { IGridItem } from "../item/props";

export interface IGridContainer {
	/** Used automatically for styled-components */
	className?: string;
	/** Forced to be only GridItems (as size attribute required) */
	children: Array<ReactElement<IGridItem>>;
}
