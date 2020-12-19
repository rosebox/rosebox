import { GlobalCssKeyword } from '../shared'

type BreakAfterKeyword =
    | 'auto'
    | 'avoid'
    | 'always'
    | 'all'
    | 'avoid-page'
    | 'page'
    | 'left'
    | 'right'
    | 'recto'
    | 'verso'
    | 'avoid-column'
    | 'column'
    | 'avoid-region'
    | 'region'

export const serializeBreakAfter = (x: BreakAfterPropValue): { [key: string]: string } => {
    return {
        breakAfter: x,
    }
}

/** @hide */
type BreakAfterPropValue = BreakAfterKeyword | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type BreakAfterDeclaration = {
    /**
     * Maps to CSS's **`break-after`** property
     * @inital auto
     * @definition https://www.w3.org/TR/2018/WD-css-break-4-20181218/#propdef-break-after
     * @specification {@link https://www.w3.org/TR/2018/WD-css-break-4-20181218 CSS Fragmentation Module Level 4}.
     */
    breakAfter: BreakAfterPropValue
}
