import { makeStyles } from '@material-ui/styles'

import { RBJSSStyle } from './rb-jss'

type StyleMap = {
    [key: string]: RBJSSStyle
}

/**
 * This functions is just a wrapper for https://material-ui.com/styles/api/#makestyles-styles-options-hook.
 * Its purpose is to provide rosebox-specific types
 */
export const makeStylesRB = (styleMap: StyleMap, options?: any) => {
    return makeStyles(styleMap as any, options)
}
