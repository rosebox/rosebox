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
import { TransitionDelayDeclaration } from './core/transition-delay'

export * from './core/shared/value-constructors'
export * from './core/color'
export * from './react'

export type RoseboxProperties = Partial<
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
  TransitionPropertyDeclaration &
  TransitionDelayDeclaration
>


export const style = (obj: RoseboxProperties): CSSProperties => {
  return Object.keys(obj).reduce((acc, key) => {
    return Object.assign({}, acc, {
      [key]: (funcMap as any)[key]((obj as any)[key]),
    })
  }, {}) as CSSProperties
}
