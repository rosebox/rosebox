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
import { ZIndexCSSProp } from '../z-index'
import { TransitionPropertyCSSProp } from '../transition-property'

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

export const isTime = (value: any): value is Time => value.__tag === 'Time'

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
 * A type that maps to CSS's **`<url>`** type.
 * @added 0.1.96
 */
export interface URL {
  __tag: 'URL'
  value: string
}

/**
 * A type that maps to CSS's **`<uri>`** type.
 * @added 0.1.96
 */
export interface URI {
  __tag: 'URI'
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
  | 'transform'
>

/**
 *
 * A type that maps to CSS's **`<custom-ident>`** .
 * @added 0.2.1
 */
export interface CustomIdent {
  __tag: 'CustomIdent'
  value: string
}
/**


interface CalcNumberProduct {
  __tag: 'CalcNumberProduct',
  value: [CalcNumberValue, CalcNumberValue]
}

interface CalcNumberSum {
  __tag: 'CalcNumberSum',
  opeartion: 'addition' | 'substraction',
  value: [CalcNumberProduct, CalcNumberProduct]
}

type CalcNumberValue = number | CalcNumberSum
*/
