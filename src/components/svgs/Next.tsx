import React, { FunctionComponent } from "react";
import { useTheme } from "styled-components";

import { SvgBaseStyled as Svg } from "@components/svgs/base/svg/styled";
import { Shape } from "@components/svgs/base/shape";

import { ShapeTypes } from "@enums/ShapeTypes";

const NextSVG: FunctionComponent = () => {
	const theme = useTheme();

	return (
		<Svg vpwidth="64" vpheight="52" height="7" fill={theme.colors.text}>
			<Shape
				type={ShapeTypes.PATH}
				value={
					"M64,26a4.23,4.23,0,0,0-3-3.73h0L6.86.42h0A4.85,4.85,0,0,0,0,4.82a4.8,4.8,0,0,0,3.19,4.5v0L44.48,26,3.27,42.63v0A4.8,4.8,0,0,0,4.87,52a5,5,0,0,0,2.07-.47v0L60.57,29.91C62.58,29.3,64,27.79,64,26Z"
				}
			/>
		</Svg>
	);
};

export { NextSVG };
