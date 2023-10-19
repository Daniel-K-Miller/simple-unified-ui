import React, { FunctionComponent } from "react";

import { SvgBaseStyled as Svg } from "@components/svgs/base/svg/styled";
import { Shape } from "@components/svgs/base/shape";

import { ShapeTypes } from "enums/ShapeTypes";

const ArrowSVG: FunctionComponent = ({}) => {
	return (
		<Svg vpwidth="320" vpheight="512" height="20">
			<Shape
				type={ShapeTypes.PATH}
				value={
					"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
				}
			/>
		</Svg>
	);
};

export { ArrowSVG };
