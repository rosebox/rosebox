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
} from './core/box-offsets/internal'
import { BoxSizingDeclaration } from './core/box-sizing/internal'
import { ColorDeclaration } from './core/color/internal'
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
import { DisplayDeclaration } from './core/display/internal'
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
import {
  TextDecorationDeclaration,
} from './core/text-decoration'
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
import {
  FlexDirectionDeclaration,
} from './core/flexbox/flex-direction'
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
} from './core/margin'
import {
  PaddingTopDeclaration,
  PaddingRightDeclaration,
  PaddingBottomDeclaration,
  PaddingLeftDeclaration,
  PaddingDeclaration,
} from './core/padding'
import { TextAlignDeclaration } from './core/text-align'
import { OrderDeclaration } from './core/flexbox/order/internal'
import { TransitionPropertyDeclaration } from './core/transition-property/internal'

export * from './core/shared/value-constructors'
export * from './core/background-color'
export * from './core/box-offsets'
export * from './core/box-sizing'
export * from './core/color'
export * from './core/display'
export * from './core/flexbox'
export * from './core/font-size'
export * from './core/font-weight'
export * from './core/height'
export * from './core/margin'
export * from './core/padding'
export * from './core/max-height'
export * from './core/max-width'
export * from './core/min-height'
export * from './core/min-width'
export * from './core/opacity'
export * from './core/position'
export * from './core/visibility'
export * from './core/width'
export * from './core/border'
export * from './core/border-color'
export * from './core/border-radius'
export * from './core/border-style'
export * from './core/border-width'
export * from './core/letter-spacing'
export * from './core/line-height'
export * from './core/overflow'
export * from './core/text-align'
export * from './core/text-decoration'
export * from './core/text-transform'
export * from './core/z-index'
export * from './core/font-family'
export * from './core/cursor'
export * from './react'

export type __RoseboxProperties__ = Partial<
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
  TextDecorationDeclaration &
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
  PaddingTopDeclaration &
  PaddingRightDeclaration &
  PaddingBottomDeclaration &
  PaddingLeftDeclaration &
  PaddingDeclaration &
  TextAlignDeclaration &
  OrderDeclaration &
  TransitionPropertyDeclaration
>
export type RoseboxProperties = Partial<
  Omit<React.CSSProperties, keyof __RoseboxProperties__> & __RoseboxProperties__>


export const style = (obj: RoseboxProperties): CSSProperties => {
  return Object.keys(obj).reduce((acc, key) => {
    return Object.assign({}, acc, {
      [key]: (funcMap as any)[key]((obj as any)[key])[key],
    })
  }, {}) as CSSProperties
}
