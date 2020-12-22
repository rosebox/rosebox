# @rosebox/colors

A package to manipulate colors from `@rosebox/core`. Built on top of the [`color`](https://www.npmjs.com/package/color) package

## Example

```tsx

import { rgb, RBStyle } from '@rosebox/core'
import { lighten, darken } from '@rosebox/colors'

const baseBgColor = rgb(255, 255, 255)

const StyleObject: RBStyle = {
  backgroundColor: lighten(baseBgColor, 0.5)
}

const StyleObject2: RBStyle = {
  backgroundColor: darken(baseBgColor, 0.5)
}


```