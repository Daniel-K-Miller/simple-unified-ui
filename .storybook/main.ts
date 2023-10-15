import type { StorybookConfig } from "@storybook/react-webpack5";

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	webpackFinal: async (config) => {
		if (config.resolve) {
			config.resolve.plugins = [
				...(config.resolve.plugins || []),
				new TsconfigPathsPlugin({
					extensions: config.resolve.extensions,
				}),
			];
		}
		return config;
	},
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@storybook/addon-interactions",
		"@storybook/addon-docs",
	],
	framework: {
		name: "@storybook/react-webpack5",
		options: {},
	},
	docs: {
		autodocs: true,
	},
};
export default config;
