import { GlobalCssKeyword } from '../shared/types'

export type DisplayCSSProp = 'display'

/**
 * @skip
 */
type DisplayInsideOutsideDoubleBar =
  | 'block'
  | 'inline'
  | 'run-in'
  | 'flow'
  | 'flow-root'
  | 'table'
  | 'flex'
  | 'grid'
  | 'ruby'
  | 'block flow'
  | 'block flow-root'
  | 'block table'
  | 'block flex'
  | 'block grid'
  | 'block ruby'
  | 'flow block'
  | 'flow-root block'
  | 'table block'
  | 'flex block'
  | 'grid block'
  | 'ruby block'
  | 'inline flow'
  | 'inline flow-root'
  | 'inline table'
  | 'inline flex'
  | 'inline grid'
  | 'inline ruby'
  | 'flow inline'
  | 'flow-root inline'
  | 'table inline'
  | 'flex inline'
  | 'grid inline'
  | 'ruby inline'
  | 'run-in flow'
  | 'run-in flow-root'
  | 'run-in table'
  | 'run-in flex'
  | 'run-in grid'
  | 'run-in ruby'
  | 'flow run-in'
  | 'flow-root run-in'
  | 'table run-in'
  | 'flex run-in'
  | 'grid run-in'
  | 'ruby run-in'

/**
 * @experimental
 */
export const disBlock = { display: 'block' } as const
/**
 * @experimental
 */
export const disInline = { display: 'inline' } as const
/**
 * @experimental
 */
export const disRunIn = { display: 'run-in' } as const
/**
 * @experimental
 */
export const disFlow = { display: 'flow' } as const
/**
 * @experimental
 */
export const disFlowRoot = { display: 'flow-root' } as const
/**
 * @experimental
 */
export const disTable = { display: 'table' } as const
/**
 * @experimental
 */
export const disFlex = { display: 'flex' } as const
/**
 * @experimental
 */
export const disGrid = { display: 'grid' } as const
/**
 * @experimental
 */
export const disRuby = { display: 'ruby' } as const

/**
 * @skip
 */
type DisplayListItem =
  | 'list-item'
  | 'list-item flow'
  | 'flow list-item'
  | 'list-item flow-root'
  | 'flow-root list-item'
  | 'list-item block'
  | 'block list-item'
  | 'list-item inline'
  | 'inline list-item'
  | 'list-item run-in'
  | 'run-ine list-item'
  | 'list-item flow block'
  | 'list-item block flow'
  | 'block flow list-item'
  | 'block list-item flow'
  | 'flow list-item block'
  | 'flow block list-item'
  | 'list-item flow inline'
  | 'list-item inline flow'
  | 'inline flow list-item'
  | 'inline list-item flow'
  | 'flow inline list-item'
  | 'flow list-item inline'
  | 'list-item flow run-in'
  | 'list-item run-in flow'
  | 'run-in flow list-item'
  | 'run-in list-item flow'
  | 'flow run-in list-item'
  | 'flow list-item run-in'
  | 'list-item flow-root block'
  | 'list-item block flow-root'
  | 'block flow-root list-item'
  | 'block list-item flow-root'
  | 'flow-root block list-item'
  | 'flow-root list-item block'
  | 'list-item flow-root inline'
  | 'list-item inline flow-root'
  | 'inline flow-root list-item'
  | 'inline list-item flow-root'
  | 'flow-root inline list-item'
  | 'flow-root list-item inline'
  | 'list-item flow-root run-in'
  | 'list-item run-in flow-root'
  | 'run-in flow-root list-item'
  | 'run-in list-item flow-root'
  | 'flow-root run-in list-item'
  | 'flow-root list-item run-in'

/**
 * @experimental
 */
export const disListItem = { display: 'list-item' } as const

/**
 * @skip
 */
type DisplayInternal =
  | 'table-row-group'
  | 'table-header-group'
  | 'table-footer-group'
  | 'table-row'
  | 'table-cell'
  | 'table-column-group'
  | 'table-column'
  | 'table-caption'
  | 'ruby-base'
  | 'ruby-text'
  | 'ruby-base-container'
  | 'ruby-text-container'

/**
 * @skip
 */
type DisplayBox = 'contents' | 'none'

/**
 * @skip
 */
type DisplayLegacy =
  | 'inline-block'
  | 'inline-table'
  | 'inline-flex'
  | 'inline-grid'

/**
 * @experimental
 */
export const disInlineBlock = { display: 'inline-block' } as const
/**
 * @experimental
 */
export const disInlineTable = { display: 'inline-table' } as const
/**
 * @experimental
 */
export const disInlineFlex = { display: 'inline-flex' } as const
/**
 * @experimental
 */
export const disInlineGrid = { display: 'inline-grid' } as const

/**
 * Formal syntax:
 * [ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>
 */
export type DisplayValue =
  | DisplayInsideOutsideDoubleBar
  | DisplayListItem
  | DisplayLegacy
  | DisplayInternal
  | DisplayBox

export const serializeDisplayValue = (value: DisplayValue | GlobalCssKeyword) =>
  value

/**
 * @category RBDeclarationTypeAlias
 */
export type DisplayDeclaration = {
  /**
   * Maps to CSS's **`display`** property
   * @category RBProperty
   * @formalSyntaxForValue [ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/2019/CR-css-display-3-20190711/
   */
  display: DisplayValue | GlobalCssKeyword
}
