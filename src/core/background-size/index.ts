import { GlobalCssKeyword, serializeAtomicValue, Width, Calculation, PropType, ValueOrFunc } from '../shared'

const serializeBackgroundSizeAtomic = (x: BackgroundSize): string =>
    typeof x === 'string' ? x : `${serializeAtomicValue(x[0])} ${serializeAtomicValue(x[1])}`

export const serializeBackgroundSizePropValue = (x: BackgroundSize | BackgroundSize[] | GlobalCssKeyword): string => {
    if (typeof x === 'string') return x
    if (Array.isArray(x[0]))
        return (x as BackgroundSize[]).reduce(
            (acc, val, idx) => acc + serializeBackgroundSizeAtomic(val) + (idx === x.length - 1 ? '' : ', '),
            '',
        )
    return serializeBackgroundSizeAtomic(x as BackgroundSize)
}

type BackgroundSize = [Width | Calculation, Width | Calculation] | 'cover' | 'contain'

export const serializeBackgroundSize = (type: PropType) => (
    x: BackgroundSize | BackgroundSize[] | GlobalCssKeyword,
) => {
    const propName = type === 'inline' ? 'backgroundSize' : 'background-size'
    return {
        [propName]: serializeBackgroundSizePropValue(x),
    }
}

/** @hide */
type BackgroundSizePropValue = BackgroundSize | BackgroundSize[] | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type BackgroundSizeDeclaration = {
    /**
     * A RB property that maps to CSS's **`background-size`** property
     * @initial auto
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-background-size
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    backgroundSize: BackgroundSizePropValue
}
export type BackgroundSizeDeclarationJSS = {
    backgroundSize: ValueOrFunc<BackgroundSizePropValue>
}
