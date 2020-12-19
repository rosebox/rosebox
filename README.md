<p align="center">
<img width="400" style="margin-left: auto; margin-right:auto; display: block" alt="portfolio_view" src="./logo.svg">
</p>

# Rosebox

The Rosebox project is an effort to improve the CSS-in-JS experience by providing features like strong types (e.g., [`Length`](https://www.rosebox.dev/api/#rb-type-length)), typed functions (e.g., [`linGrad`](https://www.rosebox.dev/api/#rb-vc-lingrad)), extra shorthand properties(e.g., [`marginX`](https://www.rosebox.dev/api/#rb-prop-paddingx), [`paddingX`](https://www.rosebox.dev/api/#rb-prop-paddingx)), an object-based syntax for the values of complex properties (e.g., [`animation`](https://www.rosebox.dev/api/#rb-prop-animation)), and support for high-quality IntelliSense.

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

## IMPORTANT NOTE 📢

Already today, you can use all the CSS properties in Rosebox. Missing ones in the api only indicate that they are not **YET** strongly typed. The library exposes all untyped/weakly-typed properties by prefixing them with an underscore (e.g., `_borderImageStyle`, `_all`). These weakly-typed props have a type of `string`. When a property becomes strongly-typed, its underscore-prefixed version gets deprecated immediately. However, its removal may only be considered after a minimum of 1 major release since the deprecation—for example, if `_borderImageStyle` gets deprecated in 0.6.4, it means that it will be removed in 1.0.0.

## Docs

[Docs](https://rosebox.dev)

## Demos and more examples (using inline-styling)

- [A Simple image carousel](https://codesandbox.io/s/image-carousel-rosebox-h1urb?file=/src/App.tsx)
- More examples of react-components using Rosebox can be found [here](https://github.com/hugonteifeh/react-components)

## Roadmap and future releases

Refer to [milestones](https://github.com/hugonteifeh/rosebox/milestones/) for information about releases and the [roadmap project](https://github.com/hugonteifeh/rosebox/projects/12) for roadmap.

## Contribute

There are many way in which you can contribute:

* Submit a feature request.
* Report a bug.
* Suggest a useful integration with another library.

## Help and questions 🙋

If you have a question or need help, feel free to create an issue here 👌.