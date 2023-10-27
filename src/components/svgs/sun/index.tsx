import React, { FunctionComponent } from "react";

import { EasySVG } from "@components/svgs/_base/easySVG/index";
import { Shape } from "@components/svgs/_base/shape";
import { G } from "@components/svgs/_base/g/index";
import { IBaseSvgWithDirection } from "@components/svgs/_base/svg/props";

import { ShapeType } from "@base/enums/ShapeType";

const Sun: FunctionComponent<IBaseSvgWithDirection> = ({
	height,
	fill,
	stroke,
	direction,
	rotate,
}) => {
	return (
		<EasySVG
			vpwidth="1280"
			vpheight="1280"
			height={height}
			fill={fill}
			stroke={stroke}
			direction={direction}
			rotate={rotate}
		>
			<G transform="translate(0, 1280) scale(0.1, -0.1)">
				<Shape
					type={ShapeType.PATH}
					value={
						"M6156 12322 c-93 -262 -268 -753 -388 -1091 -120 -338 -216 -616 -214 -619 3 -2 91 8 198 22 272 37 402 46 648 46 246 0 376 -9 648 -46 107 -14 195 -24 198 -22 2 3 -94 281 -214 619 -120 338 -295 829 -388 1091 l-169 478 -75 0 -75 0 -169 -478z"
					}
				/>
				<Shape
					type={ShapeType.PATH}
					value={
						"M1738 11063 c6 -10 249 -526 542 -1148 292 -621 535 -1133 539 -1137 3 -4 56 59 118 140 170 226 263 333 438 507 174 175 281 268 507 438 81 62 144 115 140 118 -4 4 -509 246 -1122 539 -613 293 -1128 539 -1143 547 -26 13 -28 13 -19 -4z"
					}
				/>
				<Shape
					type={ShapeType.PATH}
					value={
						"M9925 10531 c-632 -302 -1149 -552 -1148 -555 1 -4 66 -56 145 -116 223 -169 330 -261 503 -435 175 -174 268 -281 438 -507 62 -81 115 -144 118 -140 4 4 246 511 539 1127 293 616 539 1132 546 1148 8 15 13 27 12 26 -2 0 -520 -247 -1153 -548z"
					}
				/>
				<Shape
					type={ShapeType.PATH}
					value={
						"M6150 10199 c-1247 -78 -2418 -808 -3040 -1893 -253 -440 -410 -914 -482 -1451 -32 -235 -32 -691 -1 -920 60 -435 167 -796 353 -1180 477 -990 1340 -1714 2395 -2009 360 -101 655 -141 1040 -140 272 0 396 10 630 49 1064 182 2038 841 2600 1761 93 152 254 482 314 646 144 391 219 757 240 1176 53 1027 -335 2048 -1069 2816 -533 557 -1277 951 -2057 1090 -328 58 -603 75 -923 55z"
					}
				/>
				<Shape
					type={ShapeType.PATH}
					value={
						"M1105 6877 c-588 -210 -1078 -385 -1087 -389 -15 -6 -18 -20 -18 -80 l0 -73 1092 -388 c600 -213 1093 -385 1095 -383 3 3 -7 91 -21 198 -41 304 -49 445 -43 748 6 268 8 293 63 698 3 28 3 52 -2 51 -5 0 -490 -173 -1079 -382z"
					}
				/>
				<Shape
					type={ShapeType.PATH}
					value={
						"M10614 7199 c4 -30 19 -137 32 -239 19 -142 26 -249 31 -460 6 -303 -2 -445 -43 -748 -14 -107 -24 -195 -22 -198 3 -2 496 171 1096 384 l1092 387 0 75 0 75 -1083 384 c-595 211 -1088 386 -1096 389 -11 4 -13 -5 -7 -49z"
					}
				/>
				<Shape
					type={ShapeType.PATH}
					value={
						"M2776 3939 c-24 -52 -267 -566 -540 -1143 -273 -577 -495 -1050 -493 -1053 4 -4 2267 1064 2279 1076 4 3 -59 56 -140 118 -226 170 -333 263 -507 438 -174 173 -268 282 -432 500 -59 77 -110 144 -114 149 -5 5 -28 -32 -53 -85z"
					}
				/>
				<Shape
					type={ShapeType.PATH}
					value={
						"M9878 3900 c-294 -391 -577 -674 -968 -968 -71 -53 -126 -100 -122 -104 6 -6 1924 -925 2200 -1054 67 -32 90 -39 83 -26 -5 9 -251 523 -546 1142 -295 619 -540 1128 -544 1132 -4 4 -50 -51 -103 -122z"
					}
				/>
				<Shape
					type={ShapeType.PATH}
					value={
						"M5550 2188 c0 -2 98 -281 218 -619 120 -338 295 -829 388 -1091 l169 -478 75 0 75 0 169 478 c93 262 268 753 388 1091 120 338 216 616 214 619 -3 2 -91 -8 -198 -22 -303 -41 -445 -49 -748 -43 -211 5 -318 12 -460 31 -102 13 -209 28 -237 32 -29 3 -53 5 -53 2z"
					}
				/>
			</G>
		</EasySVG>
	);
};

export { Sun };
