import {
  GlobalCssKeyword,
  isGlobalCssKeyword,
  LengthPercentage,
  serializeAtomicValue,
} from '../shared'
import { serializeLengthPercentage } from '../shared'

export type BorderRadiusCSSProp = 'border-radius'

/**
 * @hide
 */
export type BorderCornerRadius =
  | LengthPercentage
  | [LengthPercentage, LengthPercentage]

const serializeCornerRadius = (property: string) => (
  x: BorderCornerRadius | GlobalCssKeyword
) => ({
  [property]: !Array.isArray(x)
    ? serializeAtomicValue(x)
    : x
        .reduce((acc, item) => acc + ' ' + serializeAtomicValue(item), '')
        .trim(),
})

export const serializeBorderTopRightRadius = serializeCornerRadius(
  'borderTopRightRadius'
)
export const serializeBorderBottomRightRadius = serializeCornerRadius(
  'borderBottomRightRadius'
)
export const serializeBorderBottomLeftRadius = serializeCornerRadius(
  'borderBottomLeftRadius'
)
export const serializeBorderTopLeftRadius = serializeCornerRadius(
  'borderTopLeftRadius'
)

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderTopRightRadiusDeclaration = {
  /**
   * Maps to CSS's **`border-top-right-radius`** property
   * @category RBProperty
   * @formalSyntaxForValue <length-percentage>{1,2}
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-radius
   */
  borderTopRightRadius: BorderCornerRadius | GlobalCssKeyword
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderBottomRightRadiusDeclaration = {
  /**
   * Maps to CSS's **`border-bottom-right-radius`** property
   * @category RBProperty
   * @formalSyntaxForValue <length-percentage>{1,2}
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-radius
   */
  borderBottomRightRadius: BorderCornerRadius | GlobalCssKeyword
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderBottomLeftRadiusDeclaration = {
  /**
   * Maps to CSS's **`border-bottom-left-radius`** property
   * @category RBProperty
   * @formalSyntaxForValue <length-percentage>{1,2}
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-radius
   */
  borderBottomLeftRadius: BorderCornerRadius | GlobalCssKeyword
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderTopLeftRadiusDeclaration = {
  /**
   * Maps to CSS's **`border-top-left-radius`** property
   * @category RBProperty
   * @formalSyntaxForValue <length-percentage>{1,2}
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-radius
   */
  borderTopLeftRadius: BorderCornerRadius | GlobalCssKeyword
}

type RadiusTuple =
  | [LengthPercentage]
  | [LengthPercentage, LengthPercentage]
  | [LengthPercentage, LengthPercentage, LengthPercentage]
  | [LengthPercentage, LengthPercentage, LengthPercentage, LengthPercentage]

type OneRadius = LengthPercentage | RadiusTuple

type TwoRadius = [RadiusTuple, RadiusTuple]

const serializRadiusTuple = (value: RadiusTuple): string =>
  (value as LengthPercentage[])
    .reduce((acc: any, item) => acc + ' ' + serializeLengthPercentage(item), '')
    .trim()

const serializeTwoRadius = (value: TwoRadius): string =>
  (value as RadiusTuple[])
    .reduce(
      (acc: any, item, idx: number) =>
        idx === value.length - 1
          ? acc + serializRadiusTuple(item)
          : acc + serializRadiusTuple(item) + ' / ',
      ''
    )
    .trim()

export const serializeBorderRadius = (
  value: OneRadius | TwoRadius | GlobalCssKeyword
): { borderRadius: string } => ({
  borderRadius: isGlobalCssKeyword(value)
    ? value
    : !Array.isArray(value)
    ? serializeLengthPercentage(value)
    : !Array.isArray(value[0])
    ? serializRadiusTuple(value as RadiusTuple)
    : serializeTwoRadius(value as TwoRadius),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderRadiusDeclaration = {
  /**
   * Maps to CSS's **`border-radius`** property
   * @category RBProperty
   * @formalSyntaxForValue <length-percentage>{1,4} [ / <length-percentage>{1,4} ]?
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-radius
   */
  borderRadius: OneRadius | TwoRadius | GlobalCssKeyword
}
