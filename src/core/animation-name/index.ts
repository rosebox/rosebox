import { CustomIdent, GlobalCssKeyword, PropType, serializeAtomicValue, ValueOrFunc } from '../shared'

const toHyphenCase = (x: string) => x.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())

type KeyFramesName = CustomIdent | string

/**
 * @hide
 */
export type AnimationName = 'none' | KeyFramesName | ('none' | KeyFramesName)[]

const cb = (x: string | CustomIdent): string => toHyphenCase(serializeAtomicValue(x))

const serializeValue = (value: AnimationNamePropValue) => {
    const valArray = Array.isArray(value) ? value : [value]
    return valArray.reduce((acc, item, idx) => acc + cb(item) + (idx === valArray.length - 1 ? '' : ', '), '')
}

export const serializeAnimationName = (type: PropType) => (x: AnimationNamePropValue) => {
    const propName = type === 'inline' ? 'animationName' : 'animation-name'
    return {
        [propName]: serializeValue(x),
    }
}

/** @hide */
type AnimationNamePropValue = AnimationName | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationNameDeclaration = {
    /**
     * Maps to CSS's **`animation-name`** property
     * @initial none
     * @definition https://www.w3.org/TR/2018/WD-css-animations-1-20181011/#animation-name
     * @specification {@link https://www.w3.org/TR/2018/WD-css-animations-1-20181011/ CSS Animations Level 1}.
     */
    animationName: AnimationNamePropValue
}

export type AnimationNameDeclarationJSS = {
    animationName: ValueOrFunc<AnimationNamePropValue>
}
