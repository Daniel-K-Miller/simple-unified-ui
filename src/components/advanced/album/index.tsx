import React, {
	FunctionComponent,
	useState,
	useEffect,
	useRef,
	useLayoutEffect,
} from "react";

import { IAlbum } from "./props";

// components
import { AlbumItemsStyled as Items } from "./items/styled";
import { AlbumControlsStyled as Controls } from "./controls/styled";

const Album: FunctionComponent<IAlbum> = ({
	className,
	name,
	items,
	itemWidth = 200,
	itemGap = 20,
	handleItemClick,
}) => {
	// index of item displayed currently at start of container - for keeping track of scrolling
	const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);

	const [displayControls, setDisplayControls] = useState<boolean | null>(null);

	// TODO implement this!!! pass down to a new Controls component (need to make this...)
	const [leftButtonDisabled, setLeftButtonDisabled] = useState<boolean | null>(
		null
	);
	const [rightButtonDisabled, setRightButtonDisabled] = useState<
		boolean | null
	>(null);

	const itemsContainer = useRef<HTMLDivElement>(null);

	//#region shouldAlbumDislayButtons
	const shouldAlbumDisplayButtons = (): boolean | null => {
		if (itemsContainer.current?.clientWidth == null) return null;

		const shouldDisplay =
			itemWidth * items.length + itemGap * (items.length - 1) >
			itemsContainer.current?.clientWidth
				? true
				: false;

		if (shouldDisplay) updateButtons();

		// check if items overflow container - display buttons if so
		return shouldDisplay;
	};
	//#endregion

	//#region updateButtons - checks if buttons active - whether should be able to scroll left or right.
	const updateButtons = () => {
		const parentLeftPosition =
			itemsContainer.current?.children[0].getBoundingClientRect().left;

		const parentRightPosition =
			itemsContainer.current?.children[0].getBoundingClientRect().right;

		if (parentLeftPosition == null || parentRightPosition == null) return;

		//#region left button
		const firstItem = itemsContainer.current?.children[0].children[0];

		if (firstItem == null) return;

		if (parentLeftPosition === firstItem.getBoundingClientRect().left)
			setLeftButtonDisabled(true);
		else if (leftButtonDisabled != false) setLeftButtonDisabled(false);
		//#endregion

		//#region last button
		const lastItem =
			itemsContainer.current?.children[0].children[
				itemsContainer.current?.children[0].children.length - 1
			];

		if (lastItem == null) return;

		if (
			Math.round(parentRightPosition) ===
			Math.round(lastItem.getBoundingClientRect().right)
		)
			setRightButtonDisabled(true);
		else if (rightButtonDisabled != false) setRightButtonDisabled(false);
		//#endregion
	};
	//#endregion

	//#region handleButtonOnClick
	const handleButtonOnClick = (newIndex: number) => {
		if (newIndex === -1) newIndex = 0;

		if (newIndex < 0 || newIndex > items.length - 1) return;

		if (
			itemsContainer.current?.children[0] == null ||
			itemsContainer.current?.children[0].children[newIndex] == null
		)
			return;

		const parentContainer = itemsContainer.current?.children[0];

		if (parentContainer == null) return;

		const currentItem =
			itemsContainer.current.children[0].children[currentItemIndex];

		if (currentItem == null) return;

		//#region check if first/last item is in view - cancel scroll
		if (newIndex > currentItemIndex) {
			const lastItem =
				itemsContainer.current?.children[0].children[
					itemsContainer.current?.children[0].children.length - 1
				];
			const parentRightPosition =
				itemsContainer.current?.children[0].getBoundingClientRect().right;
			if (
				Math.round(parentRightPosition) ===
				Math.round(lastItem.getBoundingClientRect().right)
			)
				return;
		} else {
			const firstItem = itemsContainer.current?.children[0].children[0];
			const parentRightPosition =
				itemsContainer.current?.children[0].getBoundingClientRect().right;
			if (
				Math.round(parentRightPosition) ===
				Math.round(firstItem.getBoundingClientRect().right)
			)
				return;
		}
		//#endregion

		const parentLeftPosition =
			itemsContainer.current?.children[0].getBoundingClientRect().left;

		const itemLeftPosition =
			itemsContainer.current?.children[0].children[
				newIndex
			].getBoundingClientRect().left;

		if (parentLeftPosition == null || itemLeftPosition == null) return;

		const scrollAmount = itemLeftPosition - parentLeftPosition;

		const itemLeft = currentItem.getBoundingClientRect().left;
		if (
			(itemLeft < parentLeftPosition && newIndex < currentItemIndex) ||
			(itemLeft < parentLeftPosition &&
				currentItemIndex === 0 &&
				newIndex < currentItemIndex)
		) {
			itemsContainer.current.children[0].scrollLeft +=
				itemLeft - parentLeftPosition;
			return;
		}

		itemsContainer.current.children[0].scrollLeft += scrollAmount;

		updateButtons();
		setCurrentItemIndex(newIndex);
	};
	//#endregion

	//#region handleOnScroll
	const handleOnScroll = (): void => {
		const parentContainer = itemsContainer.current?.children[0];

		if (parentContainer == null) return;

		const items = parentContainer.children;

		if (items == null) return;

		const totalItemWidth: number = itemWidth + itemGap;

		//#region setting index
		const currentIndex = Math.trunc(
			parentContainer.scrollLeft / totalItemWidth
		);

		if (currentItemIndex != currentIndex) setCurrentItemIndex(currentIndex);
		//#endregion

		updateButtons();
	};
	//#endregion

	useEffect(() => {
		setDisplayControls(shouldAlbumDisplayButtons());
	}, []);

	useLayoutEffect(() => {
		const eventListener = (): void =>
			setDisplayControls(shouldAlbumDisplayButtons());

		window.addEventListener("resize", () => eventListener());

		return window.removeEventListener("resize", () => eventListener());
	}, [window]);

	return (
		<div className={className}>
			<Items
				containerRef={itemsContainer}
				items={items}
				itemWidth={itemWidth}
				itemGap={itemGap}
				addControlBoxing={displayControls}
				handleOnScroll={handleOnScroll}
				handleItemClick={handleItemClick}
			/>
			<Controls
				currentItemIndex={currentItemIndex}
				shouldDisplay={displayControls}
				isLeftButtonDisabled={leftButtonDisabled}
				isRightButtonDisabled={rightButtonDisabled}
				handleButtonOnClick={handleButtonOnClick}
			/>
		</div>
	);
};

export { Album };
