import { URL, GlobalCssKeyword, isGlobalCssKeyword } from '../shared/types'

export type CursorCSSProp = 'cursor'

type CursorKeyword =
    | 'auto'
    | 'default'
    | 'none'
    | 'context-menu'
    | 'none'
    | 'help'
    | 'pointer'
    | 'progress'
    | 'wait'
    | 'cell'
    | 'crosshair'
    | 'text'
    | 'vertical-text'
    | 'alias'
    | 'copy'
    | 'move'
    | 'no-drop'
    | 'not-allowed'
    | 'grab'
    | 'grabbing'
    | 'e-resize'
    | 'n-resize'
    | 'ne-resize'
    | 'nw-resize'
    | 's-resize'
    | 'se-resize'
    | 'sw-resize'
    | 'w-resize'
    | 'ew-resize'
    | 'ns-resize'
    | 'nesw-resize'
    | 'nwse-resize'
    | 'col-resize'
    | 'row-resize'
    | 'all-scroll'
    | 'zoom-in'
    | 'zoom-out'

type CursorURL = URL | [URL, number, number]

type Cursor = CursorKeyword | [CursorURL | CursorURL[], CursorKeyword]

const serializeCursorURL = (value: CursorURL): string =>
    !Array.isArray(value)
        ? `url(${value.value})`
        : `url(${value[0].value} ${value[1]} ${value[2]})`

export const serializeCursorValue = (value: Cursor): string =>
    isGlobalCssKeyword(value)
        ? value
        : !Array.isArray(value)
            ? value
            : (() => {
                const urls = !Array.isArray(value[0]) ? [value[0]] : value[0]
                return (
                    (urls as []).reduce(
                        (acc: string, item: CursorURL, idx) =>
                            acc +
                            serializeCursorURL(item) +
                            (idx === urls.length - 1 ? '' : ', '),
                        ''
                    ) +
                    ' ' +
                    value[1]
                ).trim()
            })()

/**
 * @category RBDeclarationTypeAlias
 */
export type CursorDeclaration = {
    /**
   * Maps to CSS's **`cursor`** property
   * @category RBProperty
   * @formalSyntaxForValue [ [<url> [<x> <y>]?,]*
    [ auto | default | none |
    context-menu | help | pointer | progress | wait |
    cell | crosshair | text | vertical-text |
    alias | copy | move | no-drop | not-allowed | grab | grabbing |
    e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll |
    zoom-in | zoom-out
    ] ]
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/2020/WD-css-ui-4-20200124/#cursor
   */
    cursor: Cursor | GlobalCssKeyword
}
