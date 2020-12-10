import { GlobalCssKeyword, PropType, serializeAtomicValue, ValueOrFunc } from '../shared'
import { ImageValue } from '../shared/types/image'

/** @hide */
export type BorderImageSourceValue = ImageValue | 'none'

export const serializeBorderImageSourcePropValue = serializeAtomicValue

export const serializeBorderImageSource = (type: PropType) => (x: BorderImageSourcePropValue) => {
    const propName = type === 'inline' ? 'borderImageSource' : 'border-image-source'
    return {
        [propName]: serializeAtomicValue(x),
    }
}

/** @hide */
type BorderImageSourcePropValue = BorderImageSourceValue | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderImageSourceDeclaration = {
    /**
     * A RB property that maps to CSS's **`border-image-source`** property
     * @initial none
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-image-source
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    borderImageSource: BorderImageSourcePropValue
}

export type BorderImageSourceDeclarationJSS = {
    borderImageSource: ValueOrFunc<BorderImageSourcePropValue>
}
