import React, { FunctionComponent } from "react";
import { ISvg } from "./props";

const Svg: FunctionComponent<ISvg> = ({
	className,
	vpwidth,
	vpheight,
	children,
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			version="1.1"
			height="100%"
			preserveAspectRatio="xMinYMin meet"
			viewBox={`0 0 ${vpwidth} ${vpheight}`}
			className={className}
		>
			{children}
		</svg>
	);
};

export { Svg };
