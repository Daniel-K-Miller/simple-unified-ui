import React, { FunctionComponent } from "react";

import { SvgBaseStyled as Svg } from "@components/svgs/base/svg/styled";
import { G } from "@components/svgs/base/g";
import { Shape } from "@components/svgs/base/shape";

import { ShapeTypes } from "enums/ShapeTypes";

const EditSVG: FunctionComponent = () => {
	return (
		<Svg vpwidth="500" vpheight="500" fill="none">
			<G>
				<Shape
					type={ShapeTypes.PATH}
					value={
						"M390.08,95.21L117.59,329.97 M410.08,118.52L137.59,353.28 M435.4,139.27l-60.01-69.93L101.5,304.37 l60.01,69.93L435.4,139.27z M456.35,118.84c0.15-0.13,0.31-0.25,0.46-0.38c20.47-17.57,24.05-46.98,8-65.68 c-16.05-18.71-45.66-19.63-66.14-2.06c-0.15,0.13-0.29,0.27-0.44,0.4L456.35,118.84z M82.1,329.19l-45.53,91.19l98.65-29.28 L82.1,329.19z M42.91,416.72l24.78-8.76l-12.64-14.73L42.91,416.72z M32.19,447.18c14.37,11.61,31.67,11.61,48.98,9.14 c27.19-4.94,51.91-19.78,79.1-14.83c61.8,7.42,126.07,37.08,188.72,9.5"
					}
				/>
			</G>
		</Svg>
	);
};

export { EditSVG };
