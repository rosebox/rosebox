import { GlobalCssKeyword, ImageValue, serializeAtomicValue } from '../shared'

/** @hide */
type ListStyleImagValue = ImageValue | 'none'

export const serializeListStyleImage = (x: ListStyleImagePropValue): { [key: string]: string } => {
    return {
        listStyleImage: serializeAtomicValue(x),
    }
}

/** @hide */
type ListStyleImagePropValue = ListStyleImagValue | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type ListStyleImageDeclaration = {
    /**
     * Maps to CSS's **`list-style-image`** property
     * @inital none
     * @definition https://www.w3.org/TR/2020/WD-css-lists-3-20201117/#propdef-list-style-image
     * @specification {@link https://www.w3.org/TR/2020/WD-css-lists-3-20201117/ CSS Lists and Counters Module Level 3}.
     */
    listStyleImage: ListStyleImagePropValue
}
