import { Plugin, JssStyle } from 'jss'
import functions from 'jss-plugin-rule-value-function'
import global from 'jss-plugin-global'
import camelCase from 'jss-plugin-camel-case'
import vendorPrefixer from 'jss-plugin-vendor-prefixer'
import propsSort from 'jss-plugin-props-sort'

import { funcMap } from '../func-mapper'
import { OverflowXDeclarationJSS, OverflowYDeclarationJSS, OverflowDeclarationJSS } from '../core/overflow'
import { TextTransformDeclarationJSS } from '../core/text-transform'
import { WidthDeclarationJSS } from '../core/width'
import { HeightDeclarationJSS } from '../core/height'
import { BgColorDeclarationJSS } from '../core/background-color'
import { TopDeclarationJSS, RightDeclarationJSS, BottomDeclarationJSS, LeftDeclarationJSS } from '../core/box-offsets'
import { BoxSizingDeclarationJSS } from '../core/box-sizing'
import { ColorDeclarationJSS } from '../core/color'
import { MaxHeightDeclarationJSS } from '../core/max-height'
import { MaxWidthDeclarationJSS } from '../core/max-width'
import { MinHeightDeclarationJSS } from '../core/min-height'
import { MinWidthDeclarationJSS } from '../core/min-width'
import { OpacityDeclarationJSS } from '../core/opacity'
import { PositionDeclarationJSS } from '../core/position'
import { VisibilityDeclarationJSS } from '../core/visibility'
import {
    BorderColorDeclarationJSS,
    BorderTopColorDeclarationJSS,
    BorderRightColorDeclarationJSS,
    BorderBottomColorDeclarationJSS,
    BorderLeftColorDeclarationJSS,
} from '../core/border-color'
import { CursorDeclarationJSS } from '../core/cursor'
import { DisplayDeclarationJSS } from '../core/display'
import {
    BorderTopRightRadiusDeclarationJSS,
    BorderBottomRightRadiusDeclarationJSS,
    BorderBottomLeftRadiusDeclarationJSS,
    BorderRadiusDeclarationJSS,
    BorderTopLeftRadiusDeclarationJSS,
} from '../core/border-radius'
import {
    BorderTopStyleDeclarationJSS,
    BorderRightStyleDeclarationJSS,
    BorderBottomStyleDeclarationJSS,
    BorderLeftStyleDeclarationJSS,
    BorderStyleDeclarationJSS,
} from '../core/border-style'
import {
    BorderTopWidthDeclarationJSS,
    BorderRightWidthDeclarationJSS,
    BorderBottomWidthDeclarationJSS,
    BorderLeftWidthDeclarationJSS,
    BorderWidthDeclarationJSS,
} from '../core/border-width'
import { ZIndexDeclarationJSS } from '../core/z-index/index'
//import { TextDecorationDeclarationJSS } from './core/text-decoration'
import {
    BorderTopDeclarationJSS,
    BorderRightDeclarationJSS,
    BorderBottomDeclarationJSS,
    BorderLeftDeclarationJSS,
    BorderDeclarationJSS,
} from '../core/border'
import { FontSizeDeclarationJSS } from '../core/font-size'
import { FontWeightDeclarationJSS } from '../core/font-weight'
import { FontFamilyDeclarationJSS } from '../core/font-family'
import { FlexBasisDeclarationJSS } from '../core/flexbox/flex-basis'
import { FlexDirectionDeclarationJSS } from '../core/flexbox/flex-direction'
import { FlexGrowDeclarationJSS } from '../core/flexbox/flex-grow'
import { FlexShrinkDeclarationJSS } from '../core/flexbox/flex-shrink'
import { FlexWrapDeclarationJSS } from '../core/flexbox/flex-wrap'
import { FlexDeclarationJSS } from '../core/flexbox/flex'
import { LetterSpacingDeclarationJSS } from '../core/letter-spacing'
import { LineHeightDeclarationJSS } from '../core/line-height'
import {
    MarginTopDeclarationJSS,
    MarginRightDeclarationJSS,
    MarginBottomDeclarationJSS,
    MarginLeftDeclarationJSS,
    MarginDeclarationJSS,
    MarginXDeclarationJSS,
    MarginYDeclarationJSS,
} from '../core/margin'
import {
    PaddingTopDeclarationJSS,
    PaddingRightDeclarationJSS,
    PaddingBottomDeclarationJSS,
    PaddingLeftDeclarationJSS,
    PaddingDeclarationJSS,
    PaddingXDeclarationJSS,
} from '../core/padding'
import { TextAlignDeclarationJSS } from '../core/text-align'
import { OrderDeclarationJSS } from '../core/flexbox/order'
import { TransitionPropertyDeclarationJSS } from '../core/transition-property'
import { TransitionDelayDeclarationJSS } from '../core/transition-delay'
import { TransitionTimingDeclarationJSS } from '../core/transition-timing-function'
import { TransitionDeclarationJSS } from '../core/transition'
import { TransitionDurationDeclarationJSS } from '../core/transition-duration'
import { BoxShadowDeclarationJSS } from '../core/box-shadow'
import { JustifyContentDeclarationJSS } from '../core/justify-content'
import { JustifyItemsDeclarationJSS } from '../core/justify-items'
import { AlignItemsDeclarationJSS } from '../core/align-items'
import { TransformDeclarationJSS } from '../core/transform'
import { TransformOriginDeclarationJSS } from '../core/transform-origin'
import { AlignContentDeclarationJSS } from '../core/align-content'
import { BackfaceVisibilityDeclarationJSS } from '../core/backface-visibility'
import { TransformStyleDeclarationJSS } from '../core/transform-style'
import { PerspectiveOriginDeclarationJSS } from '../core/perspective-origin'
import { PerspectiveDeclarationJSS } from '../core/perspective'
import { TransformBoxDeclarationJSS } from '../core/transform-box'
import { FontStretchDeclarationJSS } from '../core/font-stretch'
import { FontSizeAdjustDeclarationJSS } from '../core/font-size-adjust'
import { FontSynthesisWeightDeclarationJSS } from '../core/font-synthesis-weight'
import { FontSynthesisStyleDeclarationJSS } from '../core/font-synthesis-style'
import { FontSynthesisSmallCapsDeclarationJSS } from '../core/font-synthesis-small-caps'
import { FontSynthesisDeclarationJSS } from '../core/font-synthesis'
import { FontVariantPositionDeclarationJSS } from '../core/font-variant-position'
import { FontVariationSettingsDeclarationJSS } from '../core/font-variation-settings'
import { FontVariantNumericDeclarationJSS } from '../core/font-variant-numeric'
import { FontVariantCapsDeclarationJSS } from '../core/font-variant-caps'
import { FontVariantEmojiDeclarationJSS } from '../core/font-variant-emoji'
import { FontKerningDeclarationJSS } from '../core/font-kerning'
import { FontStyleDeclarationJSS } from '../core/font-style'
import { FontVariantLigaturesDeclarationJSS } from '../core/font-variant-ligatures'
import { FontOpticalSizingDeclarationJSS } from '../core/font-optical-sizing'
import { BgImageDeclarationJSS } from '../core/background-image'
import { BgPositionDeclarationJSS } from '../core/background-position'
import { WordSpacingDeclarationJSS } from '../core/word-spacing'
import { ObjectFitDeclarationJSS } from '../core/object-fit'
import { AlignSelfDeclarationJSS } from '../core/align-self'
import { BackgroundSizeDeclarationJSS } from '../core/background-size'
import { AnimationNameDeclarationJSS } from '../core/animation-name'
import { AnimationDurationDeclarationJSS } from '../core/animation-duration'
import { AnimationTimingFunctionDeclarationJSS } from '../core/animation-timing-function'
import { AnimationDelayDeclarationJSS } from '../core/animation-delay'
import { AnimationIterationCountDeclarationJSS } from '../core/animation-iteration-count'
import { AnimationDirectionDeclarationJSS } from '../core/animation-direction'
import { AnimationPlayStateDeclarationJSS } from '../core/animation-play-state'
import { AnimationFillModeDeclarationJSS } from '../core/animation-fill-mode'
import { AnimationDeclarationJSS } from '../core/animation'
import { WritingModeDeclarationJSS } from '../core/writing-mode'
import { WillChangeDeclarationJSS } from '../core/will-change'
import { WidowsDeclarationJSS } from '../core/widows'
import { WhiteSpaceDeclarationJSS } from '../core/white-space'
import { VolumeDeclarationJSS } from '../core/volume'
import { VerticalAlignDeclarationJSS } from '../core/vertical-align'
import { UserSelectDeclarationJSS } from '../core/user-select'
import { UnicodeBidiDeclarationJSS } from '../core/unicode-bidi'
import { TextWrapDeclarationJSS } from '../core/text-wrap'
import { TextUnderlinePositionDeclarationJSS } from '../core/text-underline-position'
import { TextUnderlineOffsetDeclarationJSS } from '../core/text-underline-offset'
import { VoiceVolumeDeclarationJSS } from '../core/voice-volume'
import { VoiceStressDeclarationJSS } from '../core/voice-stress'
import { VoiceRateDeclarationJSS } from '../core/voice-rate'
import { TextEmphasisColorDeclarationJSS } from '../core/text-emphasis-color'
import { TextEmphasisSkipDeclarationJSS } from '../core/text-emphasis-skip'
import { TextEmphasisPositionDeclarationJSS } from '../core/text-emphasis-position'
import { TextIndentDeclarationJSS } from '../core/text-indent'
import { TextJustifyDeclarationJSS } from '../core/text-justify'
import { TextGroupAlignDeclarationJSS } from '../core/text-group-align'
import { TextOrientationDeclarationJSS } from '../core/text-orientation'
import { OutlineColorDeclarationJSS } from '../core/outline-color'
import { OutlineWidthDeclarationJSS } from '../core/outline-width'
import { OutlineStyleDeclarationJSS } from '../core/outline-style'
import { OutlineDeclarationJSS } from '../core/outline'
import { RBStyle, style } from '..'
import { camelCaseToDash } from '../dom'
import { serializeAtomicValue } from '../core'
import { UntypedPropsJSS } from '../untyped-props'
import { justifySelfDeclarationJSS } from '../core/justify-self'
import { BorderImageSourceDeclarationJSS } from '../core/border-image-source'

export type RBJSSStyle = Partial<
    WidthDeclarationJSS &
        HeightDeclarationJSS &
        BgColorDeclarationJSS &
        ColorDeclarationJSS &
        TopDeclarationJSS &
        RightDeclarationJSS &
        BottomDeclarationJSS &
        LeftDeclarationJSS &
        BoxSizingDeclarationJSS &
        MaxHeightDeclarationJSS &
        MaxWidthDeclarationJSS &
        MinHeightDeclarationJSS &
        MinWidthDeclarationJSS &
        OpacityDeclarationJSS &
        OverflowXDeclarationJSS &
        OverflowYDeclarationJSS &
        OverflowDeclarationJSS &
        PositionDeclarationJSS &
        VisibilityDeclarationJSS &
        BorderColorDeclarationJSS &
        BorderTopColorDeclarationJSS &
        BorderRightColorDeclarationJSS &
        BorderBottomColorDeclarationJSS &
        BorderLeftColorDeclarationJSS &
        CursorDeclarationJSS &
        DisplayDeclarationJSS &
        BorderTopRightRadiusDeclarationJSS &
        BorderBottomRightRadiusDeclarationJSS &
        BorderBottomLeftRadiusDeclarationJSS &
        BorderTopLeftRadiusDeclarationJSS &
        BorderRadiusDeclarationJSS &
        BorderTopStyleDeclarationJSS &
        BorderRightStyleDeclarationJSS &
        BorderBottomStyleDeclarationJSS &
        BorderLeftStyleDeclarationJSS &
        BorderStyleDeclarationJSS &
        BorderTopWidthDeclarationJSS &
        BorderTopWidthDeclarationJSS &
        BorderRightWidthDeclarationJSS &
        BorderBottomWidthDeclarationJSS &
        BorderLeftWidthDeclarationJSS &
        BorderWidthDeclarationJSS &
        ZIndexDeclarationJSS &
        TextTransformDeclarationJSS &
        //TextDecorationDeclarationJSS &
        BorderTopDeclarationJSS &
        BorderRightDeclarationJSS &
        BorderBottomDeclarationJSS &
        BorderLeftDeclarationJSS &
        BorderDeclarationJSS &
        FontSizeDeclarationJSS &
        FontWeightDeclarationJSS &
        FontFamilyDeclarationJSS &
        FlexBasisDeclarationJSS &
        FlexDirectionDeclarationJSS &
        FlexGrowDeclarationJSS &
        FlexShrinkDeclarationJSS &
        FlexWrapDeclarationJSS &
        FlexDeclarationJSS &
        LetterSpacingDeclarationJSS &
        LineHeightDeclarationJSS &
        MarginTopDeclarationJSS &
        MarginRightDeclarationJSS &
        MarginBottomDeclarationJSS &
        MarginLeftDeclarationJSS &
        MarginDeclarationJSS &
        MarginXDeclarationJSS &
        MarginYDeclarationJSS &
        PaddingXDeclarationJSS &
        PaddingTopDeclarationJSS &
        PaddingRightDeclarationJSS &
        PaddingBottomDeclarationJSS &
        PaddingLeftDeclarationJSS &
        PaddingDeclarationJSS &
        TextAlignDeclarationJSS &
        OrderDeclarationJSS &
        TransitionPropertyDeclarationJSS &
        TransitionDelayDeclarationJSS &
        TransitionTimingDeclarationJSS &
        TransitionDeclarationJSS &
        TransitionDurationDeclarationJSS &
        BoxShadowDeclarationJSS &
        JustifyContentDeclarationJSS &
        AlignItemsDeclarationJSS &
        TransformDeclarationJSS &
        TransformOriginDeclarationJSS &
        AlignContentDeclarationJSS &
        BackfaceVisibilityDeclarationJSS &
        TransformStyleDeclarationJSS &
        PerspectiveOriginDeclarationJSS &
        PerspectiveDeclarationJSS &
        TransformBoxDeclarationJSS &
        FontStretchDeclarationJSS &
        FontSizeAdjustDeclarationJSS &
        FontSynthesisWeightDeclarationJSS &
        FontSynthesisStyleDeclarationJSS &
        FontSynthesisSmallCapsDeclarationJSS &
        FontSynthesisDeclarationJSS &
        FontVariantPositionDeclarationJSS &
        FontVariationSettingsDeclarationJSS &
        FontVariantNumericDeclarationJSS &
        FontVariantCapsDeclarationJSS &
        FontVariantEmojiDeclarationJSS &
        FontKerningDeclarationJSS &
        FontStyleDeclarationJSS &
        FontVariantLigaturesDeclarationJSS &
        FontOpticalSizingDeclarationJSS &
        BgImageDeclarationJSS &
        BgPositionDeclarationJSS &
        WordSpacingDeclarationJSS &
        ObjectFitDeclarationJSS &
        AlignSelfDeclarationJSS &
        AnimationNameDeclarationJSS &
        AnimationDurationDeclarationJSS &
        AnimationTimingFunctionDeclarationJSS &
        AnimationDelayDeclarationJSS &
        AnimationIterationCountDeclarationJSS &
        AnimationDirectionDeclarationJSS &
        AnimationPlayStateDeclarationJSS &
        AnimationFillModeDeclarationJSS &
        AnimationDeclarationJSS &
        BackgroundSizeDeclarationJSS &
        WritingModeDeclarationJSS &
        WillChangeDeclarationJSS &
        WidowsDeclarationJSS &
        WhiteSpaceDeclarationJSS &
        VolumeDeclarationJSS &
        VerticalAlignDeclarationJSS &
        UserSelectDeclarationJSS &
        UnicodeBidiDeclarationJSS &
        TextWrapDeclarationJSS &
        TextUnderlinePositionDeclarationJSS &
        TextUnderlineOffsetDeclarationJSS &
        VoiceVolumeDeclarationJSS &
        VoiceStressDeclarationJSS &
        TextEmphasisColorDeclarationJSS &
        TextEmphasisSkipDeclarationJSS &
        TextEmphasisPositionDeclarationJSS &
        TextIndentDeclarationJSS &
        TextJustifyDeclarationJSS &
        TextGroupAlignDeclarationJSS &
        TextOrientationDeclarationJSS &
        OutlineColorDeclarationJSS &
        OutlineWidthDeclarationJSS &
        OutlineStyleDeclarationJSS &
        OutlineDeclarationJSS &
        VoiceRateDeclarationJSS &
        justifySelfDeclarationJSS &
        JustifyItemsDeclarationJSS &
        BorderImageSourceDeclarationJSS &
        UntypedPropsJSS
>

const isIntrinsic = (val: any) => typeof val === 'number' || typeof val === 'string'

const toCSSMap = (obj: RBStyle) => {
    // NEEDS improvement
    const js = style(obj)
    const objs = Object.keys(js).map((key) => [camelCaseToDash(key), (js as any)[key]])
    return Object.fromEntries(objs)
}

export const styleCSS__ = (obj: any) => {
    // NEEDS improvement
    return Object.keys(obj).reduce((acc, key) => {
        const serializerKey = key.replace(/-([a-z])/g, function (g) {
            return g[1].toUpperCase()
        })
        const serializer = (funcMap as any)('inline')[serializerKey]
        return serializer && !isIntrinsic((obj as any)[key])
            ? {
                  ...acc,
                  ...toCSSMap(serializer((obj as any)[key])),
              }
            : {
                  ...acc,
                  [key]: (obj as any)[key],
              }
    }, {})
}

/** A JSS plugin for Rosebox */
export const rbJSS = (): Plugin => {
    return {
        onProcessStyle: (style: JssStyle) => {
            return style ? styleCSS__(style) : style
        },
        onChangeValue: (value: any) => {
            return value ? serializeAtomicValue(value) : value
        },
    }
}

export const jssPreset = () => {
    const clientSideOnly = typeof window === 'undefined' ? [] : [vendorPrefixer()]
    const plugins = [functions(), global(), camelCase(), propsSort(), rbJSS()].concat(clientSideOnly)
    return {
        plugins,
    }
}
