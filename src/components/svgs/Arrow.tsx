import React, { FunctionComponent } from "react";

import { SvgBaseStyled as Svg } from "components/svgs/base/svg/_styled";
import { G } from "components/svgs/base/g/G";
import { Shape } from "components/svgs/base/shape/Shape";

import { ShapeTypes } from "enums/ShapeTypes";

const ArrowSVG: FunctionComponent = () => {
	return (
		<Svg vpwidth="460" vpheight="531" height="10" width="10">
			<G>
				<Shape
					type={ShapeTypes.POLYGON}
					value={"0.866,460 265.87,1 530.874,460"}
				/>
			</G>
		</Svg>
	);
};

export { ArrowSVG };
