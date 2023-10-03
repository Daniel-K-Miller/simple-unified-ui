import React, { FunctionComponent } from "react";

import { SvgBaseStyled as Svg } from "components/svgs/base/svg/_styled";
import { G } from "components/svgs/base/g/G";
import { Shape } from "components/svgs/base/shape/Shape";

import { ShapeTypes } from "enums/ShapeTypes";

const ExitSVG: FunctionComponent = () => {
	return (
		<Svg vpwidth="25" vpheight="25" fill="black">
			<G>
				<Shape
					type={ShapeTypes.POLYGON}
					value={
						"0.75,21.39 9.74,12.37 0.71,3.31 3.6,0.4 12.64,9.46 21.42,0.66 24.31,3.56 15.53,12.37 24.27,21.13 21.37,24.04 12.64,15.27 3.65,24.29"
					}
				/>
				<Shape
					type={ShapeTypes.PATH}
					value={
						"M3.6,1.11l8.33,8.35l0.71,0.71l0.71-0.71l8.07-8.09l2.19,2.2l-8.07,8.1l-0.7,0.71l0.7,0.71l8.03,8.06l-2.19,2.2l-8.03-8.05 l-0.71-0.71l-0.71,0.71l-8.28,8.31l-2.19-2.2l8.29-8.31l0.7-0.71l-0.7-0.71L1.41,3.31L3.6,1.11 M3.6-0.31L0,3.31l9.03,9.06 l-8.99,9.02L3.64,25l8.99-9.02l8.74,8.76l3.6-3.61l-8.74-8.76l8.78-8.8l-3.6-3.61l-8.78,8.8L3.6-0.31L3.6-0.31z"
					}
				/>
			</G>
		</Svg>
	);
};

export { ExitSVG };
