export class DateFormatter {
	public static ToSocialDate(date: Date | string): string {
		if (typeof date === "string") date = new Date(date);

		//#region getting ordinal
		const dayNumeric = date.getDate();

		const ord = ["st", "nd", "rd"];
		const exceptions = [11, 12, 13];
		const nth =
			ord[(dayNumeric % 10) - 1] == undefined ||
			exceptions.includes(dayNumeric % 100)
				? "th"
				: ord[(dayNumeric % 10) - 1];

		const day: string = dayNumeric + nth;
		//#endregion

		const year: string = date.toLocaleString("default", { year: "2-digit" });

		const full = `${day} ${date.toLocaleString("default", {
			month: "short",
		})} ${year}`;

		return full;
	}

	public static toBlogDate(date: Date | string): string {
		if (typeof date === "string") date = new Date(date);

		//#region getting ordinal
		const dayNumeric = date.getDate();

		const ord = ["st", "nd", "rd"];
		const exceptions = [11, 12, 13];
		const nth =
			ord[(dayNumeric % 10) - 1] == undefined ||
			exceptions.includes(dayNumeric % 100)
				? "th"
				: ord[(dayNumeric % 10) - 1];

		const day: string = dayNumeric + nth;
		//#endregion

		const year: string = date.toLocaleString("default", { year: "numeric" });

		const full = `${day} ${date.toLocaleString("default", {
			month: "short",
		})} ${year}`;

		return full;
	}
}
