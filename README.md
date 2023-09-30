# simple-unified-UI

## A re-usuable React component library

Common sought after components put together into a single place for you to use!

- Simply install the package in React Project using "npm install simple-unified-ui"
- Import components into your project
- ✨Magic ✨

## Features

- Customisable components
- Fully typed props
- Styled components included too!

## Example

```javascript
// MyComponent.jsx
import React from "react";
import { LargeButton } from "simple-unified-ui";

export const MyComponent = () => (
	<div>
		<h1>My Simple Component</h1>
		<LargeButton
			text="button"
			onClick={() => {
				console.log("test");
			}}
		/>
	</div>
);
```

The above example is a local component within a React project that uses a 'LargeButton' component within the simple-unified-ui library. For better clarification of these components you can clone this repo onto your machine and run storybook via "npm run storybook" to view each component in isolation.

## Tech

simple-unified-ui uses a limited number of different JS direct dependencies to work correctly:

- [React] - JavaScript FE framework built by Facebook.
- [TypeScript] - staticly typed superset of JavaScript
- [styled-components] - lets you write actual CSS in your React components

## Installation

Install the simple-unified-ui dependency within your React application.

```sh
npm i simple-unified-ui
```

## Development

Want to contribute? Great!

simple-unified-ui is stored here on GitHub and through PRs
if you add a component and its reviewed as beneficial it will be added!

NOTE: you will have to follow the same file structure as existing components

- component added into folder within src/components/[ComponentName]
  -- src/components/[ComponentName] MUST contain the following files
  --- [ComponentName].tsx
  --- [ComponentName].types.ts
  --- styled.tsx
  --- stories (directory)
  ---- [StyledComponentName].stories.ts // file per StyledComponentName

## NPM package
The released NPM package can be found here: https://www.npmjs.com/package/simple-unified-ui

## License

MIT

[React]: https://react.dev/
[TypeScript]: https://www.typescriptlang.org/
[styled-components]: https://styled-components.com/
