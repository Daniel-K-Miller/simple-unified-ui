import React, { FunctionComponent, useState, useEffect } from "react";

import { ISliderMenu } from "./props";
import { LinkStyled } from "@components/core/link/styled";

const SliderMenu: FunctionComponent<ISliderMenu> = ({
	className,
	content,
	activeTopLevelLink,
	updateSubMenus,
}) => {
	const [transformedContent, setTransformedContent] = useState<any>();

	useEffect(() => {
		const allLinks = {};

		// loop through all columns and take out the content a level down
		// already have columns listed outside level above SliderMenu
		// - data is laid out before transformation alike so
		// * Top level
		// * Column level
		// * Group level
		// * Items level
		content.forEach((column) => {
			const columns = column.content;
			if (columns === null) return;

			columns.forEach((groups) => {
				groups.forEach((item) => {
					// extract ONLY IHeaderItem
					if ("title" in item) {
						allLinks[item.title] = { content: item.links };
					}
				});
			});
		});

		setTransformedContent(allLinks);

		// async () => await transformedContent;
		console.log(content);
	}, []);

	return (
		<nav className={className}>
			<ul>
				{/* TODO: split into seperate functions in this component */}
				{content.map((link, index) => {
					return (
						<LinkStyled
							key={`${index}`}
							name={link.name}
							href={link.href}
							withLi={true}
							isClickable={link.isClickable}
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
			{/* TODO: split into seperate functions in this component */}
			{activeTopLevelLink && activeTopLevelLink.content !== null && (
				<ul>
					{activeTopLevelLink.content.map((item, index) => {
						return (
							<div key={index}>
								{/* TODO: !IMPORTANT! make this UL all the headers create a function transform the object on load (useEffect) */}
								{transformedContent != null &&
									Object?.keys(transformedContent).map((key, index) => {
										return <div key={index}>{key}</div>;
									})}
							</div>
						);
					})}
				</ul>
			)}
		</nav>
	);
};

export { SliderMenu };
