import {
    GlobalCssKeyword,
    LengthPercentage,
    serializeAtomicValue,
    Calculation,
    PropType,
    ValueOrFunc,
} from '../shared';

export type LineHeightCSSProp = 'line-height';

export const serializeLineHeight = (type: PropType) => (
    x: 'normal' | number | LengthPercentage | Calculation | GlobalCssKeyword,
) => ({
    [type === 'inline' ? 'lineHeight' : 'line-height']: serializeAtomicValue(x),
});

/** @hide */
type LineHeightPropValue = 'normal' | number | LengthPercentage | Calculation | GlobalCssKeyword;

/**
 * @category RBDeclarationTypeAlias
 */
export type LineHeightDeclaration = {
    /**
     * Maps to CSS's **`line-height`** property
     * @category RBProperty
     * @formalSyntaxForValue normal | <number> | <length> | <percentage> | inherit
     * @added 0.2.0
     * @implementationReference https://www.w3.org/TR/CSS22/visudet.html#propdef-line-height
     */
    lineHeight: LineHeightPropValue;
};

export type LineHeightDeclarationJSS = {
    lineHeight: ValueOrFunc<LineHeightPropValue>;
};
