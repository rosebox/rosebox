import { GlobalCssKeyword, serializeDoubleBar } from '../shared';
import { LengthPercentage, serializeAtomicValue } from '../shared/types';

export const serializeTexIndent = (x: TextIndentValue) => ({
    textIndent: typeof x === 'string' ? x : serializeDoubleBar(!Array.isArray(x) ? [x] : x, serializeAtomicValue),
});

type TextIndentValue =
    | LengthPercentage
    | [LengthPercentage]
    | [LengthPercentage, 'hanging']
    | ['hanging', LengthPercentage]
    | [LengthPercentage, 'each-line']
    | ['each-line', LengthPercentage]
    | [LengthPercentage, 'hanging', 'each-line']
    | [LengthPercentage, 'each-line', 'hanging']
    | ['hanging', LengthPercentage, 'each-line']
    | ['hanging', 'each-line', LengthPercentage]
    | ['each-line', LengthPercentage, 'hanging']
    | ['each-line', 'hanging', LengthPercentage];

/** @hide */
type TextIndentPropValue = TextIndentValue | GlobalCssKeyword;

/**
 * @category RBDeclarationTypeAlias
 */
export type TextIndentDeclaration = {
    /**
     * Maps to CSS's **`text-indent`** property
     * @category RBProperty
     */
    textIndent: TextIndentPropValue;
};

export type TextIndentDeclarationJSS = {
    textIndent: TextIndentPropValue;
};
