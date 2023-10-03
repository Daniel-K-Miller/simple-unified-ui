import { IBaseTheme, DefaultTheme } from "styled-components";

export const baseTheme: IBaseTheme = {
	opacity: {
		dimmed: 0.4,
		bright: 0.8,
	},
	spacing: {
		margin: "0.5em",
		padding: "1em",
		border: "3px",
	},
	font: {
		family: ["sans-serif"],
		rootSize: "1em",
	},
	radius: {
		small: 0.25,
		medium: 0.5,
		large: 0.75,
	},
	mediaQueryBreakPoints: {
		smlMobile: "576px",
		lrgMobile: "720px",
		Tablet: "1024px",
		Desktop: "1280px",
	},
};

export const lightTheme: DefaultTheme = {
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
	...baseTheme,
};

export const darkTheme: DefaultTheme = {
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
	...baseTheme,
};
