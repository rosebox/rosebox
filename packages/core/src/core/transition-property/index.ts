import { GlobalCssKeyword, AnimatableProperty, CustomIdent, serializeAtomicValue, ValueOrFunc } from '../shared'

const toHyphenCase = (x: string) => x.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())

/**
 * @hide
 */
export type TransitionPropertyPropValue =
    | 'none'
    | 'all'
    | AnimatableProperty
    | CustomIdent
    | (AnimatableProperty | CustomIdent)[]
    | GlobalCssKeyword

const serializeValue = (value: TransitionPropertyPropValue): string => {
    const valArray = Array.isArray(value) ? value : [value]
    return valArray.reduce(
        (acc, item, idx) =>
            acc +
            (typeof item === 'string' ? toHyphenCase(item) : toHyphenCase(serializeAtomicValue(item))) +
            (idx === valArray.length - 1 ? '' : ', '),
        '',
    )
}

export const serializeTransitionProperty = (x: TransitionPropertyPropValue): { transitionProperty: string } => ({
    transitionProperty: serializeValue(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type TransitionPropertyDeclaration = {
    /**
     * Maps to CSS's **`transition-property`** property
     * @initial all
     * @definition https://www.w3.org/TR/2018/WD-css-transitions-1-20181011/#transition-property-property
     * @specification {@link https://www.w3.org/TR/2018/WD-css-transitions-1-20181011/ CSS Transitions}.
     */
    transitionProperty: TransitionPropertyPropValue
}

export type TransitionPropertyDeclarationJSS = {
    transitionProperty: ValueOrFunc<TransitionPropertyPropValue>
}
