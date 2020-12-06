import { LengthPercentage, GlobalCssKeyword, Length, Calculation, serializeAtomicValue, ValueOrFunc } from '../shared';
const WHITESPACE = ' ';

type Offset =
    | [LengthPercentage | Calculation, LengthPercentage | Calculation]
    | [LengthPercentage | Calculation, LengthPercentage | Calculation, Length | Calculation];

/**
 * @hide
 */
type TransformOriginPropValue = Offset | GlobalCssKeyword;

export const serializeTransformOrigin = (x: Offset | GlobalCssKeyword): { transformOrigin: string } => ({
    transformOrigin:
        typeof x === 'string'
            ? serializeAtomicValue(x)
            : x.reduce(
                  (acc, val, idx) => acc + serializeAtomicValue(val) + (idx === x.length - 1 ? '' : WHITESPACE),
                  '',
              ),
});

/**
 * @category RBDeclarationTypeAlias
 */
export type TransformOriginDeclaration = {
    /**
     * Maps to CSS's **`transform-origin`** property.
     * If a pair is provided, it represents x-offset and y-offset in order, If a triple
     * is provided it represents x-offset, y-offset and z-offset in order.
     * @category RBProperty
     * @added 0.2.3
     */
    transformOrigin: TransformOriginPropValue;
};

export type TransformOriginDeclarationJSS = {
    transformOrigin: ValueOrFunc<TransformOriginPropValue>;
};
