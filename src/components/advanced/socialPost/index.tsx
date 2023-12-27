import React, { FunctionComponent } from "react";

import { ISocialPost } from "./props";

import { SocialLogo } from "./socialLogo/index";
import { SocialMedia } from "./socialMedia/index";

import { DateFormatter } from "@utils/dateFormater";
import { socialHandleResolver } from "@utils/socialHandleResolver";

const SocialPost: FunctionComponent<ISocialPost> = ({ className, post }) => {
	const formattedDate = DateFormatter.ToSocialDate(post.dateCreated);

	return (
		<div className={className}>
			<div className="top">
				<div className="social-logo-and-handle">
					<SocialLogo name={post.platform} />
					<div className="handle">
						<a
							href={socialHandleResolver(post.platform, post.handle)}
							target="_blank"
							rel="noreferrer"
						>
							<span>@</span>
							<p>{post.handle}</p>
						</a>
					</div>
				</div>
				<p>{formattedDate}</p>
			</div>
			<SocialMedia media={{ type: post.media?.type, url: post.media?.url }} />
			<p>{post.caption}</p>
		</div>
	);
};

export { SocialPost };
