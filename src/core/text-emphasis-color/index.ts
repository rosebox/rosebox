import { Color, serializeAtomicValue, ValueOrFunc } from '../shared';
import { GlobalCssKeyword } from '../shared';

export const serializeTextEmphasisColor = (x: Color | GlobalCssKeyword) => ({
    textEmphasisColor: serializeAtomicValue(x),
});

/** @hide */
type TextEmphasisColorPropValue = Color | GlobalCssKeyword;

/**
 * @category RBDeclarationTypeAlias
 */
export type TextEmphasisColorDeclaration = {
    /**
     * Maps to CSS's **`text-emphasis-color`** property
     * @category RBProperty
     */
    textEmphasisColor: TextEmphasisColorPropValue;
};

export type TextEmphasisColorDeclarationJSS = {
    textEmphasisColor: ValueOrFunc<TextEmphasisColorPropValue>;
};
