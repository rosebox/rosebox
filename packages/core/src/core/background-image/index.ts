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
     * @initial none
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-background-image
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    backgroundImage: BackgroundImagePropValue
}
export type BgImageDeclarationJSS = {
    backgroundImage: ValueOrFunc<BackgroundImagePropValue>
}
