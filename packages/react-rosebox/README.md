# @rosebox/react

This package integrates Rosebox with React. Built on top of the superb packages `jss` and `react-jss`.

## Usage

```shell
npm i @rosebox/core @rosebox/react
```

## Example

Here is a simple example of how you can use rosebox in your react-app:

```tsx
import * as React from "react";
import "./styles.css";
import { rgb, px, ms } from "@rosebox/core";
import { createUseStyles, StylesProvider } from "@rosebox/react";

const useStyles = createUseStyles({
  titleStyle: {
    fontSize: px(48),
    transition: ["color", ms(300), "ease-in-out"],
    color: "black",
    "&query": {
      "&:nth-child(2)": {
        fontSize: px(32)
      },
      "&:hover": {
        color: rgb(239, 71, 111)
      }
    }
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <StylesProvider>
      <div className="App">
        <h1 className={classes.titleStyle}>Hover over me please</h1>
        <h1 className={classes.titleStyle}>I come next</h1>
      </div>
    </StylesProvider>
  );
}
```

## More information

For more information on this package and other related packages, visit the [official website](https://hugonteifeh.github.io/rosebox-docs/) or the [Github repository](https://github.com/rosebox/rosebox).