
import {
    serializeOverflowX,
    serializeOverflowY,
    serializeOverflow,
} from './core/overflow/internal'

import { serializeTextTransformValue } from './core/text-transform/internal'
import { serializeDisplayValue } from './core/display/internal'
import { serializeWidthValue } from './core/width/internal'
import { serializeHeight } from './core/height/internal'
import { serializeBackgroundColorValue } from './core/background-color/internal'
import {
    serializeTopValue,
    serializeRightValue,
    serializeBottomValue,
    serializeLeftValue,
} from './core/box-offsets/internal'
import { serializeBoxSizingValue } from './core/box-sizing/internal'
import { serializeColorValue } from './core/color/internal'
import { serializeMaxHeightValue } from './core/max-height/internal'
import { serializeMaxWidthValue } from './core/max-width/internal'
import { serializeMinHeightValue } from './core/min-height/internal'
import { serializeMinWidthValue } from './core/min-width/internal'
import { serializeOpacity } from './core/opacity/internal'
import { serializePosition } from './core/position/internal'
import { serializeVisibilityValue } from './core/visibility/internal'
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
import { serializezIndexValue } from './core/z-index/internal'
import {
    serializeTextDecorationValue,
} from './core/text-decoration/internal'
import {
    serializeBorderTopValue,
    serializeBorderRightValue,
    serializeBorderBottomValue,
    serializeBorderLeftValue,
    serializeBorderValue,
} from './core/border/internal'
import { serializeFontSize } from './core/font-size/internal'
import { serializeFontWeight } from './core/font-weight/internal'
import { serializeFontFamily } from './core/font-family/internal'
import { serializeFlexBasisValue } from './core/flexbox/flex-basis/internal'
import {
    serializeFlexDirectionValue,
} from './core/flexbox/flex-direction/internal'
import { serializeFlexGrowValue } from './core/flexbox/flex-grow/internal'
import { serializeFlexShrink } from './core/flexbox/flex-shrink/internal'
import { serializeFlexWrap } from './core/flexbox/flex-wrap/internal'
import { serializeFlexValue } from './core/flexbox/flex/internal'
import { serializeLetterSpacing } from './core/letter-spacing/internal'
import { serializeLineHeight } from './core/line-height/internal'
import {
    serializeMarginTopValue,
    serializeMarginRightValue,
    serializeMarginBottomValue,
    serializeMarginLeftValue,
    serializeMarginValue,
} from './core/margin/internal'
import {
    serializePaddingTopValue,
    serializePaddingRightValue,
    serializePaddingBottomValue,
    serializePaddingLeftValue,
    serializePaddingValue,
} from './core/padding/internal'
import { serializeTextAlign } from './core/text-align/internal'
import { serializerOrder } from './core/flexbox/order/internal'
import { serializeTransitionPropertyValue } from './core/transition-property/internal'
import { serializeTransitionDelayValue } from './core/transition-delay'
import { serializeTransitionTimingFunctionValue } from './core/transition-timing-function'


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
    width: serializeWidthValue,
    height: serializeHeight,
    minHeight: serializeMinHeightValue,
    maxHeight: serializeMaxHeightValue,
    minWidth: serializeMinWidthValue,
    maxWidth: serializeMaxWidthValue,
    color: serializeColorValue,
    top: serializeTopValue,
    right: serializeRightValue,
    bottom: serializeBottomValue,
    left: serializeLeftValue,
    flexBasis: serializeFlexBasisValue,
    flexDirection: serializeFlexDirectionValue,
    flexGrow: serializeFlexGrowValue,
    flexShrink: serializeFlexShrink,
    boxSizing: serializeBoxSizingValue,
    opacity: serializeOpacity,
    overflowX: serializeOverflowX,
    overflowY: serializeOverflowY,
    overflow: serializeOverflow,
    position: serializePosition,
    visibility: serializeVisibilityValue,
    zIndex: serializezIndexValue,
    textTransform: serializeTextTransformValue,
    textDecoration: serializeTextDecorationValue,
    fontSize: serializeFontSize,
    fontWeight: serializeFontWeight,
    fontFamily: serializeFontFamily,
    flexWrap: serializeFlexWrap,
    flex: serializeFlexValue,
    letterSpacing: serializeLetterSpacing,
    lineHeight: serializeLineHeight,
    marginTop: serializeMarginTopValue,
    marginRight: serializeMarginRightValue,
    marginBottom: serializeMarginBottomValue,
    marginLeft: serializeMarginLeftValue,
    margin: serializeMarginValue,
    paddingTop: serializePaddingTopValue,
    paddingRight: serializePaddingRightValue,
    paddingBottom: serializePaddingBottomValue,
    paddingLeft: serializePaddingLeftValue,
    padding: serializePaddingValue,
    textAlign: serializeTextAlign,
    order: serializerOrder,
    transitionProperty: serializeTransitionPropertyValue,
    transitionDelay: serializeTransitionDelayValue,
    transitionTimingFunction: serializeTransitionTimingFunctionValue
}