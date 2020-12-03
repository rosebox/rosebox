import {
  GlobalCssKeyword,
  isGlobalCssKeyword,
  LengthPercentage,
  Calculation,
  serializeAtomicValue,
  PropType,
} from '../shared'

type MarginValue = LengthPercentage | Calculation | 'auto'

const serializeMarginSide = (prop: string) => (
  value: LengthPercentage | 'auto' | Calculation | GlobalCssKeyword
) => ({
  [prop]: serializeAtomicValue(value),
})

export const serializeMarginTopValue = (type: PropType) =>
  serializeMarginSide(type === 'inline' ? 'marginTop' : 'margin-top')

export type MarginTopDeclaration = {
  /**
   * Maps to CSS's **`margin-top`** property
   * @category RBProperty
   * @formalSyntaxForValue <length-percentage> | auto
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#margin-physical
   */
  marginTop: MarginValue | GlobalCssKeyword
}

export const serializeMarginRightValue = (type: PropType) =>
serializeMarginSide(type === 'inline' ? 'marginRight' : 'margin-right')

export type MarginRightDeclaration = {
  /**
   * Maps to CSS's **`margin-right`** property
   * @category RBProperty
   * @formalSyntaxForValue <length-percentage> | auto
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#margin-physical
   */
  marginRight: MarginValue | GlobalCssKeyword
}

export const serializeMarginBottomValue = (type: PropType) =>
serializeMarginSide(type === 'inline' ? 'marginBottom' : 'margin-bottom')

export type MarginBottomDeclaration = {
  /**
   * Maps to CSS's **`margin-bottom`** property
   * @category RBProperty
   * @formalSyntaxForValue <length-percentage> | auto
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#margin-physical
   */
  marginBottom: MarginValue | GlobalCssKeyword
}

export const serializeMarginLeftValue = (type: PropType) =>
serializeMarginSide(type === 'inline' ? 'marginLeft' : 'margin-left')

export type MarginLeftDeclaration = {
  /**
   * Maps to CSS's **`margin-left`** property
   * @category RBProperty
   * @formalSyntaxForValue <length-percentage> | auto
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/2018/WD-css-box-3-20181218/#margin-physical
   */
  marginLeft: MarginValue | GlobalCssKeyword
}

type MarginObject = {
  top?: MarginValue
  right?: MarginValue
  bottom?: MarginValue
  left?: MarginValue
}

/**
 * @hide
 */
type Margin =
  | MarginValue
  | [MarginValue, MarginValue]
  | [MarginValue, MarginValue, MarginValue]
  | [MarginValue, MarginValue, MarginValue, MarginValue]
  | MarginObject
  | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type MarginXDeclaration = {
  /**
   * Maps to CSS's **`margin-left`** and **`margin-right`** properties.
   * If a pair (a tuple of two elements) is provided then the values in it
   * will be mapped to **`margin-left`** and `margin-right` respectively. Otherwise
   * the provided value will be used for both.
   * @category RBProperty
   */
  marginX: MarginValue | [MarginValue, MarginValue] | GlobalCssKeyword
}

export const serializeMarginX = (
  x: MarginValue | [MarginValue, MarginValue] | GlobalCssKeyword
) => {
  const value = Array.isArray(x) ? x : [x, x]
  return {
    marginLeft: serializeAtomicValue(value[0]),
    marginRight: serializeAtomicValue(value[1]),
  }
}

/**
 * @category RBDeclarationTypeAlias
 */
export type MarginYDeclaration = {
  /**
   * Maps to CSS's **`margin-top`** and **`margin-bottom`** properties.
   * If a pair (a tuple of two elements) is provided then the values in it
   * will be mapped to **`margin-top`** and `margin-bottom` respectively. Otherwise
   * the provided value will be used for both.
   * @category RBProperty
   */
  marginY: MarginValue | [MarginValue, MarginValue] | GlobalCssKeyword
}

export const serializeMarginY = (
  x: MarginValue | [MarginValue, MarginValue] | GlobalCssKeyword
) => {
  const value = Array.isArray(x) ? x : [x, x]
  return {
    marginTop: serializeAtomicValue(value[0]),
    marginBottom: serializeAtomicValue(value[1]),
  }
}

const serializeShorthandleValue = (
  x:
    | MarginValue
    | [MarginValue, MarginValue]
    | [MarginValue, MarginValue, MarginValue]
    | [MarginValue, MarginValue, MarginValue, MarginValue]
): string => {
  return Array.isArray(x)
    ? (x as MarginValue[])
        .reduce((acc: any, item) => acc + ' ' + serializeAtomicValue(item), '')
        .trim()
    : serializeAtomicValue(x)
}

const serializeMarginObject = (x: MarginObject) => ({
  ...(x.top && {
    marginTop: serializeAtomicValue(x.top),
  }),
  ...(x.right && {
    marginRight: serializeAtomicValue(x.right),
  }),
  ...(x.bottom && {
    marginBottom: serializeAtomicValue(x.bottom),
  }),
  ...(x.left && {
    marginLeft: serializeAtomicValue(x.left),
  }),
})

const serializeNonMarginObject = (x: Exclude<Margin, MarginObject>) => ({
  margin: isGlobalCssKeyword(x) ? x : serializeShorthandleValue(x),
})

const isMarginObject = (x: Margin): x is MarginObject =>
  x.hasOwnProperty('top') ||
  x.hasOwnProperty('right') ||
  x.hasOwnProperty('bottom') ||
  x.hasOwnProperty('left')

export const serializeMargin = (value: Margin) =>
  isMarginObject(value)
    ? serializeMarginObject(value)
    : serializeNonMarginObject(value)

/**
 * @category RBDeclarationTypeAlias
 */
export type MarginDeclaration = {
  /**
   * Maps to CSS's **`margin`** property
   * @category RBProperty
   */
  margin: Margin
}
