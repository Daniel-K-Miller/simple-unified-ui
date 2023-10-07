import { DefaultTheme, SimpleUnifiedTheming } from "styled-components";

const standardOpacity: SimpleUnifiedTheming.IOpacity = {
	opacity: {
		dimmed: 0.4,
		bright: 0.8,
	},
};

const standardSpacing: SimpleUnifiedTheming.ISpacing = {
	spacing: {
		margin: "0.5em",
		padding: "1em",
		border: "3px",
	},
};

const standardFont: SimpleUnifiedTheming.IFont = {
	font: {
		family: ["sans-serif"],
		rootSize: "1em",
	},
};

const standardRadius: SimpleUnifiedTheming.IRadius = {
	radius: {
		small: 0.25,
		medium: 0.5,
		large: 0.75,
	},
};

const standardBreakpoints: SimpleUnifiedTheming.IBreakPoints = {
	breakPoints: {
		smlMobile: "576px",
		lrgMobile: "720px",
		Tablet: "1024px",
		Desktop: "1280px",
	},
};

const lightColours: SimpleUnifiedTheming.IColours = {
	colors: {
		text: "#1a1a1a",
		textAlt: "#303030",
		background: "#f5f2ea",
		backgroundAlt: "#dddddd",
		mainAccent: "green",
		altAccent: "blue",
		accents: {
			green: "#c5ffc0",
			orange: "#ffe2c0",
			pink: "#ffc0c0",
			blue: "#c0e0ff",
			yellow: "#000000",
			gray: "#000000",
			purple: "#000000",
		},
	},
};

const darkColours: SimpleUnifiedTheming.IColours = {
	colors: {
		text: "#f9f6ef",
		textAlt: "#cfcbc2",
		background: "#212121",
		backgroundAlt: "#1a1a1a",
		mainAccent: "green",
		altAccent: "blue",
		accents: {
			green: "#2f4632",
			orange: "#504337",
			pink: "#3a2a38",
			blue: "#272e40",
			yellow: "#000000",
			gray: "#000000",
			purple: "#000000",
		},
	},
};

export const lightTheme: DefaultTheme = {
	...standardOpacity,
	...standardSpacing,
	...standardFont,
	...standardRadius,
	...standardBreakpoints,
	...lightColours,
};

export const darkTheme: DefaultTheme = {
	...standardOpacity,
	...standardSpacing,
	...standardFont,
	...standardRadius,
	...standardBreakpoints,
	...darkColours,
};
