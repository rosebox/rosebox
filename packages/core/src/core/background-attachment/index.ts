import { GlobalCssKeyword, PropType } from '../shared'

export const serializeBackgroundAttachment = (type: PropType) => (x: BackgroundAttachmentPropValue) => {
    const propName = type === 'inline' ? 'backgroundAttachment' : 'background-attachment'
    return {
        [propName]: x,
    }
}

/** @hide */
type BackgroundAttachmentPropValue = 'scroll' | 'fixed' | 'local' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type BackgroundAttachmentDeclaration = {
    /**
     * A RB property that maps to CSS's **`background-attachment`** property
     * @initial auto
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#typedef-attachment
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    backgroundAttachment: BackgroundAttachmentPropValue
}
