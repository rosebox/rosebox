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
 * @implementationReference https://www.w3.org/TR/css-display-3/#propdef-display
 */
export const display = (value: DisplayValue | GlobalCssKeyword) => ({
  display: value
})
