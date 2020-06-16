import { GlobalCssKeyword } from '../shared/types'

type BaseLinePosition = 'first baseline' | 'last baseline' | 'baseline'

type ContentDistribution =
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'

/**
 * @category RBDeclarationTypeAlias
 */
export type AlignContentDeclaration = {
  /**
   * Maps to CSS's **`align-content`** property
   * @category RBProperty
   * @formalSyntaxForValue normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>
   * @added 0.2.4
   * @implementationReference https://www.w3.org/TR/css-align-3/#propdef-justify-content
   */
  alignContent:
    | 'normal'
    | BaseLinePosition
    | ContentDistribution
    | 'center'
    | 'safe center'
    | 'unsafe center'
    | 'start'
    | 'safe start'
    | 'unsafe start'
    | 'end'
    | 'safe end'
    | 'unsafe end'
    | 'flex-start'
    | 'safe flex-start'
    | 'unsafe flex-start'
    | 'flex-end'
    | 'safe flex-end'
    | 'unsafe flex-end'
    | GlobalCssKeyword
}
