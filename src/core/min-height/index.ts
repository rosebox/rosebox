import { GlobalCssKeyword, LengthPercentage, Calculation, serializeAtomicValue, ValueOrFunc } from '../shared';

/**
 * @hide
 */
type MinHeightPropValue = LengthPercentage | Calculation | GlobalCssKeyword;

export const serializeMinHeightValue = (x: MinHeightPropValue): { minHeight: string } => ({
    minHeight: serializeAtomicValue(x),
});

/**
 * @category RBDeclarationTypeAlias
 */
export type MinHeightDeclaration = {
    /**
     * Maps to CSS's **`min-height`** property
     * @category RBProperty
     * @formalSyntaxForValue <length> | <percentage>
     * @added 0.2.0
     * @implementationReference https://www.w3.org/TR/CSS22/visudet.html#propdef-min-height
     */
    minHeight: MinHeightPropValue;
};

export type MinHeightDeclarationJSS = {
    minHeight: ValueOrFunc<MinHeightPropValue>;
};
