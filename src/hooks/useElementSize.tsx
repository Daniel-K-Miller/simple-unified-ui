import React, { useState, useEffect } from "react";

export function useElementSize(el: HTMLElement | null) {
	const [elSize, setElSize] = useState<{
		width: number | undefined;
		height: number | undefined;
	}>({
		width: undefined,
		height: undefined,
	});
	useEffect(() => {
		function handleResize() {
			setElSize({
				width: el?.clientWidth,
				height: el?.clientHeight,
			});
		}
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, [el]);
	return elSize;
}
