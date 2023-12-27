import React, { FunctionComponent } from "react";

import { ISocialLogo } from "./props";

import { Socials } from "@enums/SocialsType";

import { Discord } from "@base/components/core/svgs/social/Discord";
import { Facebook } from "@base/components/core/svgs/social/Facebook";
import { Instagram } from "@base/components/core/svgs/social/Instagram";
import { LinkedIn } from "@base/components/core/svgs/social/LinkedIn";
import { Snapchat } from "@base/components/core/svgs/social/Snapchat";
import { Threads } from "@base/components/core/svgs/social/Threads";
import { TikTok } from "@base/components/core/svgs/social/TikTok";
import { Twitter } from "@base/components/core/svgs/social/Twitter";
import { X } from "@base/components/core/svgs/social/X";
import { YouTube } from "@base/components/core/svgs/social/YouTube";

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
