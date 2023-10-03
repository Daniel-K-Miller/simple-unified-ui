import React, { FunctionComponent } from "react";
import { useTheme } from "styled-components";

import { SvgBaseStyled as Svg } from "components/svgs/base/svg/_styled";
import { G } from "components/svgs/base/g/G";
import { Shape } from "components/svgs/base/shape/Shape";

import { ShapeTypes } from "enums/ShapeTypes";

const LastSVG: FunctionComponent = () => {
	const theme = useTheme();

	return (
		<Svg vpwidth="120" vpheight="52" height="7" fill={theme.colors.text}>
			<G>
				<Shape
					type={ShapeTypes.PATH}
					value={
						"M60.57,29.91c2.01-0.61,3.43-2.13,3.43-3.9c0-1.63-1.2-3.04-2.95-3.73l0,0L6.86,0.42l0,0.01C6.25,0.16,5.58,0,4.87,0C2.18,0,0,2.16,0,4.82c0,2.07,1.33,3.82,3.19,4.5L3.18,9.34L44.48,26L3.27,42.63l0.01,0.02C1.37,43.3,0,45.08,0,47.18C0,49.84,2.18,52,4.87,52c0.74,0,1.44-0.18,2.07-0.47l0.01,0.02L60.57,29.91z"
					}
				/>
				<Shape
					type={ShapeTypes.PATH}
					value={
						"M120,26.01c0-1.63-1.2-3.04-2.95-3.73l0,0L62.86,0.42l0,0.01C62.25,0.16,61.58,0,60.87,0C58.18,0,56,2.16,56,4.82c0,2.07,1.33,3.82,3.19,4.5l-0.01,0.01L100.48,26L59.27,42.63l0.01,0.02C57.37,43.3,56,45.08,56,47.18c0,2.66,2.18,4.82,4.87,4.82c0.74,0,1.44-0.18,2.07-0.47l0.01,0.02l53.62-21.63C118.58,29.3,120,27.79,120,26.01z"
					}
				/>
			</G>
		</Svg>
	);
};

export { LastSVG };
