import { ReactNode } from "react";

export interface IGridItem {
	/** Used automatically for styled-components */
	className?: string;
	/** Size of GridItem (maximum size of 12) */
	size: number;
	/** Any ReactNode */
	children: ReactNode | Array<ReactNode>;
}
