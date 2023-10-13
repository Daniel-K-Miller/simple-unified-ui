import React, { FunctionComponent } from "react";
import { IGridContainer } from "./props";

export const GridContainer: FunctionComponent<IGridContainer> = ({
	className,
	children,
}) => {
	return <div className={className}>{children}</div>;
};
