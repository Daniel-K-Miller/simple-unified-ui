import React, { FunctionComponent } from "react";

import { SvgBaseStyled as Svg } from "components/svgs/base/svg/_styled";
import { G } from "components/svgs/base/g/G";
import { Shape } from "components/svgs/base/shape/Shape";

import { ShapeTypes } from "enums/ShapeTypes";

const PlusSVG: FunctionComponent = () => {
	return (
		<Svg vpwidth="25" vpheight="25" height="25" width="25">
			<G>
				<Shape
					type={ShapeTypes.POLYGON}
					value={
						"25,10 15,10 15,0 10,0 10,10 0,10 0,15 10,15 10,25 15,25 15,15 25,15 	"
					}
				/>
			</G>
		</Svg>
	);
};

export { PlusSVG };
