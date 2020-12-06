import { Length, isLengthType, GlobalCssKeyword, isGlobalCssKeyword, PropType, ValueOrFunc } from '../shared';
import { Color, isColor, serializeAtomicValue } from '../shared';

type LengthTuple = [Length, Length] | [Length, Length, Length] | [Length, Length, Length, Length];

type Shadow =
    | LengthTuple
    | ['inset', LengthTuple]
    | [LengthTuple, 'inset']
    | [Color, LengthTuple]
    | [LengthTuple, Color]
    | [LengthTuple, 'inset', Color]
    | [LengthTuple, Color, 'inset']
    | ['inset', LengthTuple, Color]
    | ['inset', Color, LengthTuple]
    | [Color, LengthTuple, 'inset']
    | [Color, 'inset', LengthTuple];

const isLengthTuple = (value: any): value is LengthTuple => Array.isArray(value) && value.every(isLengthType);

const serializeLengthTuple = (value: LengthTuple): string =>
    (value as Length[]).reduce((acc, item) => acc + serializeAtomicValue(item) + ' ', '').trim();

export const serializeShadow = (value: Shadow): string => {
    return (value as (Color | LengthTuple | Color)[])
        .reduce((acc: any, item: any) => {
            return (
                acc +
                ' ' +
                (isColor(item)
                    ? serializeAtomicValue(item)
                    : isLengthType(item)
                    ? serializeAtomicValue(item)
                    : isLengthTuple(item)
                    ? serializeLengthTuple(item)
                    : item === 'inset'
                    ? 'inset'
                    : 'test')
            );
        }, '')
        .trim();
};

const serializeShadowArray = (value: Shadow[]): string =>
    value.reduce(
        (acc, item, idx) =>
            idx === value.length - 1 ? acc + serializeShadow(item) : acc + serializeShadow(item) + ', ',
        '',
    );

const serializeBoxShadowPropertyValue = (value: Shadow | Shadow[] | GlobalCssKeyword | 'none'): string =>
    value === 'none' || isGlobalCssKeyword(value)
        ? value
        : !Array.isArray(value[0]) || isLengthTuple(value[0])
        ? serializeShadow(value as Shadow)
        : serializeShadowArray(value as Shadow[]);

export const serializeBoxShadow = (type: PropType) => (x: Shadow | Shadow[] | GlobalCssKeyword | 'none') => ({
    [type === 'inline' ? 'boxShadow' : 'box-shadow']: serializeBoxShadowPropertyValue(x),
});

/** @hide */
type BoxShadowPropValue = Shadow | Shadow[] | 'none' | GlobalCssKeyword;

/**
 * @category RBDeclarationTypeAlias
 */
export type BoxShadowDeclaration = {
    /**
     * Maps to CSS's **`box-shadow`** property
     * @category RBProperty
     * @formalSyntaxForValue none | <shadow>#
     * @added 0.2.1
     * @implementationReference https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-box-shadow
     */
    boxShadow: BoxShadowPropValue;
};
export type BoxShadowDeclarationJSS = {
    boxShadow: ValueOrFunc<BoxShadowPropValue>;
};
