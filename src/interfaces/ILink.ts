export interface ILink {
	name: string;
	href: string;
}

export interface IHeaderTopLevelLink extends ILink {
	isActive?: boolean;
}

export interface ITopLevelLink extends ILink {
	isClickable: boolean;
}
