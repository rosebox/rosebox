import { GlobalCssKeyword, PropType, serializeAtomicValue, ValueOrFunc } from '../shared'
import { ImageValue } from '../shared/types/image'

export type BackgroundImageValue = ImageValue | 'none'

export const serializeBackgroundImage = (type: PropType) => (x: BackgroundImagePropValue) => {
    const propName = type === 'inline' ? 'backgroundImage' : 'background-image'
    return {
        [propName]: serializeAtomicValue(x),
    }
}

/** @hide */
type BackgroundImagePropValue = BackgroundImageValue | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type BgImageDeclaration = {
    /**
     * A RB property that maps to CSS's **`background-image`** property
     * @category RBProperty
     * @formalSyntaxForValue <uri> | none | inherit
     * @added https://www.w3.org/TR/2011/REC-CSS2-20110607/colors.html#propdef-background-image
     */
    backgroundImage: BackgroundImagePropValue
}
export type BgImageDeclarationJSS = {
    backgroundImage: ValueOrFunc<BackgroundImagePropValue>
}
