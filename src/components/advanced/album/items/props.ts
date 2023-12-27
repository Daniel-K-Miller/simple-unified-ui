import { RefObject } from "react";

import { IImage } from "../../../../interfaces/IImage";

export interface IAlbumItems {
	/** Used automatically for styled-components */
	className?: string;
	/** Items to map from */
	items: Array<IImage>;
	/** Width per item (in pixels) */
	itemWidth?: number;
	/** Gap between each item (in pixels) */
	itemGap?: number;
	/** Used as ref within Items base container for sizing (whether to display buttons) */
	containerRef: RefObject<HTMLDivElement>;
	/** Used within styling for adding padding & margin if buttons displayed (used here due to buttons container being absolute) */
	addControlBoxing: boolean | null;
	/** handleScroll event */
	handleOnScroll: () => void;
	/** handleClick event */
	handleItemClick?: (item: IImage, index: number) => void;
}
