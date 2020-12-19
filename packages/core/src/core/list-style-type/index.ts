export const serializeListStyleType = (x: string): { [key: string]: string } => {
    return {
        listStyleType: x,
    }
}

/**
 * @category RBDeclarationTypeAlias
 */
export type ListStyleTypeDeclaration = {
    /**
     * Maps to CSS's **`list-style-type`** property
     * @inital disc
     */
    listStyleType: string
}
