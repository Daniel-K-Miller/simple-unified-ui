import React, { FunctionComponent } from "react";

import { ISocialMedia } from "./props";

import { MediaType } from "@enums/MediaType";

const SocialMedia: FunctionComponent<ISocialMedia> = ({ media }) => {
	if (media?.type === undefined) return undefined;
	if (media?.url === undefined) return undefined;

	switch (media.type) {
		case MediaType.IMAGE:
			return <img src={media.url} />;
		case MediaType.VIDEO:
			return <video controls src={media.url} />;
	}
};

export { SocialMedia };
