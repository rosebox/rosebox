import { GlobalCssKeyword } from '..'
import { serializeHashMultiplier } from '../shared'

type TupleKeyword = 'repeat' | 'space' | 'round' | 'no-repeat'

type RepeatStyle = [TupleKeyword, TupleKeyword]

const serializeRepeatTuple = (x: RepeatStyle) => `${x[0]} ${x[1]}`

/** @hide */
type BackgroundRepeatPropValue = RepeatStyle | RepeatStyle[] | GlobalCssKeyword

export const serializeBackgroundRepeat = (x: BackgroundRepeatPropValue) => {
    return {
        backgroundRepeat:
            typeof x === 'string'
                ? x
                : !Array.isArray(x[0])
                ? serializeRepeatTuple(x as RepeatStyle)
                : serializeHashMultiplier(x as RepeatStyle[], serializeRepeatTuple),
    }
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BackgroundRepeatDeclaration = {
    /**
     * Maps to CSS's **`background-repeat`** property. The implemenation omits single keywords
     * and enforces tuples. To use "repeat-x" use [repeat, no-repeat], for "repeat-y" use [no-repeat, no-repeat]
     * @initial repeat
     *
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-background-repeat
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/ CSS Backgrounds and Borders Module Level 3}.
     */
    backgroundRepeat: BackgroundRepeatPropValue
}
