import { ReactNode } from "react";

export interface IGridContainer {
	className?: string;
	children: ReactNode | Array<ReactNode>;
}
