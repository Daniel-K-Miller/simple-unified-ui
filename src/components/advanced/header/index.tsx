import React, { FunctionComponent, useState, useEffect, useRef } from "react";

import { MobileMenu } from "./mobileMenu/index";
import { DesktopMenu } from "./desktopMenu/index";

import { IHeaderTopLevelILink } from "@base/interfaces/IHeaderContent";
import { IHeaderProps } from "./props";

import { useElementSize } from "@base/hooks/useElementSize";

const Header: FunctionComponent<IHeaderProps> = ({ className, links }) => {
	// these are used for both the MainMenu (Desktop) and Hamburger menu (Mobile)
	const [currentSubMenuLinks, setCurrentSubMenuLinks] =
		useState<IHeaderTopLevelILink | null>(null);

	// these are used for both the MainMenu (Desktop) and Hamburger menu (Mobile)
	const [isSubMenusActive, setIsSubMenusActive] = useState(false);

	const [isMobileMenu, setIsMobileMenu] = useState(false);

	const headerEl = useRef(null);

	const elSize = useElementSize(headerEl.current);

	const updateSubMenus = (contentKey: string | null) => {
		if (contentKey !== null) {
			// TODO: consider if we also have mobile menu up
			if (
				contentKey === currentSubMenuLinks?.name ||
				currentSubMenuLinks?.name === undefined ||
				(isSubMenusActive === false && contentKey !== currentSubMenuLinks?.name)
			)
				setIsSubMenusActive(!isSubMenusActive);

			const errorPrefix = "Failed to update MainMenu:";

			if (links === undefined) {
				throw new Error(`${errorPrefix} MainMenu content not found!`);
			}

			const currentLink = links.find((link) => link.name === contentKey);

			if (currentLink === undefined) {
				throw new Error(`${errorPrefix} contentKey not found in totalContent!`);
			}

			setCurrentSubMenuLinks(currentLink);
		} else {
			setIsSubMenusActive(false);
			setCurrentSubMenuLinks(null);
		}
	};

	const generateMenu = () => {
		if (isMobileMenu) {
			return (
				<MobileMenu
					currentSubMenuLinks={currentSubMenuLinks}
					initialExpandedValue={isSubMenusActive}
					subMenuLinks={links}
					updateSubMenus={updateSubMenus}
				/>
			);
		} else {
			return (
				<DesktopMenu
					currentSubMenuLinks={currentSubMenuLinks}
					isMainMenuActive={isSubMenusActive}
					subMenuLinks={links}
					updateSubMenus={updateSubMenus}
				/>
			);
		}
	};

	useEffect(() => {
		if (elSize.width === undefined) return;

		if (elSize.width <= 500) {
			if (isMobileMenu === false) {
				setIsMobileMenu(true);
			}

			// force menu to lose state on transition
			// if (isSubMenusActive === true) {
			// 	setIsSubMenusActive(false);
			// }
		} else if (elSize.width > 501) {
			if (isMobileMenu === true) {
				setIsMobileMenu(false);
			}
		}
	}, [elSize]);

	return (
		<header className={className} ref={headerEl}>
			{generateMenu()}
		</header>
	);
};

export { Header };
