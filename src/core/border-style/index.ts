import { GlobalCssKeyword, LineStyle, serializeAtomicValue } from '../shared'

export type BorderStyleCSSProp = 'border-style'

const serializeBorderSideStyle = (property: string) => (
  value: LineStyle | GlobalCssKeyword
) => ({
  [property]: value,
})

export const serializeBorderTopStyle = serializeBorderSideStyle(
  'borderTopStyle'
)
export const serializeBorderRightStyle = serializeBorderSideStyle(
  'borderRightStyle'
)
export const serializeBorderBottomStyle = serializeBorderSideStyle(
  'borderBottomStyle'
)
export const serializeBorderLeftStyle = serializeBorderSideStyle(
  'borderLeftStyle'
)

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderTopStyleDeclaration = {
  /**
   * Maps to CSS's **`border-top-style`** property
   * @category RBProperty
   * @formalSyntaxForValue <line-style>
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-radius
   */
  borderTopStyle: LineStyle | GlobalCssKeyword
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderRightStyleDeclaration = {
  /**
   * Maps to CSS's **`border-right-style`** property
   * @category RBProperty
   * @formalSyntaxForValue <line-style>
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-style
   */
  borderRightStyle: LineStyle | GlobalCssKeyword
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderBottomStyleDeclaration = {
  /**
   * Maps to CSS's **`border-bottom-style`** property
   * @category RBProperty
   * @formalSyntaxForValue <line-style>
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-style
   */
  borderBottomStyle: LineStyle | GlobalCssKeyword
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderLeftStyleDeclaration = {
  /**
   * Maps to CSS's **`border-left-style`** property
   * @category RBProperty
   * @formalSyntaxForValue <line-style>
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-style
   */
  borderLeftStyle: LineStyle | GlobalCssKeyword
}
/**
 * @hide
 */
type BorderStyle = LineStyle | [LineStyle, LineStyle, LineStyle, LineStyle]

export const serializeBorderStyle = (
  x: BorderStyle | GlobalCssKeyword
): {
  borderStyle: string
} => ({
  borderStyle: !Array.isArray(x)
    ? serializeAtomicValue(x)
    : (x as LineStyle[])
        .reduce((acc: any, item) => acc + ' ' + item, '')
        .trim(),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderStyleDeclaration = {
  /**
   * Maps to CSS's **`border-style`** property
   * @category RBProperty
   * @formalSyntaxForValue <line-style>{1,4}
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/css-backgrounds-3/#the-border-style
   */
  borderStyle: BorderStyle | GlobalCssKeyword
}
