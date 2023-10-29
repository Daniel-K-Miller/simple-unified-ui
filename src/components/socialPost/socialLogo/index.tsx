import React, { FunctionComponent } from "react";

import { ISocialLogo } from "./props";

import { Socials } from "@enums/SocialsType";

import { Discord } from "@components/svgs/social/Discord";
import { Facebook } from "@components/svgs/social/Facebook";
import { Instagram } from "@components/svgs/social/Instagram";
import { LinkedIn } from "@components/svgs/social/LinkedIn";
import { Snapchat } from "@components/svgs/social/Snapchat";
import { Threads } from "@components/svgs/social/Threads";
import { TikTok } from "@components/svgs/social/TikTok";
import { Twitter } from "@components/svgs/social/Twitter";
import { X } from "@components/svgs/social/X";
import { YouTube } from "@components/svgs/social/YouTube";

const SocialLogo: FunctionComponent<ISocialLogo> = ({ name }) => {
	switch (name) {
		case Socials.DISCORD:
			return <Discord />;
		case Socials.FACEBOOK:
			return <Facebook />;
		case Socials.INSTAGRAM:
			return <Instagram />;
		case Socials.LINKEDIN:
			return <LinkedIn />;
		case Socials.SNAPCHAT:
			return <Snapchat />;
		case Socials.THREADS:
			return <Threads />;
		case Socials.TIKTOK:
			return <TikTok />;
		case Socials.TWITTER:
			return <Twitter />;
		case Socials.X:
			return <X />;
		case Socials.YOUTUBE:
			return <YouTube />;
	}
};

export { SocialLogo };
