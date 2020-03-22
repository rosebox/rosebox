import { GlobalCssKeyword } from '../shared/types'

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
export const dsBlock = { display: 'block' } as const
/**
 * @experimental
 */
export const dsInline = { display: 'inline' } as const
/**
 * @experimental
 */
export const dsRunIn = { display: 'run-in' } as const
/**
 * @experimental
 */
export const dsFlow = { display: 'flow' } as const
/**
 * @experimental
 */
export const dsFlowRoot = { display: 'flow-root' } as const
/**
 * @experimental
 */
export const table = { display: 'table' } as const
/**
 * @experimental
 */
export const dsFlex = { display: 'flex' } as const
/**
 * @experimental
 */
export const dsGrid = { display: 'grid' } as const
/**
 * @experimental
 */
export const dsRuby = { display: 'ruby' } as const

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
export const dsListItem = { display: 'list-item' } as const

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
 * @experimental
 */
export const dsContents = { display: 'contents' } as const
/**
 * @experimental
 */
export const dsNone = { display: 'none' } as const

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
export const dsInlineBlock = { display: 'inline-block' } as const
/**
 * @experimental
 */
export const dsInlineTable = { display: 'inline-table' } as const
/**
 * @experimental
 */
export const dsInlineFlex = { display: 'inline-flex' } as const
/**
 * @experimental
 */
export const dsInlineGrid = { display: 'inline-grid' } as const

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

/**
 * Creates a declaration object for the **`display`** property.
 * @category Declaration function
 * @formalSyntax [ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>
 * @added 0.1.4
 * @implementationReference https://www.w3.org/TR/2019/CR-css-display-3-20190711/
 */
export const display = (value: DisplayValue | GlobalCssKeyword) => ({
  display: value
})
