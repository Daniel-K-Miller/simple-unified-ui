import React, { FunctionComponent } from "react";

import { IControls } from "./props";

// enums
import { ButtonType } from "@enums/ButtonType";
import { SizeType } from "@base/enums/SizeType";

// components
import { ButtonBase } from "@components/button/styled";
import { ArrowSVG } from "@components/svgs/Arrow";

const AlbumControls: FunctionComponent<IControls> = ({
	className,
	shouldDisplay,
	currentItemIndex,
	isLeftButtonDisabled,
	isRightButtonDisabled,
	handleButtonOnClick,
}) => {
	const renderButton = (isLeft: boolean) => {
		if (isLeft) {
			return (
				<ButtonBase
					type={ButtonType.BUTTON}
					onClick={() => handleButtonOnClick(currentItemIndex - 1)}
					size={SizeType.medium}
					disabled={isLeftButtonDisabled ?? false}
				>
					<ArrowSVG />
				</ButtonBase>
			);
		}

		return (
			<ButtonBase
				type={ButtonType.BUTTON}
				onClick={() => handleButtonOnClick(currentItemIndex + 1)}
				size={SizeType.medium}
				disabled={isRightButtonDisabled ?? false}
			>
				<ArrowSVG />
			</ButtonBase>
		);
	};

	return (
		<React.Fragment>
			{shouldDisplay && (
				<div className={className}>
					{renderButton(true)}
					{renderButton(false)}
				</div>
			)}
		</React.Fragment>
	);
};

export { AlbumControls };
