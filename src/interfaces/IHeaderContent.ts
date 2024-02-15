import { ILink, ITopLevelLink } from "./ILink";
import { IImage } from "./IImage";

export interface IHeaderImage extends IImage, ILink {}

export interface IHeaderList {
	title: string;
	links: Array<ILink>;
}

export type headerItem = IHeaderList | IHeaderImage;
export type column = Array<Array<headerItem>>;

export interface IHeaderTopLevelILink extends ITopLevelLink {
	content: column | null;
}
