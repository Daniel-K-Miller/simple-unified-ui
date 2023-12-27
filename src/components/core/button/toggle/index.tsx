import React, { FunctionComponent } from "react";

import { IToggle } from "./props";

const Toggle: FunctionComponent<IToggle> = ({
	className,
	leftSVG,
	rightSVG,
}) => {
	return (
		<div className={className}>
			{leftSVG}
			{rightSVG}
			<input
				id="switch"
				type="checkbox"
				onChange={() => {}}
				defaultChecked={true}
			/>
			<label htmlFor="switch"></label>
		</div>
	);
};

export { Toggle };
