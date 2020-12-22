import { GlobalCssKeyword, LengthPercentage, serializeAtomicValue, Calculation, ValueOrFunc } from '../shared'

export const serializeBoxOffset = (property: string) => (x: LengthPercentage | 'auto' | GlobalCssKeyword) => ({
    [property]: serializeAtomicValue(x),
})

export const serializeTop = serializeBoxOffset('top')

/** @hide */
type BoxOffsetPropValue = LengthPercentage | 'auto' | Calculation | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type TopDeclaration = {
    /**
     * Maps to CSS's **`top`** property
     * @initial auto
     * @definition https://www.w3.org/TR/2020/WD-css-position-3-20200519/#propdef-top
     * @specification {@link https://www.w3.org/TR/2020/WD-css-position-3-20200519/ CSS Positioned Layout Module Level 3}.
     */
    top: BoxOffsetPropValue
}
export type TopDeclarationJSS = {
    top: ValueOrFunc<BoxOffsetPropValue>
}

/**
 * @category RBDeclarationTypeAlias
 */
export type RightDeclaration = {
    /**
     * Maps to CSS's **`right`** property
     * @initial auto
     * @definition https://www.w3.org/TR/2020/WD-css-position-3-20200519/#propdef-left
     * @specification {@link https://www.w3.org/TR/2020/WD-css-position-3-20200519/ CSS Positioned Layout Module Level 3}.
     */
    right: BoxOffsetPropValue
}
export type RightDeclarationJSS = {
    right: ValueOrFunc<BoxOffsetPropValue>
}

export const serializeRight = serializeBoxOffset('right')

/**
 * @category RBDeclarationTypeAlias
 */
export type BottomDeclaration = {
    /**
     * Maps to CSS's **`bottom`** property
     * @initial auto
     * @definition https://www.w3.org/TR/2020/WD-css-position-3-20200519/#propdef-bottom
     * @specification {@link https://www.w3.org/TR/2020/WD-css-position-3-20200519/ CSS Positioned Layout Module Level 3}.
     */
    bottom: BoxOffsetPropValue
}
export type BottomDeclarationJSS = {
    bottom: ValueOrFunc<BoxOffsetPropValue>
}

export const serializeBottom = serializeBoxOffset('bottom')

/**
 * @category RBDeclarationTypeAlias
 */
export type LeftDeclaration = {
    /**
     * Maps to CSS's **`left`** property
     * @initial auto
     * @definition https://www.w3.org/TR/2020/WD-css-position-3-20200519/#propdef-left
     * @specification {@link https://www.w3.org/TR/2020/WD-css-position-3-20200519/ CSS Positioned Layout Module Level 3}.
     */
    left: BoxOffsetPropValue
}

export type LeftDeclarationJSS = {
    left: ValueOrFunc<BoxOffsetPropValue>
}

export const serializeLeft = serializeBoxOffset('left')
