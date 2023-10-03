import { IImage } from "interfaces/IImage";

export interface IAlbum {
	className?: string;
	name: string;
	items: Array<IImage>;
	itemWidth?: number;
	itemGap?: number;
	handleItemClick?: (image: IImage, index: number) => void;
}
