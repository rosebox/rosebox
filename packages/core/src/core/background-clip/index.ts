import { GlobalCssKeyword } from '..'
import { serializeAtomicValue, serializeHashMultiplier } from '../shared'

type Box = 'border-box' | 'padding-box' | 'content-box'

/** @hide */
type BackgroundClipPropValue = Box | Box[] | GlobalCssKeyword

export const serializebackgroundClip = (x: BackgroundClipPropValue) => {
    return {
        backgroundClip: !Array.isArray(x) ? x : serializeHashMultiplier(x, serializeAtomicValue),
    }
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BackgroundClipDeclaration = {
    /**
     * Maps to CSS's **`background-clip`** property
     * @initial padding-box
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-background-clip
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/ CSS Backgrounds and Borders Module Level 3}.
     */
    backgroundClip: BackgroundClipPropValue
}
