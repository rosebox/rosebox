import { GlobalCssKeyword } from '../shared'

type BreakInsideKeyword = 'auto' | 'avoid' | 'avoid-page' | 'avoid-column' | 'avoid-region'

export const serializeBreakInside = (x: BreakInsidePropValue): { [key: string]: string } => {
    return {
        breakInside: x,
    }
}

/** @hide */
type BreakInsidePropValue = BreakInsideKeyword | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type BreakInsideDeclaration = {
    /**
     * Maps to CSS's **`break-inside`** property
     * @inital auto
     * @definition https://www.w3.org/TR/2018/WD-css-break-4-20181218/#propdef-break-inside
     * @specification {@link https://www.w3.org/TR/2018/WD-css-break-4-20181218 CSS Fragmentation Module Level 4}.
     */
    breakInside: BreakInsidePropValue
}
