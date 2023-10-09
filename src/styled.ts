// composed of all default theme interfaces
import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme
		extends SimpleUnifiedTheming.IColours,
			SimpleUnifiedTheming.IOpacity,
			SimpleUnifiedTheming.ISpacing,
			SimpleUnifiedTheming.IFont,
			SimpleUnifiedTheming.IRadius,
			SimpleUnifiedTheming.IBreakPoints {}

	namespace SimpleUnifiedTheming {
		export interface IColours {
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

		export interface IOpacity {
			opacity: {
				dimmed: number;
				bright: number;
			};
		}

		export interface ISpacing {
			spacing: {
				margin: string;
				padding: string;
				border: string;
			};
		}

		export interface IFont {
			font: {
				family: Array<string>;
				rootSize: string;
			};
		}

		export interface IRadius {
			radius: {
				small: string;
				medium: string;
				large: string;
			};
		}

		export interface IBreakPoints {
			breakPoints: {
				smlMobile: string;
				lrgMobile: string;
				Tablet: string;
				Desktop: string;
			};
		}
	}
}
