import {
  serializeOverflowX,
  serializeOverflowY,
  serializeOverflow,
} from './core/overflow'

import { serializeTextTransformValue } from './core/text-transform'
import { serializeDisplayValue } from './core/display'
import { serializeWidthValue } from './core/width'
import { serializeHeight } from './core/height'
import { serializeBackgroundColorValue } from './core/background-color'
import {
  serializeTopValue,
  serializeRightValue,
  serializeBottomValue,
  serializeLeftValue,
} from './core/box-offsets'
import { serializeBoxSizingValue } from './core/box-sizing'
import { serializeColorValue } from './core/color'
import { serializeMaxHeightValue } from './core/max-height'
import { serializeMaxWidthValue } from './core/max-width'
import { serializeMinHeightValue } from './core/min-height'
import { serializeMinWidthValue } from './core/min-width'
import { serializeOpacity } from './core/opacity'
import { serializePositionPropValue } from './core/position'
import { serializeVisibilityValue } from './core/visibility'
import {
  serializeBorderColorValue,
  serializeBorderTopColorValue,
  serializeBorderRightColorValue,
  serializeBorderBottomColorValue,
  serializeBorderLeftColorValue,
} from './core/border-color'
import { serializeCursorValue } from './core/cursor'
import {
  serializeBorderTopRightRadiusValue,
  serializeBorderBottomRightRadiusValue,
  serializeBorderBottomLeftRadiusValue,
  serializeBorderTopLeftRadiusValue,
  serializeBorderRadiusValue,
} from './core/border-radius'
import {
  serializeBorderTopStyleValue,
  serializeBorderRightStyleValue,
  serializeBorderBottomStyleValue,
  serializeBorderLeftStyleValue,
  serializeBorderStyleValue,
} from './core/border-style'
import {
  serializeBorderTopWidthValue,
  serializeBorderRightWidthValue,
  serializeBorderBottomWidthValue,
  serializeBorderLeftWidthValue,
  serializeBorderWidthValue,
} from './core/border-width'
import { serializezIndexValue } from './core/z-index'
import { serializeTextDecorationValue } from './core/text-decoration'
import {
  serializeBorderTopValue,
  serializeBorderRightValue,
  serializeBorderBottomValue,
  serializeBorderLeftValue,
  serializeBorderValue,
} from './core/border'
import { serializeFontSize } from './core/font-size'
import { serializeFontWeight } from './core/font-weight'
import { serializeFontFamily } from './core/font-family'
import { serializeFlexBasisValue } from './core/flexbox/flex-basis'
import { serializeFlexDirectionValue } from './core/flexbox/flex-direction'
import { serializeFlexGrowValue } from './core/flexbox/flex-grow'
import { serializeFlexShrink } from './core/flexbox/flex-shrink'
import { serializeFlexWrap } from './core/flexbox/flex-wrap'
import { serializeFlexValue } from './core/flexbox/flex'
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
import { serializerOrder } from './core/flexbox/order'
import { serializeTransitionPropertyValue } from './core/transition-property'
import { serializeTransitionDelayValue } from './core/transition-delay'
import { serializeTransitionTimingFunctionValue } from './core/transition-timing-function'
import { serializeTransitionValue } from './core/transition'
import { serializeTransitionDurationValue } from './core/transition-duration'
import { serializeBoxShadowPropertyValue } from './core/box-shadow'
import { serializeJustifyContent } from './core/justify-content'
import { serializeAlignItems } from './core/align-items'
import { serializeTransformPropertyValue } from './core/transform'
import { serializeTransformOriginPropertyValue } from './core/transform-origin'
import { serializePerspectiveOriginPropertyValue } from './core/perspective-origin'
import { serializePerspectivePropertyValue } from './core/perspective'
import { serializeFontStretchPropertyValue } from './core/font-stretch'
import { serializeFontSizeAdjustPropValue } from './core/font-size-adjust'
import { serializeFontVariationSettingsPropValue } from './core/font-variation-settings'
import { serializeFontSynethsisPropValue } from './core/font-synthesis'
import { serializeAlignContentPropValue } from './core/align-content'
import { serializeFontVariantLigaturesPropValue } from './core/font-variant-ligatures'
import { serializeBgImagePropValue } from './core/background-image'
import { serializeBgPositionPropValue } from './core/background-position'
import { serializeWordSpacingPropValue } from './core/word-spacing'
import { serializeAlignSelfPropValue } from './core/align-self'

export const funcMap = {
  alignContent: serializeAlignContentPropValue,
  alignItems: serializeAlignItems,
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
  backgroundImage: serializeBgImagePropValue,
  backgroundPosition: serializeBgPositionPropValue,
  boxShadow: serializeBoxShadowPropertyValue,
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
  position: serializePositionPropValue,
  visibility: serializeVisibilityValue,
  zIndex: serializezIndexValue,
  textTransform: serializeTextTransformValue,
  textDecoration: serializeTextDecorationValue,
  fontSize: serializeFontSize,
  fontStretch: serializeFontStretchPropertyValue,
  fontSizeAdjust: serializeFontSizeAdjustPropValue,
  fontWeight: serializeFontWeight,
  fontFamily: serializeFontFamily,
  fontVariationSettings: serializeFontVariationSettingsPropValue,
  fontSynthesis: serializeFontSynethsisPropValue,
  flexWrap: serializeFlexWrap,
  flex: serializeFlexValue,
  justifyContent: serializeJustifyContent,
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
  transitionTimingFunction: serializeTransitionTimingFunctionValue,
  transition: serializeTransitionValue,
  transitionDuration: serializeTransitionDurationValue,
  transform: serializeTransformPropertyValue,
  transformOrigin: serializeTransformOriginPropertyValue,
  perspectiveOrigin: serializePerspectiveOriginPropertyValue,
  perspective: serializePerspectivePropertyValue,
  fontVariantLigatures: serializeFontVariantLigaturesPropValue,
  wordSpacing: serializeWordSpacingPropValue,
  alignSelf: serializeAlignSelfPropValue,
}
