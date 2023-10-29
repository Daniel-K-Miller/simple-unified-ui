import { MediaType } from "@enums/MediaType";

export interface ISocialMedia {
	media: {
		type?: MediaType;
		url?: string;
	};
}
