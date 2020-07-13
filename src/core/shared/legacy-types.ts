import { BackgroundColorCSSProp } from '../background-color'
import { BorderCSSProp } from '../border'
import { BorderColorCSSProp } from '../border-color'
import { BorderRadiusCSSProp } from '../border-radius'
import { BorderStyleCSSProp } from '../border-style'
import { BorderWidthCSSProp } from '../border-width'
import {
  TopCSSProp,
  RightCSSProp,
  BottomCSSProp,
  LeftCSSProp,
} from '../box-offsets'
import { BoxSizingCSSProp } from '../box-sizing'
import { ColorCSSProp } from '../color'
import { CursorCSSProp } from '../cursor'
import { DisplayCSSProp } from '../display'
import { FlexCSSProp } from '../flexbox/flex'
import { FlexBasisCSSProp } from '../flexbox/flex-basis'
import { FlexDirectionCSSProp } from '../flexbox/flex-direction'
import { FlexGrowCSSProp } from '../flexbox/flex-grow'
import { FlexShrinkCSSProp } from '../flexbox/flex-shrink'
import { FlexWrapCSSProp } from '../flexbox/flex-wrap'
import { OrderCSSProp } from '../flexbox/order'
import { FontFamilyCSSProp } from '../font-family'
import { FontSizeCSSProp } from '../font-size'
import { FontWeightCSSProp } from '../font-weight'
import { HeightCSSProp } from '../height'
import { LetterSpacingCSSProp } from '../letter-spacing'
import { LineHeightCSSProp } from '../line-height'
import {
  MarginTopCSSProp,
  MarginRightCSSProp,
  MarginBottomCSSProp,
  MarginLeftCSSProp,
  MarginCSSProp,
} from '../margin'
import { MaxHeightCSSProp } from '../max-height'
import { MaxWidthCSSProp } from '../max-width'
import { MinWidthCSSProp } from '../min-width'
import { OpacityCSSProp } from '../opacity'
import {
  OverflowXCSSProp,
  OverflowYCSSProp,
  OverflowCSSProp,
} from '../overflow'
import {
  PaddingTopCSSProp,
  PaddingRightCSSProp,
  PaddingBottomCSSProp,
  PaddingCSSProp,
} from '../padding'
import { PositionCSSProp } from '../position'
import { TextAlignCSSProp } from '../text-align'
import { TextDecorationCSSProp } from '../text-decoration'
import { TextTransformCSSProp } from '../text-transform'
import { VisibilityCSSProp } from '../visibility'
import { WidthCSSProp } from '../width'
import { ZIndexCSSProp } from '../z-index/index'
import { TransitionPropertyCSSProp } from '../transition-property'

export type CSSProp =
  | BackgroundColorCSSProp
  | BorderCSSProp
  | BorderColorCSSProp
  | BorderRadiusCSSProp
  | BorderStyleCSSProp
  | BorderWidthCSSProp
  | TopCSSProp
  | RightCSSProp
  | BottomCSSProp
  | LeftCSSProp
  | BoxSizingCSSProp
  | ColorCSSProp
  | CursorCSSProp
  | DisplayCSSProp
  | FlexCSSProp
  | FlexBasisCSSProp
  | FlexDirectionCSSProp
  | FlexGrowCSSProp
  | FlexShrinkCSSProp
  | FlexWrapCSSProp
  | OrderCSSProp
  | FontFamilyCSSProp
  | FontSizeCSSProp
  | FontWeightCSSProp
  | HeightCSSProp
  | LetterSpacingCSSProp
  | LineHeightCSSProp
  | MarginTopCSSProp
  | MarginRightCSSProp
  | MarginBottomCSSProp
  | MarginLeftCSSProp
  | MarginCSSProp
  | MaxHeightCSSProp
  | MaxWidthCSSProp
  | MaxHeightCSSProp
  | MinWidthCSSProp
  | OpacityCSSProp
  | OverflowXCSSProp
  | OverflowYCSSProp
  | OverflowCSSProp
  | PaddingTopCSSProp
  | PaddingRightCSSProp
  | PaddingBottomCSSProp
  | PaddingCSSProp
  | PositionCSSProp
  | TextAlignCSSProp
  | TextDecorationCSSProp
  | TextTransformCSSProp
  | VisibilityCSSProp
  | WidthCSSProp
  | ZIndexCSSProp
  | TransitionPropertyCSSProp

export type AnimatableCSSProp = string
