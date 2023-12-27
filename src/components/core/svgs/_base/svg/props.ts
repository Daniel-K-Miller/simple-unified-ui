import { ReactElement } from "react";

import { Direction } from "@base/enums/Direction";

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
	/** Used automatically for styled-components */
	className?: string;
	/** Mapped directly to width within 'viewBox' attribute  */
	vpwidth: string | number;
	/** Mapped directly to height within 'viewBox' attribute  */
	vpheight: string | number;
	/** Strict to either Shape OR G component (based of native HTML elements)  */
	children: ReactElement<IShape> | ReactElement<IG>;
}
