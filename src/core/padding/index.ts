import {
  GlobalCssKeyword,
  isLengthType,
  isPercentageType,
  isGlobalCssKeyword,
  LengthPercentage,
} from '../shared'
import { serializeLength, serializePercentage } from '../shared'

const serializeAtomicValue = (
  value: LengthPercentage | GlobalCssKeyword
): string =>
  isLengthType(value)
    ? serializeLength(value)
    : isPercentageType(value)
    ? serializePercentage(value)
    : value

const serializePaddingSide = (prop: string) => (
  value: LengthPercentage | GlobalCssKeyword
) => ({
  [prop]: serializeAtomicValue(value),
})

export const serializePaddingTopValue = serializePaddingSide('paddingTop')

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
  paddingTop: LengthPercentage | GlobalCssKeyword
}

export const serializePaddingRightValue = serializePaddingSide('paddingRight')

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
  paddingRight: LengthPercentage | GlobalCssKeyword
}

export const serializePaddingBottomValue = serializePaddingSide('paddingBottom')

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
  paddingBottom: LengthPercentage | GlobalCssKeyword
}

export const serializePaddingLeftValue = serializePaddingSide('paddingLeft')

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
  paddingLeft: LengthPercentage | GlobalCssKeyword
}

/**
 * @category RBDeclarationTypeAlias
 */
export type PaddingXDeclaration = {
  /**
   * Maps to CSS's **`padding-left`** and `padding-right` properties
   * @category RBProperty
   */
  paddingX:
    | LengthPercentage
    | [LengthPercentage, LengthPercentage]
    | GlobalCssKeyword
}

type PaddingShorthand =
  | LengthPercentage
  | [LengthPercentage, LengthPercentage, LengthPercentage, LengthPercentage]

const serializeShorthandleValue = (value: PaddingShorthand): string =>
  isLengthType(value)
    ? serializeLength(value)
    : isPercentageType(value)
    ? serializePercentage(value)
    : isGlobalCssKeyword(value)
    ? value
    : (value as LengthPercentage[])
        .reduce((acc: any, item) => acc + ' ' + serializeAtomicValue(item), '')
        .trim()

export const serializePaddingX = (
  x: LengthPercentage | [LengthPercentage, LengthPercentage] | GlobalCssKeyword
) => {
  const value = Array.isArray(x) ? x : [x, x]
  return {
    paddingLeft: serializeAtomicValue(value[0]),
    paddingRight: serializeAtomicValue(value[1]),
  }
}

export const serializePaddingValue = (
  value: PaddingShorthand | GlobalCssKeyword
): { padding: string } => ({
  padding: isGlobalCssKeyword(value) ? value : serializeShorthandleValue(value),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type PaddingDeclaration = {
  /**
   * Maps to CSS's **`padding`** property.
   * @category RBProperty
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#padding-physical
   */
  padding:
    | LengthPercentage
    | [LengthPercentage, LengthPercentage, LengthPercentage, LengthPercentage]
    | GlobalCssKeyword
}
