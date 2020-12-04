import { makeStyles } from '@material-ui/styles'
import { RBJSSStyle } from './rb-jss'

type StyleMap = {
  [key: string]: RBJSSStyle
}

export const makeStylesRB = (styleMap: StyleMap, options: any) => {
  return makeStyles(styleMap as any, options)
}
