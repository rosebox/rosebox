import { GlobalCssKeyword, PropType, serializeAtomicValue, ValueOrFunc } from '../shared'

type BaseLinePosition = ['first', 'baseline'] | ['last', 'baseline'] | 'baseline'

/**
 * @hide
 */
type justifyItemsValue =
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
    | 'legacy'
    | ['legacy', 'right']
    | ['right', 'legacy']
    | ['legacy', 'left']
    | ['left', 'legacy']
    | ['legacy', 'center']
    | ['center', 'legacy']

const serializejustifyItemsPropValue = (x: string | string[]): string =>
    Array.isArray(x) ? `${serializeAtomicValue(x[0])} ${serializeAtomicValue(x[1])}` : serializeAtomicValue(x)

/** @hide */
type justifyItemsPropValue = justifyItemsValue | GlobalCssKeyword

export const serializejustifyItems = (type: PropType) => (x: justifyItemsPropValue): { [key: string]: string } => {
    const propName = type === 'inline' ? 'justifyItems' : 'align-self'
    return {
        [propName]: serializejustifyItemsPropValue(x),
    }
}

/**
 * @category RBDeclarationTypeAlias
 */
export type JustifyItemsDeclaration = {
    /**
     * Maps to CSS's **`justify-items`** property
     * @inital legacy
     * @definition https://www.w3.org/TR/2020/WD-css-align-3-20200421/#propdef-justify-items
     * @specification {@link https://www.w3.org/TR/2020/WD-css-align-3-20200421/ CSS Box Alignment Module Level 3}.
     */
    justifyItems: justifyItemsPropValue
}

export type JustifyItemsDeclarationJSS = {
    justifyItems: ValueOrFunc<justifyItemsPropValue>
}
