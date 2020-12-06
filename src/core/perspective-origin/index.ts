import { GlobalCssKeyword, isGlobalCssKeyword, serializePosition, ValueOrFunc } from '../shared'
import { Position } from '../shared'

export const serializePerspectiveOrigin = (x: PerspectiveOriginPropValue): { perspectiveOrigin: string } => ({
    perspectiveOrigin: isGlobalCssKeyword(x) ? x : serializePosition(x),
})

/** @hide */
type PerspectiveOriginPropValue = Position | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type PerspectiveOriginDeclaration = {
    /**
     * Maps to CSS's **`perspective-origin`** property
     * @category RBProperty
     */
    perspectiveOrigin: PerspectiveOriginPropValue
}

export type PerspectiveOriginDeclarationJSS = {
    perspectiveOrigin: ValueOrFunc<PerspectiveOriginPropValue>
}
