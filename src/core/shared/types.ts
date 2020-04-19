import { BackgroundColorCSSProp } from "../background-color/internal"
import { BorderCSSProp } from "../border/internal"
import { BorderColorCSSProp } from "../border-color/internal"
import { BorderRadiusCSSProp } from "../border-radius/internal"
import { BorderStyleCSSProp } from "../border-style/internal"
import { BorderWidthCSSProp } from "../border-width/internal"
import { TopCSSProp, RightCSSProp, BottomCSSProp, LeftCSSProp } from "../box-offsets/internal"
import { BoxSizingCSSProp } from "../box-sizing/internal"
import { ColorCSSProp } from "../color/internal"
import { CursorCSSProp } from "../cursor/internal"
import { DisplayCSSProp } from "../display/internal"
import { FlexCSSProp } from "../flexbox/flex/internal"
import { FlexBasisCSSProp } from "../flexbox/flex-basis/internal"
import { FlexDirectionCSSProp } from "../flexbox/flex-direction/internal"
import { FlexGrowCSSProp } from "../flexbox/flex-grow/internal"
import { FlexShrinkCSSProp } from "../flexbox/flex-shrink/internal"
import { FlexWrapCSSProp } from "../flexbox/flex-wrap/internal"
import { OrderCSSProp } from "../flexbox/order/internal"
import { FontFamilyCSSProp } from "../font-family/internal"
import { FontSizeCSSProp } from "../font-size/internal"
import { FontWeightCSSProp } from "../font-weight/internal"
import { HeightCSSProp } from "../height/internal"
import { LetterSpacingCSSProp } from "../letter-spacing/internal"
import { LineHeightCSSProp } from "../line-height/internal"
import { MarginTopCSSProp, MarginRightCSSProp, MarginBottomCSSProp, MarginLeftCSSProp, MarginCSSProp } from "../margin/internal"
import { MaxHeightCSSProp } from "../max-height/internal"
import { MaxWidthCSSProp } from "../max-width/internal"
import { MinWidthCSSProp } from "../min-width/internal"
import { OpacityCSSProp } from "../opacity/internal"
import { OverflowXCSSProp, OverflowYCSSProp, OverflowCSSProp } from "../overflow/internal"
import { PaddingTopCSSProp, PaddingRightCSSProp, PaddingBottomCSSProp, PaddingCSSProp } from "../padding/internal"
import { PositionCSSProp } from "../position/internal"
import { TextAlignCSSProp } from "../text-align/internal"
import { TextDecorationCSSProp } from "../text-decoration/internal"
import { TextTransformCSSProp } from "../text-transform/internal"
import { VisibilityCSSProp } from "../visibility/internal"
import { WidthCSSProp } from "../width/internal"
import { ZIndexCSSProp } from "../z-index/internal"
import { TransitionPropertyCSSProp } from "../transition-property/internal"

export type LengthUnit =
  | 'em'
  | 'ex'
  | 'ch'
  | 'rem'
  | 'vw'
  | 'vh'
  | 'vmin'
  | 'vmax'
  | 'cm'
  | 'mm'
  | 'Q'
  | 'in'
  | 'pc'
  | 'pt'
  | 'px'

type TimeUnit = 's' | 'ms'

/**
*
* A type that maps to CSS's **`<time>`** type.
* @added 0.2.1
*/
export interface Time {
  __tag: 'Time'
  value: [number, TimeUnit]
}
/**
 *
 * A type that maps to CSS's **`<length>`** type.
 * @added 0.1.0
 */
export interface Length {
  __tag: 'Length'
  value: [number, LengthUnit]
}

/**
 * A type that maps to CSS's **`<percentage>`** type.
 * @added 0.1.0
 */
export interface Percentage {
  __tag: 'Percentage'
  value: number
}

export const globalCssKeywords = <const>['inherit', 'initial', 'unset']
/**
 * @global
 */
export type GlobalCssKeyword = typeof globalCssKeywords[number]

/**
 * @global
 */
export type LengthPercentage = Length | Percentage

/**
 * @global
 */
export type Width = LengthPercentage | 'auto'

/**
 * @global
 */
export type LineWidth = Length | 'thin' | 'medium' | 'thick'

/**
 * @global
 */
export type LineStyle =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'

/**
 *
 * A type that maps to CSS's **`<url>`** type.
 * @added 0.1.96
 */
export interface URL {
  __tag: 'URL'
  value: string
}

/** Type-guard */
export const isPercentageType = (value: any): value is Percentage =>
  value.__tag === 'Percentage'
/** Type-guard */
export const isLengthType = (value: any): value is Length =>
  value.__tag === 'Length'
/** Type-guard */
export const isWidthType = (value: any): value is Width =>
  isLengthType(value) || isPercentageType(value) || value === 'auto'
/** Type-guard */
export const isGlobalCssKeyword = (value: any): value is GlobalCssKeyword =>
  globalCssKeywords.includes(value)

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


export type AnimatableCSSProp = Exclude<
  CSSProp,
  | 'border-style'
  | 'box-sizing'
  | 'cursor'
  | 'display'
  | 'font-family'
  | 'flex-direction'
  | 'flex-wrap'
  | 'overflow-x'
  | 'overflow-y'
  | 'overflow'
  | 'position'
  | 'text-align'
  | 'text-transform'
  | 'transition-property'
>