import {
  GlobalCssKeyword,
  isGlobalCssKeyword,
  LengthPercentage,
  serializeAtomicValue,
  Calculation,
  ValueOrFunc,
} from '../shared'

type PaddingValue = LengthPercentage | Calculation

/** @hide */
type PaddingSidePropValue = PaddingValue | GlobalCssKeyword

const serializePaddingSide = (prop: string) => (
  value: PaddingValue
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
  paddingTop: PaddingSidePropValue
}

export type PaddingTopDeclarationJSS = {
  paddingTop: ValueOrFunc<PaddingSidePropValue>
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
  paddingRight: PaddingSidePropValue
}

export type PaddingRightDeclarationJSS = {
  paddingRight: ValueOrFunc<PaddingSidePropValue>
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
  paddingBottom: PaddingSidePropValue
}

export type PaddingBottomDeclarationJSS = {
  paddingBottom: ValueOrFunc<PaddingSidePropValue>
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
  paddingLeft: PaddingSidePropValue
}

export type PaddingLeftDeclarationJSS = {
  paddingLeft: ValueOrFunc<PaddingSidePropValue>
}

/** @hide */
type PaddingAxisPropValue = PaddingValue | [PaddingValue, PaddingValue] | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type PaddingXDeclaration = {
  /**
   * Maps to CSS's **`padding-left`** and **`padding-right`** properties.
   * If a pair (a tuple of two elements) is provided then the values in it
   * will be mapped to **`padding-left`** and **`padding-right`** respectively. Otherwise
   * if a single value of type `LengthPercentage` is provided then it will be used for both.
   * @category RBProperty
   */
  paddingX: PaddingAxisPropValue
}

export type PaddingXDeclarationJSS = {
  paddingX: ValueOrFunc<PaddingAxisPropValue>
}

/**
 * @category RBDeclarationTypeAlias
 */
export type PaddingYDeclaration = {
  /**
   * Maps to CSS's **`padding-top`** and **`padding-bottom`** properties.
   * If a pair (a tuple of two elements) is provided then the values in it
   * will be mapped to **`padding-top`** and **`padding-bottom`** respectively. Otherwise
   * if a single value of type `LengthPercentage` is provided then it will be used for both.
   * @category RBProperty
   */
  paddingY: PaddingAxisPropValue
}

export type PaddingYDeclarationJSS = {
  paddingY: ValueOrFunc<PaddingAxisPropValue>
}

type PaddingShorthand =
  | PaddingValue
  | [PaddingValue, PaddingValue]
  | [PaddingValue, PaddingValue, PaddingValue]
  | [PaddingValue, PaddingValue, PaddingValue, PaddingValue]

const serializeShorthandleValue = (value: PaddingShorthand): string =>
  !Array.isArray(value)
    ? serializeAtomicValue(value)
    : (value as PaddingValue[])
        .reduce((acc: any, item) => acc + ' ' + serializeAtomicValue(item), '')
        .trim()

export const serializePaddingX = (
  x: PaddingValue | [PaddingValue, PaddingValue] | GlobalCssKeyword
) => {
  const value = Array.isArray(x) ? x : [x, x]
  return {
    paddingLeft: serializeAtomicValue(value[0]),
    paddingRight: serializeAtomicValue(value[1]),
  }
}

export const serializePaddingY = (
  x: PaddingValue | [PaddingValue, PaddingValue] | GlobalCssKeyword
) => {
  const value = Array.isArray(x) ? x : [x, x]
  return {
    paddingTop: serializeAtomicValue(value[0]),
    paddingBottom: serializeAtomicValue(value[1]),
  }
}

const serializePaddingObject = (x: PaddingObject) => ({
  ...(x.top && {
    paddingTop: serializeAtomicValue(x.top),
  }),
  ...(x.right && {
    paddingRight: serializeAtomicValue(x.right),
  }),
  ...(x.bottom && {
    paddingBottom: serializeAtomicValue(x.bottom),
  }),
  ...(x.left && {
    paddingLeft: serializeAtomicValue(x.left),
  }),
})

const isPaddingObject = (x: any): x is PaddingObject =>
  x.hasOwnProperty('top') ||
  x.hasOwnProperty('right') ||
  x.hasOwnProperty('bottom') ||
  x.hasOwnProperty('left')

const serializeNonPaddingObject = (
  x:
    | PaddingValue
    | [PaddingValue, PaddingValue]
    | [PaddingValue, PaddingValue, PaddingValue]
    | [PaddingValue, PaddingValue, PaddingValue, PaddingValue]
    | GlobalCssKeyword
) => ({
  padding: isGlobalCssKeyword(x) ? x : serializeShorthandleValue(x),
})
export const serializePadding = (x: PaddingShorthand | GlobalCssKeyword) =>
  isPaddingObject(x) ? serializePaddingObject(x) : serializeNonPaddingObject(x)

type PaddingObject = {
  top?: PaddingValue
  right?: PaddingValue
  bottom?: PaddingValue
  left?: PaddingValue
}

/** @hide */
type PaddingPropValue = PaddingValue
| [PaddingValue, PaddingValue]
| [PaddingValue, PaddingValue, PaddingValue]
| [PaddingValue, PaddingValue, PaddingValue, PaddingValue]
| PaddingObject
| GlobalCssKeyword

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
  padding: PaddingPropValue
}

export type PaddingDeclarationJSS = {
  padding: ValueOrFunc<PaddingPropValue>
}
