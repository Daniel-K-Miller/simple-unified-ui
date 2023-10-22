import React, { FunctionComponent } from "react";

import { ShapeTypes } from "@enums/ShapeTypes";

export interface IShape {
	type: ShapeTypes;
	value: string;
}

const Shape: FunctionComponent<IShape> = ({ type, value }) => {
	const Tag = `${type}` as keyof JSX.IntrinsicElements;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const attr = {} as any;

	switch (type) {
		case ShapeTypes.PATH:
			attr["d"] = value;
			break;
		case ShapeTypes.POLYGON:
			attr["points"] = value;
			break;
	}

	return <Tag {...attr} />;
};

export { Shape };
