import React, { FunctionComponent, useState, useEffect, useRef } from "react";

import { usePrevious } from "@base/hooks/usePrevious";

import { ISliderMenu } from "./props";
import { LinkStyled } from "@components/core/link/styled";
import { ILink } from "@base/interfaces/ILink";

interface ITopLeveLHeader {
	[key: string]: Map<string, Array<ILink>>;
}

const SliderMenu: FunctionComponent<ISliderMenu> = ({
	className,
	content,
	activeTopLevelLink,
	previousMenuActive,
	updateSubMenus,
}) => {
	const previous = usePrevious(activeTopLevelLink);

	const [transformedContent, setTransformedContent] =
		useState<Map<string, ITopLeveLHeader>>();

	const [activeHeaderNames, setActiveHeaderNames] = useState<{
		top: string | null;
		lower: string | null;
	}>({ top: null, lower: null });

	const [activeHeaderObjects, setActiveObjectHeaderObjects] = useState<{
		top: Map<string, ITopLeveLHeader>;
		lower: Map<string, ILink>;
	}>();

	const generateTopLevelHeader = () => {
		return (
			<ul className="top-level-headers">
				{content.map((link, index) => {
					return (
						<LinkStyled
							key={`${index}`}
							name={link.name}
							href={link.href}
							withLi={true}
							isButton={link.isClickable}
							isActive={
								link.name === activeTopLevelLink?.name //&& isMainMenuActive
							}
							handleClick={
								link.isClickable ? (key) => updateSubMenus(key) : undefined
							}
						/>
					);
				})}
			</ul>
		);
	};

	const handleMidLevelHeaderClick = (header: string) => {
		setActiveHeaderNames({ ...activeHeaderNames, lower: header });
		setActiveObjectHeaderObjects({
			...activeHeaderObjects,
			lower: activeHeaderObjects?.top.get(header),
		} as any);
	};

	const generateMidLevelHeaders = () => {
		if (!activeTopLevelLink || activeTopLevelLink.content === null) return;

		if (transformedContent === null) return;

		if (activeHeaderObjects?.top === undefined) return;

		const headers = Array.from(activeHeaderObjects.top.keys());

		return (
			<ul className="mid-level-headers">
				{headers.map((heading, index) => {
					return (
						<LinkStyled
							key={index}
							name={heading}
							href={heading}
							withLi={true}
							isButton={true}
							isActive={false}
							handleClick={(heading) => handleMidLevelHeaderClick(heading)}
						/>
					);
				})}
			</ul>
		);
	};

	const generateLowerLevelLinks = () => {
		const links = activeHeaderObjects?.lower;

		if (links?.size === 0 || links === undefined) return undefined;

		// TODO: here define types!!!

		const values = Array.from(links.values());

		return (
			<ul>
				{values.map((link, index) => {
					return (
						<LinkStyled
							key={index}
							isButton={false}
							name={link.name}
							href={link.href}
						/>
					);
				})}
			</ul>
		);
	};

	useEffect(() => {
		// loop through all columns and take out the content a level down
		// already have columns listed outside level above SliderMenu
		const topLevelHeaderObjects = new Map<string, ITopLeveLHeader>();

		content.forEach((topLevelLink) => {
			const topLevelHeaderContent = topLevelLink.content;
			if (topLevelHeaderContent === null) return;

			const combinedMaps = new Map<string, Array<ILink>>();

			topLevelHeaderContent.forEach((column) => {
				column.forEach((headerItem) => {
					// extract ONLY IHeaderItem
					if ("title" in headerItem) {
						combinedMaps.set(headerItem.title, headerItem.links);
					}
				});

				// @ts-ignore: unnecessary error being flagged regarding index
				topLevelHeaderObjects.set(topLevelLink.name, combinedMaps);
			});
		});

		// set data here!
		setTransformedContent(topLevelHeaderObjects);
	}, []);

	// set topLevelHeader
	useEffect(() => {
		if (activeTopLevelLink?.name == null) return;

		if (transformedContent === null) return;

		// top of object
		const activeTopLevelHeader = activeTopLevelLink.name;

		// BUG: known issue that when switching from Desktop to Mobile
		// 			the lower level links state gets forgotten as this state
		//			is only contained in this component and not referenced
		//			at a higher level.
		const getLowerLevel = () => {
			// check if level should reset
			return activeTopLevelHeader === previous?.name
				? activeHeaderObjects?.lower ?? new Map<string, ILink>()
				: new Map<string, ILink>();
		};

		const getTopLevel = () => {
			return transformedContent?.get(activeTopLevelHeader) as unknown as Map<
				string,
				ITopLeveLHeader
			>;
		};

		setActiveHeaderNames({ ...activeHeaderNames, top: activeTopLevelHeader });
		setActiveObjectHeaderObjects({
			...activeHeaderObjects,
			top: getTopLevel(),
			lower: getLowerLevel(), // if not same name as previous - reset!!!
		});
	}, [activeTopLevelLink, previousMenuActive]);

	return (
		<nav className={className}>
			{generateTopLevelHeader()}
			{generateMidLevelHeaders()}
			{generateLowerLevelLinks()}
		</nav>
	);
};

export { SliderMenu };
