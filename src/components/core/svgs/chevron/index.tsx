import React, { FunctionComponent } from "react";

import { EasySVG } from "@base/components/core/svgs/_base/easySVG/index";
import { Shape } from "@base/components/core/svgs/_base/shape";
import { IBaseSvgWithDirection } from "@base/components/core/svgs/_base/svg/props";

import { ShapeType } from "@base/enums/ShapeType";

const Chevron: FunctionComponent<IBaseSvgWithDirection> = ({
	height,
	fill,
	stroke,
	direction,
	rotate,
}) => {
	return (
		<EasySVG
			vpwidth="320"
			vpheight="512"
			height={height}
			fill={fill}
			stroke={stroke}
			direction={direction}
			rotate={rotate}
		>
			<Shape
				type={ShapeType.PATH}
				value={
					"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
				}
			/>
		</EasySVG>
	);
};

export { Chevron };
