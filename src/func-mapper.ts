import { serializeOverflow } from './core/overflow'

import { serializeDisplay } from './core/display'
import { serializeWidth } from './core/width'
import { serializeHeight } from './core/height'
import { serializeBackgroundColor } from './core/background-color'
import { serializeTop, serializeRight, serializeBottom, serializeLeft } from './core/box-offsets'
import { serializeBoxSizingValue } from './core/box-sizing'
import { serializeColor } from './core/color'
import { serializeMaxHeight } from './core/max-height'
import { serializeMaxWidth } from './core/max-width'
import { serializeMinHeightValue } from './core/min-height'
import { serializeMinWidth } from './core/min-width'
import { serializeOpacity } from './core/opacity'
import { serializeJustifyContent } from './core/justify-content'
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
//import { serializeTextDecorationValue } from './core/text-decoration'
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
    serializeMargin,
    serializeMarginX,
    serializeMarginY,
} from './core/margin'
import {
    serializePaddingTopValue,
    serializePaddingRightValue,
    serializePaddingBottomValue,
    serializePaddingLeftValue,
    serializePadding,
    serializePaddingX,
    serializePaddingY,
} from './core/padding'
import { serializeTransitionProperty } from './core/transition-property'
import { serializeTransitionDelay } from './core/transition-delay'
import { serializeTransitionTimingFunction } from './core/transition-timing-function'
import { serializeTransition } from './core/transition'
import { serializeTransitionDuration } from './core/transition-duration'
import { serializeBoxShadow } from './core/box-shadow'
import { serializeAlignItems } from './core/align-items'
import { serializeTransform } from './core/transform'
import { serializeTransformOrigin } from './core/transform-origin'
import { serializePerspectiveOrigin } from './core/perspective-origin'
import { serializePerspectivePropertyValue } from './core/perspective'
import { serializeFontStretch } from './core/font-stretch'
import { serializeFontSizeAdjust } from './core/font-size-adjust'
import { serializeFontVariationSettings } from './core/font-variation-settings'
import { serializeFontSynthesis } from './core/font-synthesis'
import { serializeAlignContent } from './core/align-content'
import { serializeFontVariantLigatures } from './core/font-variant-ligatures'
import { serializeBackgroundImage } from './core/background-image'
import { serializeBackgroundPosition } from './core/background-position'
import { serializeWordSpacing } from './core/word-spacing'
import { serializeAlignSelf } from './core/align-self'
import { serializeBackgroundSize } from './core/background-size'
import { serializeBackfaceVisibility } from './core/backface-visibility'
import { serializeAnimationName } from './core/animation-name'
import { serializeAnimationDuration } from './core/animation-duration'
import { serializeAnimationTimingFunction } from './core/animation-timing-function'
import { serializeAnimationDelay } from './core/animation-delay'
import { serializeAnimationIterationCount } from './core/animation-iteration-count'
import { serializeAnimationDirection } from './core/animation-direction'
import { serializeAnimationPlayState } from './core/animation-play-state'
import { serializeAnimationFillMode } from './core/animation-fill-mode'
import { serializeAnimation } from './core/animation'
import { serializeWillChange } from './core/will-change'
import { serializeVolume } from './core/volume'
import { serializeVerticalAlign } from './core/vertical-align'
import { serializeTextUnderlinePosition } from './core/text-underline-position'
import { serializeTextUnderlineOffset } from './core/text-underline-offset'
import { serializeVoiceVolume } from './core/voice-volume'
import { serializeVoiceRate } from './core/voice-rate'
import { serializeTextTransform } from './core/text-transform'
import { serializeTextEmphasisColor } from './core/text-emphasis-color'
import { serializeTextEmphasisSkip } from './core/text-emphasis-skip'
import { serializeTextEmphasisPosition } from './core/text-emphasis-position'
import { serializeTexIndent } from './core/text-indent'
import { serializeOutlineColor } from './core/outline-color'
import { serializeOutlineWidth } from './core/outline-width'
import { serializeOutline } from './core/outline'
import { serializeFontKerning } from './core/font-kerning'
import { serializeFontOpticalSizing } from './core/font-optical-sizing'
import { serializeFontStyle } from './core/font-style'
import { serializejustifySelf } from './core/justify-self'
import { serializejustifyItems } from './core/justify-items'
import { serializeBorderImageSource } from './core/border-image-source'
import { serializeBorderImageSlice } from './core/border-image-slice'
import { serializeBorderImageWidth } from './core/border-image-width'
import { serializeBorderImageOutset } from './core/border-image-outset'
import { serializeBorderImageRepeat } from './core/border-image-repeat'

export const funcMap: any = (type: 'inline' | 'css') => ({
    alignContent: serializeAlignContent(type),
    alignItems: serializeAlignItems(type),
    animation: serializeAnimation,
    animationDuration: serializeAnimationDuration(type),
    animationTimingFunction: serializeAnimationTimingFunction(type),
    animationDelay: serializeAnimationDelay(type),
    animationIterationCount: serializeAnimationIterationCount(type),
    animationDirection: serializeAnimationDirection(type),
    animationPlayState: serializeAnimationPlayState(type),
    animationFillMode: serializeAnimationFillMode(type),
    borderTopColor: serializeBorderTopColor(type),
    borderRightColor: serializeBorderRightColor(type),
    borderBottomColor: serializeBorderBottomColor(type),
    borderLeftColor: serializeBorderLeftColor(type),
    borderColor: serializeBorderColor(type),
    borderTopRightRadius: serializeBorderTopRightRadius(type),
    borderBottomRightRadius: serializeBorderBottomRightRadius(type),
    borderBottomLeftRadius: serializeBorderBottomLeftRadius(type),
    borderTopLeftRadius: serializeBorderTopLeftRadius(type),
    borderRadius: serializeBorderRadius(type),
    borderTop: serializeBorderTop(type),
    borderRight: serializeBorderRight(type),
    borderBottom: serializeBorderBottom(type),
    borderLeft: serializeBorderLeft(type),
    border: serializeBorder(type),
    borderTopStyle: serializeBorderTopStyle(type),
    borderRightStyle: serializeBorderRightStyle(type),
    borderBottomStyle: serializeBorderBottomStyle(type),
    borderLeftStyle: serializeBorderLeftStyle(type),
    borderStyle: serializeBorderStyle(type),
    borderTopWidth: serializeBorderTopWidth(type),
    borderRightWidth: serializeBorderRightWidth(type),
    borderBottomWidth: serializeBorderBottomWidth(type),
    borderLeftWidth: serializeBorderLeftWidth(type),
    borderWidth: serializeBorderWidth(type),
    borderImageSource: serializeBorderImageSource(type),
    borderImageSlice: serializeBorderImageSlice(type),
    borderImageWidth: serializeBorderImageWidth(type),
    borderImageOutset: serializeBorderImageOutset(type),
    borderImageRepeat: serializeBorderImageRepeat(type),
    backgroundColor: serializeBackgroundColor(type),
    backgroundImage: serializeBackgroundImage(type),
    backgroundPosition: serializeBackgroundPosition(type),
    boxShadow: serializeBoxShadow(type),
    cursor: serializeCursor,
    display: serializeDisplay,
    width: serializeWidth,
    height: serializeHeight,
    fontStyle: serializeFontStyle(type),
    fontKerning: serializeFontKerning(type),
    fontOpticalSizing: serializeFontOpticalSizing(type),
    minHeight: serializeMinHeightValue,
    maxHeight: serializeMaxHeight,
    minWidth: serializeMinWidth,
    maxWidth: serializeMaxWidth,
    color: serializeColor,
    top: serializeTop,
    right: serializeRight,
    bottom: serializeBottom,
    left: serializeLeft,
    flexBasis: serializeFlexBasis(type),
    flexDirection: serializeFlexDirectionValue(type),
    flexGrow: serializeFlexGrow(type),
    flexShrink: serializeFlexShrink(type),
    boxSizing: serializeBoxSizingValue,
    opacity: serializeOpacity,
    overflow: serializeOverflow,
    //textDecoration: serializeTextDecorationValue,
    justifyContent: serializeJustifyContent(type),
    justifySelf: serializejustifySelf(type),
    justifyItems: serializejustifyItems(type),
    textTransform: serializeTextTransform,
    textEmphasisColor: serializeTextEmphasisColor,
    textEmphasisSkip: serializeTextEmphasisSkip,
    textEmphasisPosition: serializeTextEmphasisPosition,
    textIndent: serializeTexIndent,
    fontSize: serializeFontSize(type),
    fontStretch: serializeFontStretch(type),
    fontSizeAdjust: serializeFontSizeAdjust(type),
    fontFamily: serializeFontFamily(type),
    fontVariationSettings: serializeFontVariationSettings(type),
    fontSynthesis: serializeFontSynthesis(type),
    flexWrap: serializeFlexWrap(type),
    flex: serializeFlex,
    letterSpacing: serializeLetterSpacing(type),
    lineHeight: serializeLineHeight(type),
    marginTop: serializeMarginTopValue(type),
    marginRight: serializeMarginRightValue(type),
    marginBottom: serializeMarginBottomValue(type),
    marginLeft: serializeMarginLeftValue(type),
    margin: serializeMargin,
    marginX: serializeMarginX,
    marginY: serializeMarginY,
    paddingTop: serializePaddingTopValue,
    paddingRight: serializePaddingRightValue,
    paddingBottom: serializePaddingBottomValue,
    paddingLeft: serializePaddingLeftValue,
    padding: serializePadding,
    paddingX: serializePaddingX,
    paddingY: serializePaddingY,
    transitionProperty: serializeTransitionProperty,
    transitionDelay: serializeTransitionDelay,
    transitionTimingFunction: serializeTransitionTimingFunction,
    transition: serializeTransition,
    transitionDuration: serializeTransitionDuration,
    animationName: serializeAnimationName(type),
    transform: serializeTransform,
    transformOrigin: serializeTransformOrigin,
    perspectiveOrigin: serializePerspectiveOrigin,
    perspective: serializePerspectivePropertyValue,
    fontVariantLigatures: serializeFontVariantLigatures(type),
    wordSpacing: serializeWordSpacing,
    alignSelf: serializeAlignSelf(type),
    backgroundSize: serializeBackgroundSize(type),
    backfaceVisibility: serializeBackfaceVisibility(type),
    willChange: serializeWillChange,
    volume: serializeVolume,
    verticalAlign: serializeVerticalAlign,
    textUnderlinePosition: serializeTextUnderlinePosition,
    textUnderlineOffset: serializeTextUnderlineOffset,
    voiceVolume: serializeVoiceVolume,
    voiceRate: serializeVoiceRate,
    outlineColor: serializeOutlineColor,
    outlineWidth: serializeOutlineWidth,
    outline: serializeOutline,
})
