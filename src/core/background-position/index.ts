import { getSerializer, GlobalCssKeyword, PropType, ValueOrFunc } from '../shared'
import { Position, serializePosition } from '../shared'

export const serializeBgPositionPropValue = (x: Position | Position[] | GlobalCssKeyword): string => {
    if (typeof x === 'string') return x
    if (Array.isArray(x))
        return x.reduce((acc, val, idx) => acc + getSerializer(val)(val) + (idx === x.length - 1 ? '' : ', '), '')
    return serializePosition(x)
}

export const serializeBackgroundPosition = (type: PropType) => (x: Position | Position[] | GlobalCssKeyword) => {
    const propName = type === 'inline' ? 'backgroundPosition' : 'background-position'
    return {
        [propName]: serializeBgPositionPropValue(x),
    }
}

/** @hide */
type BgPositionPropValue = Position | Position[] | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type BgPositionDeclaration = {
    /**
     * A RB property that maps to CSS's **`background-position`** property
     */
    backgroundPosition: BgPositionPropValue
}
export type BgPositionDeclarationJSS = {
    backgroundPosition: ValueOrFunc<BgPositionPropValue>
}
