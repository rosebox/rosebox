import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type FontVariantEmojiPropValue = 'auto' | 'text' | 'emoji' | 'unicode' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontVariantEmojiDeclaration = {
    /**
     * Maps to CSS's **`font-variant-emoji`** property
     * @initial auto
     * @definition https://www.w3.org/TR/2020/WD-css-fonts-4-20201117/#font-variant-emoji-prop
     * @specification {@link https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/ CSS Fonts Module Level 4}
     */
    fontVariantEmoji: FontVariantEmojiPropValue
}

export type FontVariantEmojiDeclarationJSS = {
    fontVariantEmoji: ValueOrFunc<FontVariantEmojiPropValue>
}
