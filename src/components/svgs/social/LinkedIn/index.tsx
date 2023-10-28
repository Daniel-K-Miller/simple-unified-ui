import React, { FunctionComponent } from "react";

import { EasySVG } from "@components/svgs/_base/easySVG/index";
import { Shape } from "@components/svgs/_base/shape";
import { G } from "@components/svgs/_base/g";
import { IBaseSvgWithDirection } from "@components/svgs/_base/svg/props";

import { ShapeType } from "@base/enums/ShapeType";

const LinkedIn: FunctionComponent<IBaseSvgWithDirection> = ({
	height,
	fill,
	stroke,
	direction,
	rotate,
}) => {
	return (
		<EasySVG
			vpwidth="310"
			vpheight="310"
			height={height}
			fill={fill ?? "rgb(0, 126, 187)"}
			stroke={stroke}
			direction={direction}
			rotate={rotate}
		>
			<G>
				<Shape
					type={ShapeType.PATH}
					value={
						"M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73   C77.16,101.969,74.922,99.73,72.16,99.73z"
					}
				/>
				<Shape
					type={ShapeType.PATH}
					value={
						"M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4   c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
					}
				/>
				<Shape
					type={ShapeType.PATH}
					value={
						"M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599   c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319   c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995   C310,145.43,300.549,94.761,230.454,94.761z"
					}
				/>
			</G>
		</EasySVG>
	);
};

export { LinkedIn };
