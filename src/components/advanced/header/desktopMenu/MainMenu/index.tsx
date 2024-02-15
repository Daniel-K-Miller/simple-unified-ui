import React, { FunctionComponent } from "react";

import { IMainMenu } from "./props";
import { LinkStyled } from "@components/core/link/styled";

import { headerItem } from "@interfaces/IHeaderContent";

const MainMenu: FunctionComponent<IMainMenu> = ({
	className,
	content,
	isActive,
}) => {
	const generateMainMenuItem = (item: headerItem) => {
		// IHeaderList item
		if ("links" in item) {
			return (
				<React.Fragment>
					<div>{item.title}</div>
					<ul className="list">
						{item.links.map((link, index) => {
							return (
								<LinkStyled
									key={index}
									href={link.href}
									isButton={false}
									name={link.name}
								/>
							);
						})}
					</ul>
				</React.Fragment>
			);
		}

		// IImage item
		if ("src" in item) {
			return (
				<React.Fragment>
					<a href={item.href}>
						{/* TODO: turn picture element into core component */}
						<picture>
							<img src={item.src} alt={item.alt} />
						</picture>
					</a>
				</React.Fragment>
			);
		}

		throw new Error("MainMenu - Cannot determine type of item when rendering");
	};

	const generateMainMenu = () => {
		if (isActive === false) return undefined;

		return content?.map((headerItems, index) => {
			return (
				<ul key={index} className="column">
					{headerItems.map((item, index) => {
						return (
							<li key={index} className="group">
								{generateMainMenuItem(item)}
							</li>
						);
					})}
				</ul>
			);
		});
	};

	return (
		<div className={`${className} ${isActive && "active"}`}>
			{generateMainMenu()}
		</div>
	);
};

export { MainMenu };
