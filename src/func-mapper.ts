
import {
    overflowX,
    overflow,
    overflowY,
} from './core/overflow/internal'

import { textTransform } from './core/text-transform/internal'
import { serializeDisplayValue } from './core/display/internal'
import { width } from './core/width/internal'
import { height } from './core/height/internal'
import { serializeBackgroundColorValue } from './core/background-color/internal'
import {
    serializeTopValue,
    serializeRightValue,
    serializeBottomValue,
    serializeLeftValue,
} from './core/box-offsets/internal'
import { boxSizing } from './core/box-sizing/internal'
import { serializeColorValue } from './core/color/internal'
import { maxHeight } from './core/max-height/internal'
import { maxWidth } from './core/max-width/internal'
import { minHeight } from './core/min-height/internal'
import { minWidth } from './core/min-width/internal'
import { opacity } from './core/opacity/internal'
import { position } from './core/position/internal'
import { visibility } from './core/visibility/internal'
import {
    serializeBorderColorValue,
    serializeBorderTopColorValue,
    serializeBorderRightColorValue,
    serializeBorderBottomColorValue,
    serializeBorderLeftColorValue,
} from './core/border-color/internal'
import { serializeCursorValue } from './core/cursor/internal'
import {
    serializeBorderTopRightRadiusValue,
    serializeBorderBottomRightRadiusValue,
    serializeBorderBottomLeftRadiusValue,
    serializeBorderTopLeftRadiusValue,
    serializeBorderRadiusValue,
} from './core/border-radius/internal'
import {
    serializeBorderTopStyleValue,
    serializeBorderRightStyleValue,
    serializeBorderBottomStyleValue,
    serializeBorderLeftStyleValue,
    serializeBorderStyleValue,
} from './core/border-style/internal'
import {
    serializeBorderTopWidthValue,
    serializeBorderRightWidthValue,
    serializeBorderBottomWidthValue,
    serializeBorderLeftWidthValue,
    serializeBorderWidthValue,
} from './core/border-width/internal'
import { zIndex } from './core/z-index/internal'
import {
    textDecoration,
} from './core/text-decoration/internal'
import {
    serializeBorderTopValue,
    serializeBorderRightValue,
    serializeBorderBottomValue,
    serializeBorderLeftValue,
    serializeBorderValue,
} from './core/border/internal'
import { fontSize } from './core/font-size/internal'
import { fontWeight } from './core/font-weight/internal'
import { fontFamily } from './core/font-family/internal'
import { serializeFlexBasisValue } from './core/flexbox/flex-basis/internal'
import {
    serializeFlexDirectionValue,
} from './core/flexbox/flex-direction/internal'
import { serializeFlexGrowValue } from './core/flexbox/flex-grow/internal'
import { serializeFlexShrink } from './core/flexbox/flex-shrink/internal'
import { serializeFlexWrap } from './core/flexbox/flex-wrap/internal'
import { serializeFlexValue } from './core/flexbox/flex/internal'
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
import { serializerOrder } from './core/flexbox/order/internal'
import { transitionProperty } from './core/transition-property/internal'
import { transitionDelay } from './core/transition-delay'


export const funcMap = {
    borderTopColor: serializeBorderTopColorValue,
    borderRightColor: serializeBorderRightColorValue,
    borderBottomColor: serializeBorderBottomColorValue,
    borderLeftColor: serializeBorderLeftColorValue,
    borderColor: serializeBorderColorValue,
    borderTopRightRadius: serializeBorderTopRightRadiusValue,
    borderBottomRightRadius: serializeBorderBottomRightRadiusValue,
    borderBottomLeftRadius: serializeBorderBottomLeftRadiusValue,
    borderTopLeftRadius: serializeBorderTopLeftRadiusValue,
    borderRadius: serializeBorderRadiusValue,
    borderTop: serializeBorderTopValue,
    borderRight: serializeBorderRightValue,
    borderBottom: serializeBorderBottomValue,
    borderLeft: serializeBorderLeftValue,
    border: serializeBorderValue,
    borderTopStyle: serializeBorderTopStyleValue,
    borderRightStyle: serializeBorderRightStyleValue,
    borderBottomStyle: serializeBorderBottomStyleValue,
    borderLeftStyle: serializeBorderLeftStyleValue,
    borderStyle: serializeBorderStyleValue,
    borderTopWidth: serializeBorderTopWidthValue,
    borderRightWidth: serializeBorderRightWidthValue,
    borderBottomWidth: serializeBorderBottomWidthValue,
    borderLeftWidth: serializeBorderLeftWidthValue,
    borderWidth: serializeBorderWidthValue,
    backgroundColor: serializeBackgroundColorValue,
    cursor: serializeCursorValue,
    display: serializeDisplayValue,
    width,
    height,
    minHeight,
    maxHeight,
    minWidth,
    maxWidth,
    color: serializeColorValue,
    top: serializeTopValue,
    right: serializeRightValue,
    bottom: serializeBottomValue,
    left: serializeLeftValue,
    flexBasis: serializeFlexBasisValue,
    flexDirection: serializeFlexDirectionValue,
    flexGrow: serializeFlexGrowValue,
    flexShrink: serializeFlexShrink,
    boxSizing,
    opacity,
    overflowX,
    overflowY,
    overflow,
    position,
    visibility,
    zIndex,
    textTransform,
    textDecoration,
    fontSize,
    fontWeight,
    fontFamily,
    flexWrap: serializeFlexWrap,
    flex: serializeFlexValue,
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
    order: serializerOrder,
    transitionProperty,
    transitionDelay
}