import { GlobalCssKeyword } from '..'
import { serializeHashMultiplier } from '../shared'

type Box = 'border-box' | 'padding-box' | 'content-box'

/** @hide */
type BackgroundOriginPropValue = Box | Box[] | GlobalCssKeyword

export const serializeBackgroundOrigin = (x: BackgroundOriginPropValue) => {
    return {
        backgroundOrigin: !Array.isArray(x) ? x : serializeHashMultiplier(x),
    }
}

/**
 * @category RBDeclarationTypeAlias
 */
export type backgroundOriginDeclaration = {
    /**
     * Maps to CSS's **`background-origin`** property
     * @initial padding-box
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-background-origin
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/ CSS Backgrounds and Borders Module Level 3}.
     */
    backgroundOrigin: BackgroundOriginPropValue
}
