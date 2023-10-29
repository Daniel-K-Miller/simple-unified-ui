import { Socials } from "@enums/SocialsType";

export const socialHandleResolver = (platform: Socials, handle: string) => {
	switch (platform) {
		case Socials.DISCORD:
			return `https://www.discordapp.com/users/${handle}`;
		case Socials.FACEBOOK:
			return `https://www.facebook.com/${handle}`;
		case Socials.INSTAGRAM:
			return `https://www.instagram.com/${handle}`;
		case Socials.LINKEDIN:
			return `https://www.linkedin.com/in/${handle}`;
		case Socials.SNAPCHAT:
			return `https://www.snapchat.com/add/${handle}`;
		case Socials.THREADS:
			return `https://www.threads.net/${handle}`;
		case Socials.TIKTOK:
			return `https://www.tiktok.com/${handle}`;
		case Socials.TWITTER:
			return `https://www.twitter.com/${handle}`;
		case Socials.X:
			return `https://www.x.com/${handle}`;
		case Socials.YOUTUBE:
			return `https://www.youtube.com/${handle}`;
	}
};
