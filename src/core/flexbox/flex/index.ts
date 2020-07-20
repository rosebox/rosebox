import { GlobalCssKeyword } from '../../shared'
import { ShrinkGrow } from '../shared'
import { FlexBasis, serializeFlexBasis } from '../flex-basis'

/**
 * @hide
 */
type Flex = 'none' | [FlexBasis, ShrinkGrow, ShrinkGrow]

export const serializeFlexValue = (value: Flex | GlobalCssKeyword): string =>
  typeof value === 'string'
    ? value
    : `${serializeFlexBasis(value[0])} ${value[1]} ${value[2]}`
/**
 * @category RBDeclarationTypeAlias
 */
export type FlexDeclaration = {
  /**
   * Maps to CSS's **`flex`** property
   * @category RBProperty
   */
  flex: Flex | GlobalCssKeyword
}
