import { serializeShorthandleValue } from '../../utils'
import { TransformFunction, GlobalCssKeyword, PropType, serializeAtomicValue } from '../shared'

/** @hide */
type PropValue = TransformFunction | TransformFunction[] | GlobalCssKeyword | 'none'

export const serializeTransform = (type: PropType) => (x: PropValue) => ({
    transform: !Array.isArray(x) ? serializeAtomicValue(x) : serializeShorthandleValue(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type TransformDeclaration = {
    /**
     * Maps to CSS's **`transform`** property */
    transform: PropValue
}
