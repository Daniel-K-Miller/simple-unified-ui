import React, { FunctionComponent, useEffect } from "react";

import { IDesktopMenu } from "./props";

import { ITopLevelLink } from "@interfaces/ILink";
import { LinkStyled } from "@base/components/core/link/styled";
import { MainMenuStyled } from "./MainMenu/styled";

import { MenuType } from "@base/enums/MenuType";

const DesktopMenu: FunctionComponent<IDesktopMenu> = ({
	subMenuLinks,
	currentSubMenuLinks,
	isMainMenuActive,
	updateSubMenus,
	setPreviousMenuType,
}) => {
	const generateTopLevelLinks = (links: Array<ITopLevelLink>) => {
		const mappedLinks = links.map((link, index) => (
			// handleClick is not undefined if button does not re-direct (indicated by isClickable property)
			<LinkStyled
				key={`${index}`}
				name={link.name}
				href={link.href}
				withLi={true}
				isButton={link.isClickable}
				isActive={link.name === currentSubMenuLinks?.name && isMainMenuActive}
				handleClick={
					link.isClickable ? (key) => updateSubMenus(key) : undefined
				}
			/>
		));

		return <ul>{mappedLinks}</ul>;
	};

	// on unmount set menu type
	useEffect(() => {
		return () => {
			setPreviousMenuType(MenuType.DESKTOP);
		};
	}, []);

	return (
		<React.Fragment>
			<nav>{generateTopLevelLinks(subMenuLinks)}</nav>
			<MainMenuStyled
				isActive={isMainMenuActive}
				content={currentSubMenuLinks?.content}
			/>
		</React.Fragment>
	);
};

export { DesktopMenu };
