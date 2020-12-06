import { GlobalCssKeyword, PropType, ValueOrFunc } from '../shared';

export const serializeFontOpticalSizing = (type: PropType) => (x: 'auto' | 'normal' | 'none' | GlobalCssKeyword) => ({
    [type === 'inline' ? 'fontOpticalSizing' : 'font-optical-sizing']: x,
});

type FontOpticalSizingPropValue = 'auto' | 'none' | GlobalCssKeyword;

/**
 * @category RBDeclarationTypeAlias
 */
export type FontOpticalSizingDeclaration = {
    /**
     * Maps to CSS's **`font-optical-sizing`** property
     * @category RBProperty
     * @formalSyntaxForValue auto | none
     * @implementationReference https://drafts.csswg.org/css-fonts-4/#font-optical-sizing-def
     */
    fontOpticalSizing: FontOpticalSizingPropValue;
};
export type FontOpticalSizingDeclarationJSS = {
    fontOpticalSizing: ValueOrFunc<FontOpticalSizingPropValue>;
};
