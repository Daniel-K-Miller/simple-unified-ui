# simple-unified-ui

## introduction
A re-usuable React component library Common sought after components put together into a single place for you to use!

## Index
- [About](#about)
  - [Features](#features)
  - [Tech](#tech)
  - [Example Usage](#example-usage)
- [Installation](#installation)
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
import { ButtonSmlStyled } from "simple-unified-ui";

export const App = () => (
  <div>
    <h1>My Simple App</h1>
    <ButtonBase
      onClick={() => {
        console.log("test");
      }}
    >
    Example Button
    <LargeButton>
  </div>
);
```

The above example is a local component within a React project that uses a 'LargeButton' component within the simple-unified-ui library. For better clarification of these components you can clone this repo onto your machine and in the root directory run storybook via "npm run storybook" to view each component in isolation.

## Installation

Install the simple-unified-ui dependency within your React application via the below npm command.

```sh
npm i simple-unified-ui
```

## Contribute

Want to contribute? Great!

simple-unified-ui is stored on [GitHub] and through pull requests, if you add a component and it is seen as beneficial it will be added to the repository!

NOTE: when adding components or making changes you will have to follow the same file structure as existing components currently

### Component file structure
```text
...
├── button                             # component root folder e.g. button
│   ├── index.tsx        	       # react component
│   ├── props.ts                       # interface file defining props for index.tsx
│   ├── styled.ts        	       # styled component (uses ./index.tsx) to add styling
│   └── stories                        # stories directory for component
│       ├── ButtonBase.stories.ts      # example story for component
│       └── HollowButton.stories.ts    # example story for component
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
