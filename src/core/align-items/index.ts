import { GlobalCssKeyword, PropType, serializeAtomicValue } from '../shared'

type BaseLinePosition = ['first' | 'last', 'baseline'] | 'baseline'

/**
 * @hide
 */
type AlignItems =
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
    | 'self-start'
    | ['safe', 'self-start']
    | ['unsafe', 'self-start']
    | 'self-end'
    | ['safe', 'self-end']
    | ['unsafe', 'self-end']
    | 'flex-start'
    | ['safe', 'flex-start']
    | ['unsafe', 'flex-start']
    | 'flex-end'
    | ['safe', 'flex-end']
    | ['unsafe', 'flex-end']

const serializeAlignItemsPropValue = (x: AlignItems | GlobalCssKeyword): string =>
    Array.isArray(x) ? `${serializeAtomicValue(x[0])} ${serializeAtomicValue(x[1])}` : serializeAtomicValue(x)

export const serializeAlignItems = (type: PropType) => (
    x: AlignItems | GlobalCssKeyword,
): { [key: string]: string } => {
    const propName = type === 'inline' ? 'alignItems' : 'align-items'
    return {
        [propName]: serializeAlignItemsPropValue(x),
    }
}
/** @hide */
type AlignItemsPropValue = AlignItems | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type AlignItemsDeclaration = {
    /**
     * Maps to CSS's **`align-items`** property
     * @inital stretch
     * @definition https://www.w3.org/TR/2020/WD-css-align-3-20200421/#align-items-property
     * @specification {@link https://www.w3.org/TR/2020/WD-css-align-3-20200421/ CSS Box Alignment Module Level 3}.
     */
    alignItems: AlignItemsPropValue
}
