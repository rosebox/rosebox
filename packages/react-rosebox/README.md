# @rosebox/react

This package integrates Rosebox with React. Built on top of `jss` and `react-jss`.

## Usage

```shell
npm i @rosebox/core @rosebox/react
```

## Example

Here is a simple example of how you can use rosebox in your react-app:

```tsx

import React from "react";
import { px, ms, rgb } from "@rosebox/core";
import { StylesProvider, createUseStyles } from "@rosebox/react";
import useHover from "@react-hook/hover";

const useStyles = createUseStyles({
  titleStyle: {
    fontSize: px(48),
    transitionDuration: ms(300),
    transitionTimingFunction: 'ease-in-out',
    // props will be provided by the component using the created hook
    color: props => props.isHovering ? rgb(244, 244, 244) : 'blue',
    transitionProperty: props => props.isHovering ? 'color' : 'none'
  }
});

const MyHoverableComponent: React.FC = () => {
  const target = React.useRef(null);
  const isHovering = useHover(target);
  // Passing "props" to useStyles
  const classes = useStyles({
    isHovering: isHovering
  });
  return (
    <div>
      <h1 ref={target} className={classes.titleStyle}>
        Hover over me please
      </h1>
    </div>
  );
};

function App() {
  return (
    <StylesProvider>
      <MyHoverableComponent />
    </StylesProvider>
  );
}

export default App;

```

## Demos and more examples (using inline-styling)

- [A Simple image carousel](https://codesandbox.io/s/image-carousel-rosebox-h1urb?file=/src/App.tsx)
- More examples of react-components using Rosebox can be found [here](https://github.com/hugonteifeh/react-components)

## Roadmap and future releases

Refer to [milestones](https://github.com/rosebox/rosebox/milestones/) for information about releases and the [roadmap project](https://github.com/rosebox/rosebox/projects/12) for roadmap.

## Contribute

There are many way in which you can contribute:

* Submit a feature request.
* Report a bug.
* Suggest a useful integration with another library.

## Help and questions 🙋

If you have a question or need help, feel free to create an issue here 👌.