import React, { FunctionComponent } from "react";

import { EasySVG } from "@base/components/core/svgs/_base/easySVG/index";
import { Shape } from "@base/components/core/svgs/_base/shape";
import { G } from "@base/components/core/svgs/_base/g";
import { IBaseSvgWithDirection } from "@base/components/core/svgs/_base/svg/props";

import { ShapeType } from "@base/enums/ShapeType";

const Facebook: FunctionComponent<IBaseSvgWithDirection> = ({
	height,
	fill,
	stroke,
	direction,
	rotate,
}) => {
	return (
		<EasySVG
			vpwidth="40"
			vpheight="40"
			height={height}
			fill={fill ?? "rgb(0, 98, 224)"}
			stroke={stroke}
			direction={direction}
			rotate={rotate}
		>
			<G>
				<Shape
					type={ShapeType.PATH}
					value={
						"M16.7,39.8C7.2,38.1,0,29.9,0,20C0,9,9,0,20,0s20,9,20,20c0,9.9-7.2,18.1-16.7,19.8l-1.1-0.9h-4.4L16.7,39.8z"
					}
				/>
				<Shape
					type={ShapeType.PATH}
					value={
						"M27.8,25.6l0.9-5.6h-5.3v-3.9c0-1.6,0.6-2.8,3-2.8h2.6V8.2c-1.4-0.2-3-0.4-4.4-0.4c-4.6,0-7.8,2.8-7.8,7.8V20  h-5v5.6h5v14.1c1.1,0.2,2.2,0.3,3.3,0.3c1.1,0,2.2-0.1,3.3-0.3V25.6H27.8z"
					}
					fill="white"
				/>
			</G>
		</EasySVG>
	);
};

export { Facebook };
