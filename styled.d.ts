import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme extends IBaseTheme {
		colors: {
			text: string;
			textAlt: string;
			background: string;
			backgroundAlt: string;
			mainAccent: string;
			altAccent: string;
			accents: {
				green: string;
				orange: string;
				pink: string;
				blue: string;
				yellow: string;
				gray: string;
				purple: string;
			};
		};
	}
}

declare module "styled-components" {
	export interface IBaseTheme {
		opacity: {
			dimmed: number;
			bright: number;
		};
		spacing: {
			margin: string;
			padding: string;
			border: string;
		};
		font: {
			family: Array<string>;
			rootSize: string;
		};
		radius: {
			small: number;
			medium: number;
			large: number;
		};
		mediaQueryBreakPoints: {
			smlMobile: string;
			lrgMobile: string;
			Tablet: string;
			Desktop: string;
		};
	}
}
