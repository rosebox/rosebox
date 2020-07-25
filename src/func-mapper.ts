import {
  serializeOverflowX,
  serializeOverflowY,
  serializeOverflow,
} from './core/overflow'

import { serializeTextTransformValue } from './core/text-transform'
import { serializeDisplay } from './core/display'
import { serializeWidthValue } from './core/width'
import { serializeHeight } from './core/height'
import { serializeBackgroundColor } from './core/background-color'
import {
  serializeTop,
  serializeRight,
  serializeBottom,
  serializeLeft,
} from './core/box-offsets'
import { serializeBoxSizingValue } from './core/box-sizing'
import { serializeColor } from './core/color'
import { serializeMaxHeightValue } from './core/max-height'
import { serializeMaxWidthValue } from './core/max-width'
import { serializeMinHeightValue } from './core/min-height'
import { serializeMinWidthValue } from './core/min-width'
import { serializeOpacity } from './core/opacity'
import { serializePositionPropValue } from './core/position'
import { serializeVisibilityValue } from './core/visibility'
import {
  serializeBorderColor,
  serializeBorderTopColor,
  serializeBorderRightColor,
  serializeBorderBottomColor,
  serializeBorderLeftColor,
} from './core/border-color'
import { serializeCursor } from './core/cursor'
import {
  serializeBorderTopRightRadius,
  serializeBorderBottomRightRadius,
  serializeBorderBottomLeftRadius,
  serializeBorderTopLeftRadius,
  serializeBorderRadius,
} from './core/border-radius'
import {
  serializeBorderTopStyle,
  serializeBorderRightStyle,
  serializeBorderBottomStyle,
  serializeBorderLeftStyle,
  serializeBorderStyle,
} from './core/border-style'
import {
  serializeBorderTopWidth,
  serializeBorderRightWidth,
  serializeBorderBottomWidth,
  serializeBorderLeftWidth,
  serializeBorderWidth,
} from './core/border-width'
import { serializezIndexValue } from './core/z-index'
import { serializeTextDecorationValue } from './core/text-decoration'
import {
  serializeBorderTop,
  serializeBorderRight,
  serializeBorderBottom,
  serializeBorderLeft,
  serializeBorder,
} from './core/border'
import { serializeFontSize } from './core/font-size'
import { serializeFontFamily } from './core/font-family'
import { serializeFlexBasis } from './core/flexbox/flex-basis'
import { serializeFlexDirectionValue } from './core/flexbox/flex-direction'
import { serializeFlexGrow } from './core/flexbox/flex-grow'
import { serializeFlexShrink } from './core/flexbox/flex-shrink'
import { serializeFlexWrap } from './core/flexbox/flex-wrap'
import { serializeFlex } from './core/flexbox/flex'
import { serializeLetterSpacing } from './core/letter-spacing'
import { serializeLineHeight } from './core/line-height'
import {
  serializeMarginTopValue,
  serializeMarginRightValue,
  serializeMarginBottomValue,
  serializeMarginLeftValue,
  serializeMarginValue,
} from './core/margin'
import {
  serializePaddingTopValue,
  serializePaddingRightValue,
  serializePaddingBottomValue,
  serializePaddingLeftValue,
  serializePaddingValue,
} from './core/padding'
import { serializeTextAlign } from './core/text-align'
import { serializeOrder } from './core/flexbox/order'
import { serializeTransitionPropertyValue } from './core/transition-property'
import { serializeTransitionDelayValue } from './core/transition-delay'
import { serializeTransitionTimingFunctionValue } from './core/transition-timing-function'
import { serializeTransitionValue } from './core/transition'
import { serializeTransitionDurationValue } from './core/transition-duration'
import { serializeBoxShadow } from './core/box-shadow'
import { serializeAlignItems } from './core/align-items'
import { serializeTransformPropertyValue } from './core/transform'
import { serializeTransformOriginPropertyValue } from './core/transform-origin'
import { serializePerspectiveOriginPropertyValue } from './core/perspective-origin'
import { serializePerspectivePropertyValue } from './core/perspective'
import { serializeFontStretch } from './core/font-stretch'
import { serializeFontSizeAdjust } from './core/font-size-adjust'
import { serializeFontVariationSettings } from './core/font-variation-settings'
import { serializeFontSynthesis } from './core/font-synthesis'
import { serializeAlignContent } from './core/align-content'
import { serializeFontVariantLigatures } from './core/font-variant-ligatures'
import { serializeBackgroundImage } from './core/background-image'
import { serializeBackgroundPosition } from './core/background-position'
import { serializeWordSpacingPropValue } from './core/word-spacing'
import { serializeAlignSelf } from './core/align-self'
import { serializeBackgroundSize } from './core/background-size'
import { serializeBackfaceVisibility } from './core/backface-visibility'

export const funcMap = {
  alignContent: serializeAlignContent,
  alignItems: serializeAlignItems,
  borderTopColor: serializeBorderTopColor,
  borderRightColor: serializeBorderRightColor,
  borderBottomColor: serializeBorderBottomColor,
  borderLeftColor: serializeBorderLeftColor,
  borderColor: serializeBorderColor,
  borderTopRightRadius: serializeBorderTopRightRadius,
  borderBottomRightRadius: serializeBorderBottomRightRadius,
  borderBottomLeftRadius: serializeBorderBottomLeftRadius,
  borderTopLeftRadius: serializeBorderTopLeftRadius,
  borderRadius: serializeBorderRadius,
  borderTop: serializeBorderTop,
  borderRight: serializeBorderRight,
  borderBottom: serializeBorderBottom,
  borderLeft: serializeBorderLeft,
  border: serializeBorder,
  borderTopStyle: serializeBorderTopStyle,
  borderRightStyle: serializeBorderRightStyle,
  borderBottomStyle: serializeBorderBottomStyle,
  borderLeftStyle: serializeBorderLeftStyle,
  borderStyle: serializeBorderStyle,
  borderTopWidth: serializeBorderTopWidth,
  borderRightWidth: serializeBorderRightWidth,
  borderBottomWidth: serializeBorderBottomWidth,
  borderLeftWidth: serializeBorderLeftWidth,
  borderWidth: serializeBorderWidth,
  backgroundColor: serializeBackgroundColor,
  backgroundImage: serializeBackgroundImage,
  backgroundPosition: serializeBackgroundPosition,
  boxShadow: serializeBoxShadow,
  cursor: serializeCursor,
  display: serializeDisplay,
  width: serializeWidthValue,
  height: serializeHeight,
  minHeight: serializeMinHeightValue,
  maxHeight: serializeMaxHeightValue,
  minWidth: serializeMinWidthValue,
  maxWidth: serializeMaxWidthValue,
  color: serializeColor,
  top: serializeTop,
  right: serializeRight,
  bottom: serializeBottom,
  left: serializeLeft,
  flexBasis: serializeFlexBasis,
  flexDirection: serializeFlexDirectionValue,
  flexGrow: serializeFlexGrow,
  flexShrink: serializeFlexShrink,
  boxSizing: serializeBoxSizingValue,
  opacity: serializeOpacity,
  overflowX: serializeOverflowX,
  overflowY: serializeOverflowY,
  overflow: serializeOverflow,
  position: serializePositionPropValue,
  visibility: serializeVisibilityValue,
  zIndex: serializezIndexValue,
  textTransform: serializeTextTransformValue,
  textDecoration: serializeTextDecorationValue,
  fontSize: serializeFontSize,
  fontStretch: serializeFontStretch,
  fontSizeAdjust: serializeFontSizeAdjust,
  fontFamily: serializeFontFamily,
  fontVariationSettings: serializeFontVariationSettings,
  fontSynthesis: serializeFontSynthesis,
  flexWrap: serializeFlexWrap,
  flex: serializeFlex,
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
  order: serializeOrder,
  transitionProperty: serializeTransitionPropertyValue,
  transitionDelay: serializeTransitionDelayValue,
  transitionTimingFunction: serializeTransitionTimingFunctionValue,
  transition: serializeTransitionValue,
  transitionDuration: serializeTransitionDurationValue,
  transform: serializeTransformPropertyValue,
  transformOrigin: serializeTransformOriginPropertyValue,
  perspectiveOrigin: serializePerspectiveOriginPropertyValue,
  perspective: serializePerspectivePropertyValue,
  fontVariantLigatures: serializeFontVariantLigatures,
  wordSpacing: serializeWordSpacingPropValue,
  alignSelf: serializeAlignSelf,
  backgroundSize: serializeBackgroundSize,
  backfaceVisibility: serializeBackfaceVisibility,
}
