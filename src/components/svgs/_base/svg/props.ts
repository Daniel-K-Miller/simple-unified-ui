import { ReactElement } from "react";

import { Direction } from "@enums/direction";

import { IShape } from "../shape";
import { IG } from "../g";

export interface IBaseSvg {
	/** set a custom width */
	width?: string;
	/** set a custom height */
	height?: string;
	/** set a custom fill */
	fill?: string;
	/** set a custom stroke */
	stroke?: string;
	/** set a custom rotation */
	rotate?: number;
}

export interface IBaseSvgWithDirection extends IBaseSvg {
	/** direction to face */
	direction?: Direction;
}

export interface ISvg extends IBaseSvg {
	className?: string;
	vpwidth: string | number;
	vpheight: string | number;
	children: ReactElement<IShape> | ReactElement<IG>;
}
