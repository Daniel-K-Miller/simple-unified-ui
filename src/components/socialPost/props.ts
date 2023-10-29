import { Socials } from "@enums/SocialsType";
import { MediaType } from "@enums/MediaType";

export interface ISocialPostItem {
	platform: Socials;
	caption: string;
	dateCreated: string;
	handle: string;
	media?: {
		url?: string;
		type: MediaType;
	};
}

export interface ISocialPost {
	className?: string;
	post: ISocialPostItem;
}
