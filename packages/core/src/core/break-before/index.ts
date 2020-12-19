import { GlobalCssKeyword } from '../shared'

type BreakBeforeKeyword =
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

export const serializeBreakBefore = (x: BreakBeforePropValue): { [key: string]: string } => {
    return {
        breakBefore: x,
    }
}

/** @hide */
type BreakBeforePropValue = BreakBeforeKeyword | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type BreakBeforeDeclaration = {
    /**
     * Maps to CSS's **`break-before`** property
     * @inital auto
     * @definition https://www.w3.org/TR/2018/WD-css-break-4-20181218/#propdef-break-before
     * @specification {@link https://www.w3.org/TR/2018/WD-css-break-4-20181218 CSS Fragmentation Module Level 4}.
     */
    breakBefore: BreakBeforePropValue
}
