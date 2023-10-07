import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../src/themes";

const preview: Preview = {
	decorators: [
		(Story) => (
			<ThemeProvider theme={lightTheme}>
				<Story />
			</ThemeProvider>
		),
	],
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
