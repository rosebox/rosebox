import { GlobalCssKeyword, ValueOrFunc } from '../shared';

/** @hide */
type FontSynthesisWeightPropValue = 'auto' | 'none' | GlobalCssKeyword;

/**
 * @category RBDeclarationTypeAlias
 */
export type FontSynthesisWeightDeclaration = {
    /**
     * Maps to CSS's **`font-synthesis-weight`** property
     * @category RBProperty
     * @formalSyntaxForValue auto | none
     * @implementationReference https://www.w3.org/TR/2019/WD-css-fonts-4-20191113/#font-synthesis-weight
     */
    fontSynthesisWeight: FontSynthesisWeightPropValue;
};
export type FontSynthesisWeightDeclarationJSS = {
    fontSynthesisWeight: ValueOrFunc<FontSynthesisWeightPropValue>;
};
