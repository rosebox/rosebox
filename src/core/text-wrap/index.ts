import { GlobalCssKeyword, ValueOrFunc } from '../shared';

/** @hide */
type TextWrapPropValue = 'wrap' | 'nowrap' | 'balance' | 'stable' | 'pretty' | GlobalCssKeyword;

/**
 * @category RBDeclarationTypeAlias
 */
export type TextWrapDeclaration = {
    /**
     *  Maps to CSS's **`text-wrap`** property
     * @category RBProperty
     */
    textWrap: TextWrapPropValue;
};

export type TextWrapDeclarationJSS = {
    textWrap: ValueOrFunc<TextWrapPropValue>;
};
