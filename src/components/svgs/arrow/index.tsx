import React, { FunctionComponent } from "react";

import { SvgBaseStyled as Svg } from "@base/components/svgs/_base/svg/styled";
import { Shape } from "@base/components/svgs/_base/shape";

import { ShapeTypes } from "@enums/ShapeTypes";
import { IBaseSvgWithDirection } from "../_base/svg/props";

import { calcRotation } from "@base/utils/calcRotation";
import { Direction } from "@enums/direction";

const Arrow: FunctionComponent<IBaseSvgWithDirection> = ({
	width,
	height,
	fill,
	stroke,
	direction,
	rotate,
}) => {
	const pickRotationValue = () => {
		if (rotate !== undefined) return rotate;

		return direction !== undefined
			? calcRotation(Direction.RIGHT, direction)
			: undefined;
	};

	return (
		<Svg
			vpwidth="320"
			vpheight="512"
			height={height ?? "20px"}
			width={width ?? "auto"}
			fill={fill}
			stroke={stroke}
			rotate={pickRotationValue()}
		>
			<Shape
				type={ShapeTypes.PATH}
				value={
					"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
				}
			/>
		</Svg>
	);
};

export { Arrow };
