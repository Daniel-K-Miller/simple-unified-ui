import React, { FunctionComponent } from "react";
import { IGridItem } from "./props";

export const GridItem: FunctionComponent<IGridItem> = ({
	className,
	children,
}) => {
	return <div className={className}>{children}</div>;
};
