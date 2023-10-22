import React, { FunctionComponent } from "react";

import { ReactNode } from "react";

export interface IG {
	children?: ReactNode | Array<ReactNode>;
	transform?: string;
}

const G: FunctionComponent<IG> = ({ children, transform }) => {
	return <g transform={transform}>{children}</g>;
};

export { G };
