import { RefObject } from "react";

import { IImage } from "interfaces/IImage";

export interface IAlbumItems {
	className?: string;
	name: string;
	items: Array<IImage>;
	itemWidth?: number;
	itemGap?: number;
	containerRef: RefObject<HTMLDivElement>;
	addControlBoxing: boolean | null;
	handleOnScroll: () => void;
	handleItemClick?: (item: IImage, index: number) => void;
}
