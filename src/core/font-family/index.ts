import { PropType, ValueOrFunc } from "../shared"

const serializeValue = (value: string | string[]) =>
  !Array.isArray(value)
    ? value
    : value.reduce(
        (acc, item, idx) => acc + item + (idx === value.length - 1 ? '' : ', '),
        ''
      )

export const serializeFontFamily = (type: PropType) => (
  value: string | string[]
) => ({
  [type === 'inline' ? 'fontFamily' : 'font-family']: serializeValue(value),
})

/** @hide */
type PropValue = string | string[]

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
  fontFamily: PropValue
}
export type FontFamilyDeclarationJSS = {
  fontFamily: ValueOrFunc<PropValue>
}
