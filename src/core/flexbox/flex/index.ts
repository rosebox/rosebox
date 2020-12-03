import { GlobalCssKeyword, ValueOrFunc } from '../../shared'
import { ShrinkGrow } from '../shared'
import { FlexBasis, serializeFlexBasisValue } from '../flex-basis'

/**
 * @hide
 */
type Flex = 'none' | [ShrinkGrow, ShrinkGrow, FlexBasis]

export const serializeFlex = (
  value: Flex | GlobalCssKeyword
): {
  flex: string
} => ({
  flex:
    typeof value === 'string'
      ? value
      : `${value[0]} ${value[1]} ${serializeFlexBasisValue(value[2])}`,
})

/** @hide */
type PropValue = Flex | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FlexDeclaration = {
  /**
   * Maps to CSS's **`flex`** property
   * @category RBProperty
   */
  flex: PropValue
}
export type FlexDeclarationJSS = {
  flex: ValueOrFunc<PropValue>
}
