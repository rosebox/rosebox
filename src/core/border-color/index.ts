import { Color, serializeColor } from '../color/internal'
import { GlobalCssKeyword, isGlobalCssKeyword } from '../shared/types'

/**
 * Creates a declaration object for the **`border-top-color`** property.
 * @category Declaration function
 * @formalSyntaxForValue <color>
 * @added 0.1.5
 * @implentationReference hhttps://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
 */
export const borderTopColor = (
  value: Color | GlobalCssKeyword
): { borderTopColor: string } => ({
  borderTopColor: isGlobalCssKeyword(value) ? value : serializeColor(value),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderTopColorDeclaration = {
  /**
   * Maps to CSS's **`border-top-color`** property
   * @category RBProperty
   * @formalSyntaxForValue <color>
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
   */
  borderTopColor: Color | GlobalCssKeyword
}

/**
 * Creates a declaration object for the **`border-right-color`** property.
 * @category Declaration function
 * @formalSyntaxForValue <color>
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
 */
export const borderRightColor = (
  value: Color | GlobalCssKeyword
): { borderRightColor: string } => ({
  borderRightColor: isGlobalCssKeyword(value) ? value : serializeColor(value),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderRightColorDeclaration = {
  /**
   * Maps to CSS's **`border-right-color`** property
   * @category RBProperty
   * @formalSyntaxForValue <color>
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
   */
  borderRightColor: Color | GlobalCssKeyword
}

/**
 * Creates a declaration object for the **`border-bottom-color`** property.
 * @category Declaration function
 * @formalSyntaxForValue <color>
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
 */
export const borderBottomColor = (
  value: Color | GlobalCssKeyword
): { borderBottomColor: string } => ({
  borderBottomColor: isGlobalCssKeyword(value) ? value : serializeColor(value),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderBottomColorDeclaration = {
  /**
   * Maps to CSS's **`border-bottom-color`** property
   * @category RBProperty
   * @formalSyntaxForValue <color>
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
   */
  borderBottomColor: Color | GlobalCssKeyword
}

/**
 * Creates a declaration object for the **`border-left-color`** property.
 * @category Declaration function
 * @formalSyntaxForValue <color>
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
 */
export const borderLeftColor = (
  value: Color | GlobalCssKeyword
): { borderLeftColor: string } => ({
  borderLeftColor: isGlobalCssKeyword(value) ? value : serializeColor(value),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderLeftColorDeclaration = {
  /**
   * Maps to CSS's **`border-left-color`** property
   * @category RBProperty
   * @formalSyntaxForValue <color>
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
   */
  borderLeftColor: Color | GlobalCssKeyword
}

type BorderColor =
  | Color
  | [Color]
  | [Color, Color]
  | [Color, Color, Color]
  | [Color, Color, Color, Color]

const serializeBorderColor = (value: BorderColor): string =>
  !Array.isArray(value)
    ? serializeColor(value)
    : (value as Color[])
        .reduce((acc: any, item) => acc + ' ' + serializeColor(item), '')
        .trim()

/**
 * Creates a declaration object for the **`border-color`** property.
 * @category Declaration function
 * @formalSyntaxForValue <color>{1,4}
 * @added 0.1.5
 * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
 */
export const borderColor = (
  value: BorderColor | GlobalCssKeyword
): { borderColor: string } => ({
  borderColor: isGlobalCssKeyword(value) ? value : serializeBorderColor(value),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderColorDeclaration = {
  /**
   * Maps to CSS's **`border-color`** property
   * @category RBProperty
   * @formalSyntaxForValue <color>{1,4}
   * @added 0.2.0
   * @implentationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-color
   */
  borderColor: BorderColor | GlobalCssKeyword
}
