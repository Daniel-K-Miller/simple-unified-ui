interface ISplitStylingValue {
	numeral: number;
	unit: string;
}

export class StylingTool {
	static splitValue(value: string): ISplitStylingValue {
		let num: number = -1;
		let letters: string = "";

		let split = value.split(/(\d+)/);

		console.log(split);

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
	) {
		const { numeral, unit } = StylingTool.splitValue(value);

		if (numeral === -1 || unit === "") return; // should this return a value?

		// log
		console.log(`${(numeral * multiplier).toFixed(decimalPlace)}${unit}`);

		return `${(numeral * multiplier).toFixed(decimalPlace)}${unit}`;
	}
}
