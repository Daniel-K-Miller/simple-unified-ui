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
		size?: HeadingType;
		text?: string;
	};
}
