import React, { FunctionComponent } from "react";

import { SvgBaseStyled as Svg } from "components/svgs/base/svg/_styled";
import { G } from "components/svgs/base/g/G";
import { Shape } from "components/svgs/base/shape/Shape";

import { ShapeTypes } from "enums/ShapeTypes";

const DeleteSVG: FunctionComponent = () => {
	return (
		<Svg vpwidth="500" vpheight="500" fill={"none"}>
			<G>
				<Shape
					type={ShapeTypes.PATH}
					value={
						"M432.07,142.77L377.69,473.5H225.64h33.85H107.44L53.06,142.77 M186.79,172.18l2.22,219.75 M312.21,171.07 l2.22,219.75 M7,102.26h485 M187.9,31.23h-39.95c-25.53,0-25.53,18.87-25.53,18.87v52.16 M367.7,102.26V50.1 c0,0,0-18.87-25.53-18.87h-39.95 M183.59,31.23H311.1"
					}
				/>
			</G>
		</Svg>
	);
};

export { DeleteSVG };
