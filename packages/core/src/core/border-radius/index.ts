import { GlobalCssKeyword, LengthPercentage, PropType, serializeAtomicValue, ValueOrFunc } from '../shared'

export type BorderRadiusCSSProp = 'border-radius'

/**
 * @hide
 */
export type BorderCornerRadius = LengthPercentage | [LengthPercentage, LengthPercentage]

const serializeCornerRadius = (property: string) => (x: BorderCornerRadius | GlobalCssKeyword) => ({
    [property]: !Array.isArray(x)
        ? serializeAtomicValue(x)
        : x.reduce((acc, item) => acc + ' ' + serializeAtomicValue(item), '').trim(),
})

export const serializeBorderTopRightRadius = (type: PropType) =>
    serializeCornerRadius(type === 'inline' ? 'borderTopRightRadius' : 'border-top-right-radius')
export const serializeBorderBottomRightRadius = (type: PropType) =>
    serializeCornerRadius(type === 'inline' ? 'borderBottomRightRadius' : 'border-bottom-right-radius')
export const serializeBorderBottomLeftRadius = (type: PropType) =>
    serializeCornerRadius(type === 'inline' ? 'borderBottomLeftRadius' : 'border-bottom-left-radius')
export const serializeBorderTopLeftRadius = (type: PropType) =>
    serializeCornerRadius(type === 'inline' ? 'borderTopLeftRadius' : 'border-top-left-radius')

/** @hide */
type BorderCornerPropValue = BorderCornerRadius | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderTopRightRadiusDeclaration = {
    /**
     * Maps to CSS's **`border-top-right-radius`** property
     * @initial 0
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-radius
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    borderTopRightRadius: BorderCornerPropValue
}
export type BorderTopRightRadiusDeclarationJSS = {
    borderTopRightRadius: ValueOrFunc<BorderCornerPropValue>
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderBottomRightRadiusDeclaration = {
    /**
     * Maps to CSS's **`border-bottom-right-radius`** property
     * @initial 0
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-radius
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    borderBottomRightRadius: BorderCornerPropValue
}
export type BorderBottomRightRadiusDeclarationJSS = {
    borderBottomRightRadius: ValueOrFunc<BorderCornerPropValue>
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderBottomLeftRadiusDeclaration = {
    /**
     * Maps to CSS's **`border-bottom-left-radius`** property
     * @initial 0
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-radius
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    borderBottomLeftRadius: BorderCornerPropValue
}
export type BorderBottomLeftRadiusDeclarationJSS = {
    borderBottomLeftRadius: ValueOrFunc<BorderCornerPropValue>
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderTopLeftRadiusDeclaration = {
    /**
     * Maps to CSS's **`border-top-left-radius`** property
     * @initial 0
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#the-border-radius
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    borderTopLeftRadius: BorderCornerPropValue
}

type RadiusTuple =
    | [LengthPercentage]
    | [LengthPercentage, LengthPercentage]
    | [LengthPercentage, LengthPercentage, LengthPercentage]
    | [LengthPercentage, LengthPercentage, LengthPercentage, LengthPercentage]

type OneRadius = LengthPercentage | RadiusTuple

type TwoRadii = [RadiusTuple, RadiusTuple]

const serializRadiusTuple = (value: RadiusTuple): string =>
    (value as LengthPercentage[]).reduce((acc, item) => acc + ' ' + serializeAtomicValue(item), '').trim()

const serializeTwoRadius = (value: TwoRadii): string =>
    (value as RadiusTuple[])
        .reduce(
            (acc, item, idx: number) =>
                idx === value.length - 1 ? acc + serializRadiusTuple(item) : acc + serializRadiusTuple(item) + ' / ',
            '',
        )
        .trim()

export const serializeBorderRadius = (type: PropType) => (
    value: OneRadius | TwoRadii | GlobalCssKeyword,
): { [key: string]: string } => {
    const propName = type === 'inline' ? 'borderRadius' : 'border-radiuss'
    return {
        [propName]: !Array.isArray(value)
            ? serializeAtomicValue(value)
            : !Array.isArray(value[0])
            ? serializRadiusTuple(value as RadiusTuple)
            : serializeTwoRadius(value as TwoRadii),
    }
}

/** @hide */
type BorderRadiusPropValue = OneRadius | TwoRadii | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderRadiusDeclaration = {
    /**
     * Maps to CSS's **`border-radius`** property
     * @initial see individual properties
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#border-radius
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    borderRadius: BorderRadiusPropValue
}
export type BorderRadiusDeclarationJSS = {
    borderRadius: ValueOrFunc<BorderRadiusPropValue>
}
