import { serializeShorthandleValue } from '../../utils'

export const serializeListStyle = (x: string | string[]): { [key: string]: string } => {
    return {
        listStyle: !Array.isArray(x) ? x : serializeShorthandleValue(x),
    }
}

/**
 * @category RBDeclarationTypeAlias
 */
export type ListStyleDeclaration = {
    /**
     * Maps to CSS's **`list-style`** property
     * @inital disc
     */
    listStyle: string | string[]
}
