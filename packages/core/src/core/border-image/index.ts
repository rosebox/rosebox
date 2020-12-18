import { BorderImageOutsetValue, serializeBorderImageOutsetPropValue } from '../border-image-outset'
import { BorderImageRepeatValue, serializeBorderImageRepeatPropValue } from '../border-image-repeat'
import { BorderImageSliceValue, serializeBorderImageSlicePropValue } from '../border-image-slice'
import { BorderImageSourceValue, serializeBorderImageSourcePropValue } from '../border-image-source'
import { BorderImageWidthValue, serializeBorderImageWidthPropValue } from '../border-image-width'
import { AtLeastOnePropRequired, GlobalCssKeyword, PropType, ValueOrFunc } from '../shared'

type BorderImageObject = AtLeastOnePropRequired<{
    source: BorderImageSourceValue
    slice: BorderImageSliceValue
    width: BorderImageWidthValue
    repeat: BorderImageRepeatValue
    outset: BorderImageOutsetValue
}>

/** @hide */
type BorderImagePropValue = BorderImageObject | GlobalCssKeyword

const serializeBorderImageObject = (x: BorderImageObject): string => {
    const source = x.source ? serializeBorderImageSourcePropValue(x.source) : 'none'
    const slice = x.slice ? serializeBorderImageSlicePropValue(x.slice) : '100%'
    const width = x.width ? serializeBorderImageWidthPropValue(x.width) : '1'
    const outset = x.outset ? serializeBorderImageOutsetPropValue(x.outset) : '0'
    const repeat = x.repeat ? serializeBorderImageRepeatPropValue(x.repeat) : 'stretch'
    return `${source} ${slice} / ${width} / ${outset} ${repeat}`
}

const serializeBorderImagePropValue = (x: BorderImageObject | GlobalCssKeyword): string =>
    typeof x === 'string' ? x : serializeBorderImageObject(x)

export const serializeBorderImage = (type: PropType) => (x: BorderImagePropValue) => {
    const propName = type === 'inline' ? 'borderImage' : 'border-image'
    return {
        [propName]: serializeBorderImagePropValue(x),
    }
}

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderImageDeclaration = {
    /**
     * Maps to CSS's **`border-image`** property
     * @initial visible
     * @definition https://www.w3.org/TR/2019/WD-css-tables-3-20190727/#propdef-border-image
     * @specification {@link https://www.w3.org/TR/2019/WD-css-tables-3-20190727/ CSS Table Module Level 3}.
     */
    borderImage: BorderImagePropValue
}
export type BorderImageDeclarationJSS = {
    borderImage: ValueOrFunc<BorderImagePropValue>
}
