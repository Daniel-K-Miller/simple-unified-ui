import React, { FunctionComponent } from "react";

import { ShapeType } from "@base/enums/ShapeType";

export interface IShape {
	type: ShapeType;
	value: string;
	scale?: number;
}

const Shape: FunctionComponent<IShape> = ({ type, value, scale }) => {
	const Tag = `${type}` as keyof JSX.IntrinsicElements;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const attr = {} as any;

	switch (type) {
		case ShapeType.PATH:
			attr["d"] = value;
			break;
		case ShapeType.POLYGON:
			attr["points"] = value;
			break;
	}

	if (scale !== undefined) attr["transform"] = `scale(${scale})`;

	return <Tag {...attr} />;
};

export { Shape };
