import {
    GlobalCssKeyword,
    LengthPercentage,
    serializeAtomicValue,
    Calculation,
    PropType,
    ValueOrFunc,
} from '../shared';

export type FontSizeCSSProp = 'font-size';

type RelativeSizeKeyword = 'larger' | 'smaller';

type AbsoluteSizeKeyword = 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large';

export const serializeFontSize = (type: PropType) => (
    x: RelativeSizeKeyword | AbsoluteSizeKeyword | LengthPercentage | Calculation | GlobalCssKeyword,
) => ({
    [type === 'inline' ? 'fontSize' : 'font-size']: serializeAtomicValue(x),
});

/** @hide */
type FontSizePropValue = RelativeSizeKeyword | AbsoluteSizeKeyword | LengthPercentage | Calculation | GlobalCssKeyword;

/**
 * @category RBDeclarationTypeAlias
 */
export type FontSizeDeclaration = {
    /**
     * Maps to CSS's **`font-size`** property
     * @category RBProperty
     * @formalSyntaxForValue <absolute-size> | <relative-size> | <length-percentage>
     * @added 0.2.0
     * @implementationReference https://www.w3.org/TR/2019/WD-css-fonts-4-20191113/#font-size-prop
     */
    fontSize: FontSizePropValue;
};
export type FontSizeDeclarationJSS = {
    fontSize: ValueOrFunc<FontSizePropValue>;
};
