import { CustomIdent, GlobalCssKeyword, serializeAtomicValue, ValueOrFunc } from '../shared'

type AnimateableFeature = 'scroll-position' | 'contents' | CustomIdent

const serializeMultiComma = <A>(fn: Function, arr: A[]): string =>
  arr
    .reduce(
      (acc: any, item, idx) =>
        acc + fn(item) + (idx === arr.length - 1 ? '' : ', '),
      ''
    )
    .trim()


const serializeArrayValue = (x: ('auto' | AnimateableFeature)[]) =>
  serializeMultiComma(serializeAtomicValue, x)

/**
 * @hide
 */
type WillChangeValue = 'auto' | AnimateableFeature | AnimateableFeature[]

export const serializeWillChange = (
  x: WillChangeValue | GlobalCssKeyword
): { willChange: string } => ({
  willChange:
    typeof x === 'string'
      ? x
      : !Array.isArray(x)
      ? serializeAtomicValue(x)
      : serializeArrayValue(x),
})

/** @hide */
type WillChangePropValue = WillChangeValue | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type WillChangeDeclaration = {
  /**
   * Maps to CSS's **`will-change`** property
   * @category RBProperty
   */
  willChange: WillChangePropValue
}

export type WillChangeDeclarationJSS = {
  willChange: ValueOrFunc<WillChangePropValue>
}
