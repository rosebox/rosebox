import { GlobalCssKeyword, LengthPercentage, serializeAtomicValue, ValueOrFunc } from '../shared';

export const serializeTextUnderlineOffset = (x: LengthPercentage | 'auto' | GlobalCssKeyword) => ({
    textUnderlineOffset: serializeAtomicValue(x),
});

/** @hide */
type TextUnderlineOffsetPropValue = LengthPercentage | 'auto' | GlobalCssKeyword;

/**
 * @category RBDeclarationTypeAlias
 */
export type TextUnderlineOffsetDeclaration = {
    /**
     * Maps to CSS's **`text-underline-position`** property
     * @category RBProperty
     */
    textUnderlineOffset: TextUnderlineOffsetPropValue;
};

export type TextUnderlineOffsetDeclarationJSS = {
    textUnderlineOffset: ValueOrFunc<TextUnderlineOffsetPropValue>;
};
