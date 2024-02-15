import { IHeaderTopLevelLink as ILinkBase } from "@interfaces/ILink";

export interface ILink extends ILinkBase {
	className?: string;
	withLi?: boolean;
	isButton: boolean;
	handleClick?: (key: string) => void;
}
