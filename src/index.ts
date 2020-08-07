import { CSSProperties } from 'react'
import { funcMap } from './func-mapper'

import {
  OverflowXDeclaration,
  OverflowYDeclaration,
  OverflowDeclaration,
} from './core/overflow'
import { TextTransformDeclaration } from './core/text-transform'
import { WidthDeclaration } from './core/width'
import { HeightDeclaration } from './core/height'
import { BgColorDeclaration } from './core/background-color'
import {
  TopDeclaration,
  RightDeclaration,
  BottomDeclaration,
  LeftDeclaration,
} from './core/box-offsets'
import { BoxSizingDeclaration } from './core/box-sizing'
import { ColorDeclaration } from './core/color'
import { MaxHeightDeclaration } from './core/max-height'
import { MaxWidthDeclaration } from './core/max-width'
import { MinHeightDeclaration } from './core/min-height'
import { MinWidthDeclaration } from './core/min-width'
import { OpacityDeclaration } from './core/opacity'
import { PositionDeclaration } from './core/position'
import { VisibilityDeclaration } from './core/visibility'
import {
  BorderColorDeclaration,
  BorderTopColorDeclaration,
  BorderRightColorDeclaration,
  BorderBottomColorDeclaration,
  BorderLeftColorDeclaration,
} from './core/border-color'
import { CursorDeclaration } from './core/cursor'
import { DisplayDeclaration } from './core/display'
import {
  BorderTopRightRadiusDeclaration,
  BorderBottomRightRadiusDeclaration,
  BorderBottomLeftRadiusDeclaration,
  BorderRadiusDeclaration,
  BorderTopLeftRadiusDeclaration,
} from './core/border-radius'
import {
  BorderTopStyleDeclaration,
  BorderRightStyleDeclaration,
  BorderBottomStyleDeclaration,
  BorderLeftStyleDeclaration,
  BorderStyleDeclaration,
} from './core/border-style'
import {
  BorderTopWidthDeclaration,
  BorderRightWidthDeclaration,
  BorderBottomWidthDeclaration,
  BorderLeftWidthDeclaration,
  BorderWidthDeclaration,
} from './core/border-width'
import { ZIndexDeclaration } from './core/z-index'
//import { TextDecorationDeclaration } from './core/text-decoration'
import {
  BorderTopDeclaration,
  BorderRightDeclaration,
  BorderBottomDeclaration,
  BorderLeftDeclaration,
  BorderDeclaration,
} from './core/border'
import { FontSizeDeclaration } from './core/font-size'
import { FontWeightDeclaration } from './core/font-weight'
import { FontFamilyDeclaration } from './core/font-family'
import { FlexBasisDeclaration } from './core/flexbox/flex-basis'
import { FlexDirectionDeclaration } from './core/flexbox/flex-direction'
import { FlexGrowDeclaration } from './core/flexbox/flex-grow'
import { FlexShrinkDeclaration } from './core/flexbox/flex-shrink'
import { FlexWrapDeclaration } from './core/flexbox/flex-wrap'
import { FlexDeclaration } from './core/flexbox/flex'
import { LetterSpacingDeclaration } from './core/letter-spacing'
import { LineHeightDeclaration } from './core/line-height'
import {
  MarginTopDeclaration,
  MarginRightDeclaration,
  MarginBottomDeclaration,
  MarginLeftDeclaration,
  MarginDeclaration,
  MarginXDeclaration,
  MarginYDeclaration,
} from './core/margin'
import {
  PaddingTopDeclaration,
  PaddingRightDeclaration,
  PaddingBottomDeclaration,
  PaddingLeftDeclaration,
  PaddingDeclaration,
  PaddingXDeclaration,
} from './core/padding'
import { TextAlignDeclaration } from './core/text-align'
import { OrderDeclaration } from './core/flexbox/order'
import { TransitionPropertyDeclaration } from './core/transition-property'
import { TransitionDelayDeclaration } from './core/transition-delay'
import { TransitionTimingDeclaration } from './core/transition-timing-function'
import { TransitionDeclaration } from './core/transition'
import { TransitionDurationDeclaration } from './core/transition-duration'
import { BoxShadowDeclaration } from './core/box-shadow'
import { JustifyContentDeclaration } from './core/justify-content'
import { AlignItemsDeclaration } from './core/align-items'
import { TransformDeclaration } from './core/transform'
import { TransformOriginDeclaration } from './core/transform-origin'
import { AlignContentDeclaration } from './core/align-content'
import { BackfaceVisibilityDeclaration } from './core/backface-visibility'
import { TransformStyleDeclaration } from './core/transform-style'
import { PerspectiveOriginDeclaration } from './core/perspective-origin'
import { PerspectiveDeclaration } from './core/perspective'
import { TransformBoxDeclaration } from './core/transform-box'
import { FontStretchDeclaration } from './core/font-stretch'
import { FontSizeAdjustDeclaration } from './core/font-size-adjust'
import { FontSynthesisWeightDeclaration } from './core/font-synthesis-weight'
import { FontSynthesisStyleDeclaration } from './core/font-synthesis-style'
import { FontSynthesisSmallCapsDeclaration } from './core/font-synthesis-small-caps'
import { FontSynthesisDeclaration } from './core/font-synthesis'
import { FontVariantPositionDeclaration } from './core/font-variant-position'
import { FontVariationSettingsDeclaration } from './core/font-variation-settings'
import { FontVariantNumericDeclaration } from './core/font-variant-numeric'
import { FontVariantCapsDeclaration } from './core/font-variant-caps'
import { FontVariantEmojiDeclaration } from './core/font-variant-emoji'
import { FontKerningDeclaration } from './core/font-kerning'
import { FontStyleDeclaration } from './core/font-style'
import { FontVariantLigaturesDeclaration } from './core/font-variant-ligatures'
import { FontOpticalSizingDeclaration } from './core/font-optical-sizing'
import { BgImageDeclaration } from './core/background-image'
import { BgPositionDeclaration } from './core/background-position'
import { WordSpacingDeclaration } from './core/word-spacing'
import { ObjectFitDeclaration } from './core/object-fit'
import { AlignSelfDeclaration } from './core/align-self'
import { BackgroundSizeDeclaration } from './core/background-size'
import { AnimationNameDeclaration } from './core/animation-name'
import { AnimationDurationDeclaration } from './core/animation-duration'
import { AnimationTimingFunctionDeclaration } from './core/animation-timing-function'
import { AnimationDelayDeclaration } from './core/animation-delay'
import { AnimationIterationCountDeclaration } from './core/animation-iteration-count'
import { AnimationDirectionDeclaration } from './core/animation-direction'
import { AnimationPlayStateDeclaration } from './core/animation-play-state'
import { AnimationFillModeDeclaration } from './core/animation-fill-mode'
import { AnimationDeclaration } from './core/animation'
import { WritingModeDeclaration } from './core/writing-mode'
import { WillChangeDeclaration } from './core/will-change'
import { WidowsDeclaration } from './core/widows'
import { WhiteSpaceDeclaration } from './core/white-space'
import { VolumeDeclaration } from './core/volume'
import { VerticalAlignDeclaration } from './core/vertical-align'
import { UserSelectDeclaration } from './core/user-select'
import { UnicodeBidiDeclaration } from './core/unicode-bidi'
import { TextWrapDeclaration } from './core/text-wrap'
import { TextUnderlinePositionDeclaration } from './core/text-underline-position'
import { TextUnderlineOffsetDeclaration } from './core/text-underline-offset'
import { VoiceVolumeDeclaration } from './core/voice-volume'

export * from './core'
export * from './react'

export type RBStyle = Partial<
  WidthDeclaration &
    HeightDeclaration &
    BgColorDeclaration &
    ColorDeclaration &
    TopDeclaration &
    RightDeclaration &
    BottomDeclaration &
    LeftDeclaration &
    BoxSizingDeclaration &
    MaxHeightDeclaration &
    MaxWidthDeclaration &
    MinHeightDeclaration &
    MinWidthDeclaration &
    OpacityDeclaration &
    OverflowXDeclaration &
    OverflowYDeclaration &
    OverflowDeclaration &
    PositionDeclaration &
    VisibilityDeclaration &
    BorderColorDeclaration &
    BorderTopColorDeclaration &
    BorderRightColorDeclaration &
    BorderBottomColorDeclaration &
    BorderLeftColorDeclaration &
    CursorDeclaration &
    DisplayDeclaration &
    BorderTopRightRadiusDeclaration &
    BorderBottomRightRadiusDeclaration &
    BorderBottomLeftRadiusDeclaration &
    BorderTopLeftRadiusDeclaration &
    BorderRadiusDeclaration &
    BorderTopStyleDeclaration &
    BorderRightStyleDeclaration &
    BorderBottomStyleDeclaration &
    BorderLeftStyleDeclaration &
    BorderStyleDeclaration &
    BorderTopWidthDeclaration &
    BorderTopWidthDeclaration &
    BorderRightWidthDeclaration &
    BorderBottomWidthDeclaration &
    BorderLeftWidthDeclaration &
    BorderWidthDeclaration &
    ZIndexDeclaration &
    TextTransformDeclaration &
    //TextDecorationDeclaration &
    BorderTopDeclaration &
    BorderRightDeclaration &
    BorderBottomDeclaration &
    BorderLeftDeclaration &
    BorderDeclaration &
    FontSizeDeclaration &
    FontWeightDeclaration &
    FontFamilyDeclaration &
    FlexBasisDeclaration &
    FlexDirectionDeclaration &
    FlexGrowDeclaration &
    FlexShrinkDeclaration &
    FlexWrapDeclaration &
    FlexDeclaration &
    LetterSpacingDeclaration &
    LineHeightDeclaration &
    MarginTopDeclaration &
    MarginRightDeclaration &
    MarginBottomDeclaration &
    MarginLeftDeclaration &
    MarginDeclaration &
    MarginXDeclaration &
    MarginYDeclaration &
    PaddingXDeclaration &
    PaddingTopDeclaration &
    PaddingRightDeclaration &
    PaddingBottomDeclaration &
    PaddingLeftDeclaration &
    PaddingDeclaration &
    TextAlignDeclaration &
    OrderDeclaration &
    TransitionPropertyDeclaration &
    TransitionDelayDeclaration &
    TransitionTimingDeclaration &
    TransitionDeclaration &
    TransitionDurationDeclaration &
    BoxShadowDeclaration &
    JustifyContentDeclaration &
    AlignItemsDeclaration &
    TransformDeclaration &
    TransformOriginDeclaration &
    AlignContentDeclaration &
    BackfaceVisibilityDeclaration &
    TransformStyleDeclaration &
    PerspectiveOriginDeclaration &
    PerspectiveDeclaration &
    TransformBoxDeclaration &
    FontStretchDeclaration &
    FontSizeAdjustDeclaration &
    FontSynthesisWeightDeclaration &
    FontSynthesisStyleDeclaration &
    FontSynthesisSmallCapsDeclaration &
    FontSynthesisDeclaration &
    FontVariantPositionDeclaration &
    FontVariationSettingsDeclaration &
    FontVariantNumericDeclaration &
    FontVariantCapsDeclaration &
    FontVariantEmojiDeclaration &
    FontKerningDeclaration &
    FontStyleDeclaration &
    FontVariantLigaturesDeclaration &
    FontOpticalSizingDeclaration &
    BgImageDeclaration &
    BgPositionDeclaration &
    WordSpacingDeclaration &
    ObjectFitDeclaration &
    AlignSelfDeclaration &
    AnimationNameDeclaration &
    AnimationDurationDeclaration &
    AnimationTimingFunctionDeclaration &
    AnimationDelayDeclaration &
    AnimationIterationCountDeclaration &
    AnimationDirectionDeclaration &
    AnimationPlayStateDeclaration &
    AnimationFillModeDeclaration &
    AnimationDeclaration &
    BackgroundSizeDeclaration &
    WritingModeDeclaration &
    WillChangeDeclaration &
    WidowsDeclaration &
    WhiteSpaceDeclaration &
    VolumeDeclaration &
    VerticalAlignDeclaration &
    UserSelectDeclaration &
    UnicodeBidiDeclaration &
    TextWrapDeclaration &
    TextUnderlinePositionDeclaration &
    TextUnderlineOffsetDeclaration &
    VoiceVolumeDeclaration & {
      [x: string]: any
    }
>

/**
 * @deprecated
 */
export type RoseboxProperties = RBStyle

export const style__ = (obj: RBStyle): CSSProperties => {
  // NEEDS improvement
  return Object.keys(obj).reduce((acc, key) => {
    return Object.assign({}, acc, {
      [key]: (funcMap as any)[key]
        ? (funcMap as any)[key]((obj as any)[key])
        : (obj as any)[key],
    })
  }, {}) as CSSProperties
}

export const style = (obj: RBStyle): CSSProperties => {
  // NEEDS improvement
  return Object.keys(obj).reduce((acc, key) => {
    const serializer = (funcMap as any)[key]
    return serializer
      ? {
          ...acc,
          ...serializer((obj as any)[key]),
        }
      : {
          ...acc,
          [key]: (obj as any)[key],
        }
  }, {}) as CSSProperties
}
