import React, { FunctionComponent, useState } from "react";

import { HamburgerButtonStyled } from "@base/components/core/button/hamburger/styled";

import { IMobileMenu } from "./props";
import { SliderMenuStyled } from "./SliderMenu/styled";

const MobileMenu: FunctionComponent<IMobileMenu> = ({
	initialExpandedValue,
	subMenuLinks,
	currentSubMenuLinks,
	updateSubMenus,
}) => {
	const [isExpanded, setIsExpanded] = useState(initialExpandedValue);

	return (
		<React.Fragment>
			<HamburgerButtonStyled
				expanded={isExpanded}
				onClick={() => {
					setIsExpanded(!isExpanded);
					updateSubMenus(null);
				}}
			/>
			{isExpanded === true && (
				<SliderMenuStyled
					content={subMenuLinks}
					activeTopLevelLink={currentSubMenuLinks}
					updateSubMenus={updateSubMenus}
				/>
			)}
		</React.Fragment>
	);
};

export { MobileMenu };
