import React, { FunctionComponent } from "react";

import { SvgBaseStyled as Svg } from "@base/components/svgs/_base/svg/styled";

import { IEasySVG } from "./props";

import { calcRotation } from "@base/utils/calcRotation";
import { Direction } from "@base/enums/Direction";

const EasySVG: FunctionComponent<IEasySVG> = ({
	vpwidth,
	vpheight,
	width,
	height,
	fill,
	stroke,
	direction,
	rotate,
	children,
}) => {
	const pickRotationValue = () => {
		if (rotate !== undefined) return rotate;

		return direction !== undefined
			? calcRotation(Direction.RIGHT, direction)
			: undefined;
	};

	return (
		<Svg
			vpwidth={vpwidth}
			vpheight={vpheight}
			height={height ?? "20px"}
			width={width ?? "auto"}
			fill={fill}
			stroke={stroke}
			rotate={pickRotationValue()}
		>
			{children}
		</Svg>
	);
};

export { EasySVG };
