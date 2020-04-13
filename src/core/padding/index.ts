import {
  Length,
  Percentage,
  GlobalCssKeyword,
  isLengthType,
  isPercentageType,
  isGlobalCssKeyword,
} from '../shared/types'
import { serializeLength, serializePercentage } from '../shared/serializers'

const serializeAtomicValue = (
  value: Length | Percentage | GlobalCssKeyword
): string =>
  isLengthType(value)
    ? serializeLength(value)
    : isPercentageType(value)
    ? serializePercentage(value)
    : value

/**
 * Creates a declaration object for the `padding-top` property
 * @category Declaration function
 * @formalSyntax <length-percentage>
 * @added 0.1.4
 * @implentationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#padding-physical
 */
export const paddingTop = (
  value: Length | Percentage | GlobalCssKeyword
): { paddingTop: string } => ({
  paddingTop: serializeAtomicValue(value),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type PaddingTopDeclaration = {
  /**
   * Maps to CSS's **`padding-top`** property
   * @category RBProperty
   * @formalSyntaxForValue <length-percentage>
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#padding-physical
   */
  paddingTop: Length | Percentage | GlobalCssKeyword
}

/**
 * Creates a declaration object for the `padding-right` property
 * @category Declaration function
 * @formalSyntax <length-percentage>
 * @added 0.1.4
 * @implentationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#padding-physical
 */
export const paddingRight = (
  value: Length | Percentage | GlobalCssKeyword
): { paddingRight: string } => ({
  paddingRight: serializeAtomicValue(value),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type PaddingRightDeclaration = {
  /**
   * Maps to CSS's **`padding-right`** property
   * @category RBProperty
   * @formalSyntaxForValue <length-percentage>
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#padding-physical
   */
  paddingRight: Length | Percentage | GlobalCssKeyword
}

/**
 * Creates a declaration object for the `padding-bottom` property
 * @category Declaration function
 * @formalSyntax <length-percentage>
 * @added 0.1.4
 * @implentationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#padding-physical
 */
export const paddingBottom = (
  value: Length | Percentage | GlobalCssKeyword
): { paddingBottom: string } => ({
  paddingBottom: serializeAtomicValue(value),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type PaddingBottomDeclaration = {
  /**
   * Maps to CSS's **`padding-bottom`** property
   * @category RBProperty
   * @formalSyntaxForValue <length-percentage>
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#padding-physical
   */
  paddingBottom: Length | Percentage | GlobalCssKeyword
}

/**
 * Creates a declaration object for the `padding-left` property
 * @category Declaration function
 * @formalSyntax <length-percentage>
 * @added 0.1.4
 * @implentationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#padding-physical
 */
export const paddingLeft = (
  value: Length | Percentage | GlobalCssKeyword
): { paddingLeft: string } => ({
  paddingLeft: serializeAtomicValue(value),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type PaddingLeftDeclaration = {
  /**
   * Maps to CSS's **`padding-left`** property
   * @category RBProperty
   * @formalSyntaxForValue <length-percentage>
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#padding-physical
   */
  paddingLeft: Length | Percentage | GlobalCssKeyword
}

type PaddingShorthand =
  | Length
  | Percentage
  | [Length | Percentage]
  | [Length | Percentage, Length | Percentage]
  | [Length | Percentage, Length | Percentage, Length | Percentage]
  | [
      Length | Percentage,
      Length | Percentage,
      Length | Percentage,
      Length | Percentage
    ]

const serializeShorthandleValue = (value: PaddingShorthand): string =>
  isLengthType(value)
    ? serializeLength(value)
    : isPercentageType(value)
    ? serializePercentage(value)
    : isGlobalCssKeyword(value)
    ? value
    : (value as (Length | Percentage)[])
        .reduce((acc: any, item) => acc + ' ' + serializeAtomicValue(item), '')
        .trim()

/**
 * Creates a declaration object for the **`padding`** shorthand property.
 * @category Declaration function
 * @formalSyntax <padding-top’>{1,4}
 * @added 0.1.4
 * @implentationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#padding-physical
 */
export const padding = (
  value: PaddingShorthand | GlobalCssKeyword
): { padding: string } => ({
  padding: isGlobalCssKeyword(value) ? value : serializeShorthandleValue(value),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type PaddingDeclaration = {
  /**
   * Maps to CSS's **`padding`** property
   * @category RBProperty
   * @formalSyntaxForValue <padding-top’>{1,4}
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#padding-physical
   */
  padding: PaddingShorthand | GlobalCssKeyword
}
