import { GlobalCssKeyword, serializeDoubleBar, ValueOrFunc } from '../shared';

export const serializeTextEmphasisPosition = (x: TextEmphasisPositionPropValue) => ({
    textEmphasisPosition: typeof x === 'string' ? x : serializeDoubleBar(x),
});

/**
 * @hide
 */
type TextEmphasisPositionPropValue =
    | 'over'
    | 'under'
    | ['over']
    | ['under']
    | ['over', 'right']
    | ['right', 'over']
    | ['over', 'left']
    | ['left', 'over']
    | ['under', 'right']
    | ['right', 'under']
    | ['under', 'left']
    | ['left', 'under']
    | GlobalCssKeyword;

/**
 * @category RBDeclarationTypeAlias
 */
export type TextEmphasisPositionDeclaration = {
    /**
     * Maps to CSS's **`text-emphasis-position`** property
     * @category RBProperty
     */
    textEmphasisPosition: TextEmphasisPositionPropValue;
};

export type TextEmphasisPositionDeclarationJSS = {
    textEmphasisPosition: ValueOrFunc<TextEmphasisPositionPropValue>;
};
