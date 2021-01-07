<p align="center">
<img width="400" style="margin-left: auto; margin-right:auto; display: block" alt="portfolio_view" src="../../logo.svg">
</p>

# @rosebox/core

This package contains the types and the serializers used in rosebox.

## Usage

1. Install the following packages:

```shell
npm i @rosebox/core @rosebox/react
```

2. Install the [VScode-extension](https://marketplace.visualstudio.com/items?itemName=hugonteifeh.rosebox-language-server-extension).

3. Write your styles in files that match the pattern `*.rb.ts`.

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

## Docs and more info

For more information on this package and other related packages, visit the [official website]() or the [Github repository](https://www.rosebox.dev/).
