import { ReactNode } from "react";

import { HeadingType } from "@base/enums/HeadingType";
import { BlockType } from "@enums/BlockType";

export interface IBlock {
	/** Used automatically for styled-components */
	className?: string;
	/** Used to infer base element */
	type: BlockType;
	/** Any valid ReactNode / HTML element */
	children: ReactNode;
	/** Used to generate heading on component */
	heading?: {
		/** Heading element to generate either: "h1", "h2", "h3", "h4", "h5", or "h6" */
		size?: HeadingType;
		/** Text content to go inside heading tag generated */
		text?: string;
	};
}
