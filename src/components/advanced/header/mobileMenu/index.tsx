import React, { FunctionComponent, useState, useEffect } from "react";

import { HamburgerButtonStyled } from "@base/components/core/button/hamburger/styled";

import { IMobileMenu } from "./props";
import { SliderMenuStyled } from "./SliderMenu/styled";

import { MenuType } from "@base/enums/MenuType";

const MobileMenu: FunctionComponent<IMobileMenu> = ({
	initialExpandedValue,
	subMenuLinks,
	currentSubMenuLinks,
	previousMenuActive,
	updateSubMenus,
	setPreviousMenuType,
}) => {
	const [isExpanded, setIsExpanded] = useState(initialExpandedValue);

	// on unmount set menu type
	useEffect(() => {
		return () => {
			setPreviousMenuType(MenuType.MOBILE);
		};
	}, []);

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
					previousMenuActive={previousMenuActive}
					updateSubMenus={updateSubMenus}
				/>
			)}
		</React.Fragment>
	);
};

export { MobileMenu };
