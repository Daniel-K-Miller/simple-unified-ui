import { ReactNode } from "react";

export interface IGridItem {
	className?: string;
	size: number; // out of 12
	children: ReactNode | Array<ReactNode>;
}
