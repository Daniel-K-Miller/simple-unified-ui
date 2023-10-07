import React, { FunctionComponent } from "react";

import { SvgBaseStyled as Svg } from "@components/svgs/base/svg/styled";
import { G } from "@components/svgs/base/g";
import { Shape } from "@components/svgs/base/shape";

import { ShapeTypes } from "enums/ShapeTypes";

const TickSVG: FunctionComponent = () => {
	return (
		<Svg vpwidth="500" vpheight="500" fill="none">
			<G>
				<Shape
					type={ShapeTypes.POLYGON}
					value={
						"177.5,439.29 177.25,439.54 113.11,375.39 113.35,375.15 0.57,262.36 64.71,198.22 177.5,311 433.79,54.71 497.94,118.85 241.64,375.15 241.89,375.39 177.74,439.54"
					}
				/>
				<Shape
					type={ShapeTypes.POLYGON}
					value={
						"M433.79,55.41l63.44,63.44L241.64,374.44l-0.71,0.71l0.25,0.25l-63.44,63.44l-0.25-0.25l-0.25,0.25l-63.44-63.44l0.25-0.25 l-0.71-0.71L1.28,262.36l63.44-63.44L176.79,311l0.71,0.71l0.71-0.71L433.79,55.41 M433.79,54L177.5,310.3L64.71,197.51 l-64.85,64.85l112.79,112.79l-0.25,0.25l64.85,64.85l0.25-0.25l0.25,0.25l64.85-64.85l-0.25-0.25l256.3-256.3L433.79,54L433.79,54z"
					}
				/>
			</G>
		</Svg>
	);
};

export { TickSVG };
