import { makeStyles } from '@material-ui/styles'
import functions from 'jss-plugin-rule-value-function'
import global from 'jss-plugin-global'
import nested from 'jss-plugin-nested'
import camelCase from 'jss-plugin-camel-case'
import vendorPrefixer from 'jss-plugin-vendor-prefixer'
import propsSort from 'jss-plugin-props-sort'

import { RBJSSStyle, rbJSS } from './rb-jss'

type StyleMap = {
  [key: string]: RBJSSStyle
}

export const jssPreset = () => {
  return {
    plugins: [
      functions(),
      global(),
      nested(),
      camelCase(),
      propsSort(),
      rbJSS(),
      typeof window === 'undefined' ? null : vendorPrefixer(),
    ],
  }
}

/**
 * This functions is just a wrapper for https://material-ui.com/styles/api/#makestyles-styles-options-hook.
 * Its purpose is to provide rosebox-specific types
 */
export const makeStylesRB = (styleMap: StyleMap, options?: any) => {
  return makeStyles(styleMap as any, options)
}
