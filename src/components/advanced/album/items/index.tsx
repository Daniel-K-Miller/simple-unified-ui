import React, { FunctionComponent } from "react";

import { IAlbumItems } from "./props";

const AlbumItems: FunctionComponent<IAlbumItems> = ({
	className,
	items,
	containerRef,
	handleOnScroll,
	handleItemClick,
}) => {
	return (
		<div className={className} ref={containerRef}>
			<div onScroll={handleOnScroll}>
				{items.map((item, index) => {
					return (
						<div
							key={`${name}-${index}`}
							onClick={
								handleItemClick != null
									? () => handleItemClick(item, index)
									: undefined
							}
						>
							<img src={item.src} alt={item.alt} draggable={false} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export { AlbumItems };
