import { GlobalCssKeyword, ValueOrFunc } from '../../shared'

/** @hide */
type OrderPropValue = number | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type OrderDeclaration = {
    /**
     * Maps to CSS's **`order`** property
     * @initial 0
     * @definition https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#propdef-order
     * @specification {@link https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/ CSS Flexible Box Layout Module Level 1}
     */
    order: OrderPropValue
}

export type OrderDeclarationJSS = {
    order: ValueOrFunc<OrderPropValue>
}
