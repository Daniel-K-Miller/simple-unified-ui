import React, { FunctionComponent, useState, useEffect, useRef } from "react";

import { LinkStyled } from "@components/core/link/styled";
import { MainMenuStyled } from "@base/components/advanced/header/MainMenu/styled";
import { ITopLevelLink } from "@interfaces/ILink";

import { IHeaderTopLevelILink } from "@base/interfaces/IHeaderContent";
import { IHeaderProps } from "./props";

import { useElementSize } from "@base/hooks/useElementSize";

const Header: FunctionComponent<IHeaderProps> = ({ className, links }) => {
	const [MainMenuLinks, setMainMenuLinks] =
		useState<Array<IHeaderTopLevelILink>>();
	const [currentMainMenuLinks, setCurrentMainMenuLinks] =
		useState<IHeaderTopLevelILink>();
	const [isMainMenuActive, setIsMainMenuActive] = useState(false);

	const [isMobileMenu, setIsMobileMenu] = useState(false);

	const headerEl = useRef(null);

	const elSize = useElementSize(headerEl.current);

	const updateMainMenu = (contentKey: string) => {
		if (
			contentKey === currentMainMenuLinks?.name ||
			currentMainMenuLinks?.name === undefined ||
			(isMainMenuActive === false && contentKey !== currentMainMenuLinks?.name)
		)
			setIsMainMenuActive(!isMainMenuActive);

		const errorPrefix = "Failed to update MainMenu:";

		if (MainMenuLinks === undefined) {
			throw new Error(`${errorPrefix} MainMenu content not found!`);
		}

		const currentLink = MainMenuLinks.find((link) => link.name === contentKey);

		if (currentLink === undefined) {
			throw new Error(`${errorPrefix} contentKey not found in totalContent!`);
		}

		setCurrentMainMenuLinks(currentLink);
	};

	const generateTopLevelLinks = (links: Array<ITopLevelLink>) => {
		const mappedLinks = links.map((link, index) => (
			// handleClick is not undefined if button does not re-direct (indicated by isClickable property)
			<LinkStyled
				key={`${index}`}
				name={link.name}
				href={link.href}
				withLi={true}
				isClickable={link.isClickable}
				isActive={link.name === currentMainMenuLinks?.name && isMainMenuActive}
				handleClick={
					link.isClickable ? (key) => updateMainMenu(key) : undefined
				}
			/>
		));

		return <ul>{mappedLinks}</ul>;
	};

	const generateMobileMenu = () => {
		return undefined;
	};

	const generateDesktopMenu = () => {
		return (
			<React.Fragment>
				<nav>{generateTopLevelLinks(links)}</nav>
				<MainMenuStyled
					isActive={isMainMenuActive}
					content={currentMainMenuLinks?.content}
				/>
			</React.Fragment>
		);
	};

	const generateMenu = () => {
		if (isMobileMenu) {
			return generateMobileMenu();
		} else {
			return generateDesktopMenu();
		}
	};

	useEffect(() => {
		setMainMenuLinks(links);
	}, []);

	useEffect(() => {
		if (elSize.width === undefined) return;

		if (elSize.width <= 500) {
			if (isMobileMenu === false) {
				setIsMobileMenu(true);
			}

			if (isMainMenuActive === true) {
				setIsMainMenuActive(false);
			}
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
