# simple-unified-ui

## Introduction

A re-usuable React component library Common sought after components put together into a single place for you to use!

## Index

- [About](#about)
  - [Features](#features)
  - [Tech](#tech)
  - [Example Usage](#example-usage)
- [Installation](#installation)
- [Preview Components](#preview-components)
- [Component Tiers](#component-tiers)
  - [Core](#core)
  - [Basic](#basic)
  - [Advanced](#advanced)
- [Contribute](#contribute)
  - [Component File Structure](#component-file-structure)
- [Resources](#resources)
- [License](#license)

## About

- Simply install the package in React Project using "npm install simple-unified-ui"
- Import components into your React project e.g. import { LargeButton } from "simple-unified-ui"
- ✨Magic ✨

### Features

- Customisable components
- Fully typed props
- Styled components included too!

### Tech

simple-unified-ui uses a limited number of different JS direct dependencies to work correctly:

- [React] - JavaScript FE framework built by Facebook.
- [TypeScript] - staticly typed superset of JavaScript
- [styled-components] - lets you write actual CSS in your React components

### Example usage

```javascript
// MyComponent.jsx
import React from "react";
import { ButtonBase } from "simple-unified-ui";

export const App = () => (
  <div>
    <h1>My Simple App</h1>
    <ButtonBase
      onClick={() => {
        console.log("test");
      }}
    >
    Example Button
    <ButtonBase>
  </div>
);
```

The above example is a local component within a React project that uses a 'LargeButton' component within the simple-unified-ui library. For better clarification of these components you can clone this repo onto your machine and in the root directory run storybook via "npm run storybook" to view each component in isolation.

## Installation

Install the simple-unified-ui dependency within your React application to utilise any of the components within the library via the below npm command.

```sh
npm i simple-unified-ui
```

## Preview Components

Because this repository utilises Storybook.js you are able to preview components in isolation. To do so just follow the below steps

1. Clone the repository with via the terminal with `git clone git@github.com:Daniel-K-Miller/simple-unified-ui.git .`
2. Install the required dependencies with `npm i`
3. Run storybook via `npm run storybook`

<img width="1505" alt="Screenshot 2023-12-26 at 23 15 25" src="https://github.com/Daniel-K-Miller/simple-unified-ui/assets/41994775/8f1c60d3-6303-4040-8cc2-74b15e22799a">

## Component Tiers

It might also be useful to understand the structuring of components within the Storybook instance when navigating and NEEDED to be known if intending to contribute to the library.

Components are split into three groups:

### Core

The Core group contains components that are very plain! They are in essence components that cannot really be broken down any further, an example of a Core component is a Button component. This will fall within Core because it cannot be broken down further. Just think of Core components as almost akin to HTML elements (your divs/spans etc...), they are very basic and are core to building more complex levels of components!

### Basic

The Basic group contains components that are a bit more purpose driven. I like to think of them as a Component that encorperates the use of multiple fundumental components/elements. They are not the most broken down state of a component but are not also super complex components. An example Basic component may be a Block, this component dynamically sets the wrapper container (from the type passed via props) while also encorpering a heading if appropriate (from props again). I will echo again - Basic components can just be seen as components made up of multiple fundumental components.

### Advanced

The Advanced group contains multiple Basic group components and also encorperate more complex logic (but not always necessary). This can be seen as the top level of a component system - there is no level above. An example of an Advanced component is the Album component, this is a component that has within it a Basic Items component and a Basic Controls component and therefore qualifies as an Advanced component (as it features two components which are not just Core components), ontop of this, the Album component also holds logic determing scrolling, button interactions. These Advanced components are the ones that hold Component systems together and can be seen as the 'motherboard'.

## Contribute

Want to contribute? Great!

simple-unified-ui is stored on [GitHub] and through pull requests, if you add a component and it is seen as beneficial it will be added to the repository!

NOTE: when adding components or making changes you will have to follow the same file structure as existing components currently

### Component file structure

```text
...
├── button                             # component root folder e.g. button
│   ├── _ButtonBase.stories.ts         # example story for component
│   ├── index.tsx        	       # react component
│   ├── props.ts                       # interface file defining props for index.tsx
│   └── styled.ts        	       # styled component (uses ./index.tsx) to add styling
│
...
```

## Resources

- GitHub Repository: https://github.com/Daniel-K-Miller/simple-unified-ui/
- NPM Package: https://www.npmjs.com/package/simple-unified-ui

## License

MIT

[React]: https://react.dev/
[TypeScript]: https://www.typescriptlang.org/
[styled-components]: https://styled-components.com/
[GitHub]: https://github.com/Daniel-K-Miller/simple-unified-ui/
