// used in various styled components for quick access to useful helpers
import { SizeType } from "@base/enums/SizeType";
import { DefaultTheme } from "styled-components";

interface ISplitStylingValue {
	numeral: number;
	unit: string;
}

interface SizeMultiplers {
	small: number;
	medium: number;
	large: number;
}

export class StylingTool {
	theme: DefaultTheme;
	size: SizeType;

	constructor(theme: DefaultTheme, size: SizeType) {
		this.theme = theme;
		this.size = size;
	}

	public calcPadding(): string {
		const padding = this.theme.spacing.padding;
		const verticalPadding = StylingTool.multiplyStyle(padding, 0.5);
		const horizontalPadding = StylingTool.multiplyStyle(padding, 1);

		return `${verticalPadding} ${horizontalPadding}`;
	}

	public calcFontSize(): string {
		const rootSize = this.theme.font.rootSize;

		const SizeMultiplers = { small: 0.8, medium: 1, large: 1.2 };

		return `${StylingTool.calcValueFromSize(
			this.size,
			rootSize,
			SizeMultiplers
		)}`;
	}

	public calcBorderRadius(): string {
		const borderRadius = this.theme.radius.medium;

		const SizeMultiplers = { small: 0.5, medium: 1, large: 2 };

		return `${StylingTool.calcValueFromSize(
			this.size,
			borderRadius,
			SizeMultiplers
		)}`;
	}

	public calcBorderSize(): string {
		const borderThickness = "3px"; // put into style

		const SizeMultiplers = { small: 0.5, medium: 1, large: 1.5 };

		return `${StylingTool.calcValueFromSize(
			this.size,
			borderThickness,
			SizeMultiplers
		)}`;
	}

	static splitValue(value: string): ISplitStylingValue {
		let num: number = -1;
		let letters: string = "";

		let split = value.split(/(\d+)/);

		let nums: Array<string> = [];

		split.forEach((string) => {
			if (string.length === 0) return;

			// have to work with decimals
			if (!Number.isNaN(Number(string)) || string === ".") nums.push(string);
			else letters = string;
		});

		num = Number(nums.join(""));

		return { numeral: num, unit: letters };
	}

	static multiplyStyle(
		value: string,
		multiplier: number,
		decimalPlace: number = 2
	): string {
		const { numeral, unit } = StylingTool.splitValue(value);

		if (numeral === -1 || unit === "") return "";

		return `${(numeral * multiplier).toFixed(decimalPlace)}${unit}`;
	}

	static calcValueFromSize(
		size: SizeType,
		value: string,
		multipliers: SizeMultiplers
	): string {
		switch (size) {
			case SizeType.small:
				return StylingTool.multiplyStyle(value, multipliers.small);
			case SizeType.medium:
				return value;
			case SizeType.large:
				return StylingTool.multiplyStyle(value, multipliers.large);
		}
	}
}
