const serializeValue = (value: string | string[]) =>
  !Array.isArray(value)
    ? value
    : value.reduce(
        (acc, item, idx) => acc + item + (idx === value.length - 1 ? '' : ', '),
        ''
      )

/**
 * Creates a declaration object for the **`font-family`** property.
 * @category Declaration function
 * @formalSyntax auto | <integer>
 * @added 0.1.96
 */
export const fontFamily = (
  value: string | string[]
): { fontFamily: string } => ({
  fontFamily: serializeValue(value),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type FontFamilyDeclaration = {
  /**
   * Maps to CSS's **`font-family`** property
   * @category RBProperty
   * @formalSyntaxForValue auto | <integer>
   * @added 0.2.0
   */
  fontFamily: string
}
