import React, { FunctionComponent } from "react";

import { IControls } from "./props";

// enums
import { ButtonType } from "enums/ButtonType";

// components
import { AlbumButtonStyled as Button } from "components/button/styled";
import { NextSVG } from "components/svgs/Next";

const AlbumControls: FunctionComponent<IControls> = ({
	className,
	shouldDisplay,
	currentItemIndex,
	handleButtonOnClick,
}) => {
	return (
		<React.Fragment>
			{shouldDisplay && (
				<div className={className}>
					<Button
						type={ButtonType.BUTTON}
						onClick={() => handleButtonOnClick(currentItemIndex - 1)}
					>
						<NextSVG />
					</Button>
					<Button
						type={ButtonType.BUTTON}
						onClick={() => handleButtonOnClick(currentItemIndex + 1)}
					>
						<NextSVG />
					</Button>
				</div>
			)}
		</React.Fragment>
	);
};

export { AlbumControls };
