
import {
    overflowX,
    overflow,
    overflowY,
} from './core/overflow/internal'

import { textTransform } from './core/text-transform/internal'
import { display } from './core/display/internal'
import { width } from './core/width/internal'
import { height } from './core/height/internal'
import { bgColor } from './core/background-color/internal'
import {
    top,
    right,
    bottom,
    left,
} from './core/box-offsets/internal'
import { boxSizing } from './core/box-sizing/internal'
import { color } from './core/color/internal'
import { maxHeight } from './core/max-height/internal'
import { maxWidth } from './core/max-width/internal'
import { minHeight } from './core/min-height/internal'
import { minWidth } from './core/min-width/internal'
import { opacity } from './core/opacity/internal'
import { position } from './core/position/internal'
import { visibility } from './core/visibility/internal'
import {
    borderColor,
    borderTopColor,
    borderRightColor,
    borderBottomColor,
    borderLeftColor,
} from './core/border-color/internal'
import { cursor } from './core/cursor/internal'
import {
    borderTopRightRadius,
    borderBottomRightRadius,
    borderBottomLeftRadius,
    borderTopLeftRadius,
    borderRadius,
} from './core/border-radius/internal'
import {
    borderTopStyle,
    borderRightStyle,
    borderBottomStyle,
    borderLeftStyle,
    borderStyle,
} from './core/border-style/internal'
import {
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderWidth,
} from './core/border-width/internal'
import { zIndex } from './core/z-index/internal'
import {
    textDecoration,
} from './core/text-decoration/internal'
import {
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    border,
} from './core/border/internal'
import { fontSize } from './core/font-size/internal'
import { fontWeight } from './core/font-weight/internal'
import { fontFamily } from './core/font-family/internal'
import { flexBasis } from './core/flexbox/flex-basis/internal'
import {
    flexDirection,
} from './core/flexbox/flex-direction/internal'
import { flexGrow } from './core/flexbox/flex-grow/internal'
import { flexShrink } from './core/flexbox/flex-shrink/internal'
import { flexWrap } from './core/flexbox/flex-wrap/internal'
import { flex } from './core/flexbox/flex/internal'
import { letterSpacing } from './core/letter-spacing/internal'
import { lineHeight } from './core/line-height/internal'
import {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    margin,
} from './core/margin/internal'
import {
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    padding,
} from './core/padding/internal'
import { textAlign } from './core/text-align/internal'
import { order } from './core/flexbox/order/internal'
import { transitionProperty } from './core/transition-property/internal'
import { transitionDelay } from './core/transition-delay'


export const funcMap = {
    width,
    height,
    minHeight,
    maxHeight,
    minWidth,
    maxWidth,
    backgroundColor: bgColor,
    color,
    top,
    right,
    bottom,
    left,
    boxSizing,
    opacity,
    overflowX,
    overflowY,
    overflow,
    position,
    visibility,
    borderColor,
    borderTopColor,
    borderRightColor,
    borderBottomColor,
    borderLeftColor,
    cursor,
    display,
    borderTopRightRadius,
    borderBottomRightRadius,
    borderBottomLeftRadius,
    borderTopLeftRadius,
    borderRadius,
    borderTopStyle,
    borderRightStyle,
    borderBottomStyle,
    borderLeftStyle,
    borderStyle,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderWidth,
    zIndex,
    textTransform,
    textDecoration,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    border,
    fontSize,
    fontWeight,
    fontFamily,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    flex,
    letterSpacing,
    lineHeight,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    margin,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    padding,
    textAlign,
    order,
    transitionProperty,
    transitionDelay
}