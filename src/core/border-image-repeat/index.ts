import { serializeShorthandleValue } from '../../utils'
import { GlobalCssKeyword, PropType, serializeAtomicValue, ValueOrFunc, Width } from '../shared'

type BorderImageRepeatKeyword = 'stretch' | 'repeat' | 'round' | 'space'

/** @hide */
export type BorderImageRepeatValue = BorderImageRepeatKeyword | [BorderImageRepeatKeyword, BorderImageRepeatKeyword]

const serializeBorderImageRepeatPropValue = (x: BorderImageRepeatPropValue): string => {
    return !Array.isArray(x) ? serializeAtomicValue(x) : serializeShorthandleValue(x)
}

export const serializeBorderImageRepeat = (type: PropType) => (x: BorderImageRepeatPropValue) => {
    const propName = type === 'inline' ? 'borderImageRepeat' : 'border-image-repeat'
    return {
        [propName]: serializeBorderImageRepeatPropValue(x),
    }
}

/** @hide */
type BorderImageRepeatPropValue = BorderImageRepeatValue | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderImageRepeatDeclaration = {
    /**
     * A RB property that maps to CSS's **`border-image-repeat`** property
     * @initial stretch
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-image-repeat
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    borderImageRepeat: BorderImageRepeatPropValue
}

export type BorderImageRepeatDeclarationJSS = {
    borderImageRepeat: ValueOrFunc<BorderImageRepeatPropValue>
}
