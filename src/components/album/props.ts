import { IImage } from "../../interfaces/IImage";

export interface IAlbum {
	/** Used automatically for styled-components */
	className?: string;
	/** Descriptive name of album */
	name: string;
	/** Items to display in album */
	items: Array<IImage>;
	/** Width per item (in pixels) */
	itemWidth?: number;
	/** Gap between each item (in pixels) */
	itemGap?: number;
	/** onClick event */
	handleItemClick?: (image: IImage, index: number) => void;
}
