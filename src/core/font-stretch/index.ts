import { GlobalCssKeyword, Percentage, PropType, serializeAtomicValue, ValueOrFunc } from '../shared';

export const serializeFontStretch = (type: PropType) => (x: Percentage | string) => ({
    [type === 'inline' ? 'fontStretch' : 'font-stretch']: serializeAtomicValue(x),
});

/** @hide */
type FontStretchPropValue =
    | Percentage
    | 'normal'
    | 'ultra-condensed'
    | 'extra-condensed'
    | 'condensed'
    | 'semi-condensed'
    | 'semi-expanded'
    | 'expanded'
    | 'extra-expanded'
    | 'ultra-expanded'
    | GlobalCssKeyword;

/**
 * @category RBDeclarationTypeAlias
 */
export type FontStretchDeclaration = {
    /**
     * Maps to CSS's **`font-stretch`** property
     * @category RBProperty
     * @formalSyntaxForValu normal | <percentage> | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded
     */
    fontStretch: FontStretchPropValue;
};
export type FontStretchDeclarationJSS = {
    fontStretch: ValueOrFunc<FontStretchPropValue>;
};
