import React, { FunctionComponent, useState } from "react";

import { IDesktopMenu } from "./props";

import { ITopLevelLink } from "@interfaces/ILink";
import { LinkStyled } from "@base/components/core/link/styled";
import { MainMenuStyled } from "./MainMenu/styled";

const DesktopMenu: FunctionComponent<IDesktopMenu> = ({
	subMenuLinks,
	currentSubMenuLinks,
	isMainMenuActive,
	updateSubMenus,
}) => {
	const generateTopLevelLinks = (links: Array<ITopLevelLink>) => {
		const mappedLinks = links.map((link, index) => (
			// handleClick is not undefined if button does not re-direct (indicated by isClickable property)
			<LinkStyled
				key={`${index}`}
				name={link.name}
				href={link.href}
				withLi={true}
				isClickable={link.isClickable}
				isActive={link.name === currentSubMenuLinks?.name && isMainMenuActive}
				handleClick={
					link.isClickable ? (key) => updateSubMenus(key) : undefined
				}
			/>
		));

		return <ul>{mappedLinks}</ul>;
	};

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
