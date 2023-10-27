import React, { FunctionComponent } from "react";

import { EasySVG } from "@components/svgs/_base/easySVG/index";
import { Shape } from "@components/svgs/_base/shape";
import { IBaseSvgWithDirection } from "@components/svgs/_base/svg/props";

import { ShapeType } from "@base/enums/ShapeType";

const Moon: FunctionComponent<IBaseSvgWithDirection> = ({
	height,
	fill,
	stroke,
	direction,
	rotate,
}) => {
	return (
		<EasySVG
			vpwidth="1049"
			vpheight="1280"
			height={height}
			fill={fill ?? "rgb(255, 255, 255)"}
			stroke={stroke ?? "rgb(0, 0, 0)"}
			direction={direction}
			rotate={rotate}
		>
			<Shape
				type={ShapeType.PATH}
				value={
					"M6015 12789 c-740 -46 -1469 -219 -2145 -509 -284 -121 -817 -407 -985 -528 -22 -15 -108 -77 -191 -136 -179 -126 -366 -275 -521 -412 -163 -144 -375 -344 -398 -375 -11 -15 -63 -74 -115 -131 -1223 -1342 -1815 -3153 -1624 -4968 153 -1459 796 -2809 1835 -3849 665 -665 1429 -1156 2315 -1486 406 -151 865 -268 1304 -330 341 -48 510 -59 900 -59 374 -1 519 8 810 45 85 11 182 23 215 25 33 3 121 19 195 35 707 160 1097 293 1625 554 386 191 672 366 1000 612 261 196 285 223 237 271 -17 17 -43 20 -233 25 -1742 51 -3386 839 -4545 2177 -1184 1368 -1717 3206 -1453 5010 218 1494 969 2854 2124 3849 116 100 115 98 115 132 0 52 -22 59 -186 58 -82 -1 -207 -6 -279 -10z"
				}
				scale={0.1}
			/>
		</EasySVG>
	);
};

export { Moon };
