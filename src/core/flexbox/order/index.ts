import { GlobalCssKeyword, ValueOrFunc } from '../../shared';

export const serializeOrder = (
    value: number | GlobalCssKeyword,
): {
    order: number | string;
} => ({
    order: value,
});

/** @hide */
type OrderPropValue = number | GlobalCssKeyword;

/**
 * @category RBDeclarationTypeAlias
 */
export type OrderDeclaration = {
    /**
     * Maps to CSS's **`order`** property
     * @category RBProperty
     * @formalSyntaxForValue <integer>
     * @added 0.2.0
     * @implementationReference https://www.w3.org/TR/css-flexbox-1/#order-property
     */
    order: OrderPropValue;
};

export type OrderDeclarationJSS = {
    order: ValueOrFunc<OrderPropValue>;
};
