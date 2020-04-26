const serializeValue = (value: string | string[]) =>
    !Array.isArray(value)
        ? value
        : value.reduce(
            (acc, item, idx) => acc + item + (idx === value.length - 1 ? '' : ', '),
            ''
        )


export const serializeFontFamily = (
    value: string | string[]
): string => serializeValue(value)

/**
 * @category RBDeclarationTypeAlias
 */
export type FontFamilyDeclaration = {
    /**
     * Maps to CSS's **`font-family`** property
     * @category RBProperty
     * @formalSyntaxForValue auto | <integer>
     * @added 0.2.0
     */
    fontFamily: string
}

export type FontFamilyCSSProp = 'font-family'
