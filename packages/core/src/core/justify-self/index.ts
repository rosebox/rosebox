import { GlobalCssKeyword, PropType, serializeAtomicValue, ValueOrFunc } from '../shared'

type BaseLinePosition = ['first', 'baseline'] | ['last', 'baseline'] | 'baseline'

/**
 * @hide
 */
type justifySelfValue =
    | 'auto'
    | 'normal'
    | 'stretch'
    | BaseLinePosition
    | 'center'
    | ['safe', 'center']
    | ['unsafe', 'center']
    | 'start'
    | ['safe', 'start']
    | ['unsafe', 'start']
    | 'end'
    | ['safe', 'end']
    | ['unsafe', 'end']
    | 'flex-start'
    | ['safe', 'flex-start']
    | ['unsafe', 'flex-start']
    | 'flex-end'
    | ['safe', 'flex-end']
    | ['unsafe', 'flex-end']
    | 'self-start'
    | ['safe', 'self-start']
    | ['unsafe', 'self-start']
    | 'self-end'
    | ['safe', 'self-end']
    | ['unsafe', 'self-end']
    | 'left'
    | ['safe', 'left']
    | ['unsafe', 'left']
    | 'right'
    | ['safe', 'right']
    | ['unsafe', 'right']

const serializejustifySelfPropValue = (x: string | string[]): string =>
    Array.isArray(x) ? `${serializeAtomicValue(x[0])} ${serializeAtomicValue(x[1])}` : serializeAtomicValue(x)

/** @hide */
type justifySelfPropValue = justifySelfValue | GlobalCssKeyword

export const serializejustifySelf = (type: PropType) => (x: justifySelfPropValue): { [key: string]: string } => {
    const propName = type === 'inline' ? 'justifySelf' : 'align-self'
    return {
        [propName]: serializejustifySelfPropValue(x),
    }
}

/**
 * @category RBDeclarationTypeAlias
 */
export type justifySelfDeclaration = {
    /**
     * Maps to CSS's **`justify-self`** property
     * @inital auto
     * @definition https://www.w3.org/TR/2020/WD-css-align-3-20200421/#propdef-justify-self
     * @specification {@link https://www.w3.org/TR/2020/WD-css-align-3-20200421/ CSS Box Alignment Module Level 3}.
     */
    justifySelf: justifySelfPropValue
}

export type justifySelfDeclarationJSS = {
    justifySelf: ValueOrFunc<justifySelfPropValue>
}
