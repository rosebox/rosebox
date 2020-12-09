import { isObject } from '../../utils'
import { GlobalCssKeyword, Percentage, PropType, serializeAtomicValue, ValueOrFunc } from '../shared'

type PercentageOrNumber = Percentage | number

export type ArrayMin2Max4<T> =
    | {
          0: T
          1: T
      }
    | {
          0: T
          1: T
          2: T
      }
    | {
          0: T
          1: T
          2: T
          3: T
      }

/** Perfered over BorderImageSliceArray */
type BorderImageSliceObject = {
    offsets: PercentageOrNumber | ArrayMin2Max4<PercentageOrNumber>
    fill?: boolean
}

type BorderImageSliceArray =
    | [PercentageOrNumber, 'fill']
    | [PercentageOrNumber, PercentageOrNumber]
    | [PercentageOrNumber, PercentageOrNumber, 'fill']
    | [PercentageOrNumber, PercentageOrNumber, PercentageOrNumber]
    | [PercentageOrNumber, PercentageOrNumber, PercentageOrNumber, 'fill']
    | [PercentageOrNumber, PercentageOrNumber, PercentageOrNumber, PercentageOrNumber]
    | [PercentageOrNumber, PercentageOrNumber, PercentageOrNumber, PercentageOrNumber, 'fill']

/** @hide */
export type BorderImageSliceValue = PercentageOrNumber | BorderImageSliceObject | BorderImageSliceArray

const serializeArrayValue = (value: BorderImageSliceArray): string =>
    !Array.isArray(value)
        ? serializeAtomicValue(value)
        : (value as any).reduce((acc: any, item: any) => acc + ' ' + serializeAtomicValue(item), '').trim()

const serializeObjectValue = (x: BorderImageSliceObject): string => {
    const { offsets, fill } = x
    const offsetsSerialized = Array.isArray(offsets)
        ? serializeArrayValue(offsets as BorderImageSliceArray)
        : serializeAtomicValue(offsets as PercentageOrNumber)
    const fillSerialized = fill ? ' fill' : ''
    return `${offsetsSerialized}${fillSerialized}`
}

export const serializeBorderImageSlice = (type: PropType) => (x: BorderImageSlicePropValue) => {
    const propName = type === 'inline' ? 'borderImageSlice' : 'border-image-source'
    return {
        [propName]: isObject(x)
            ? serializeObjectValue(x as BorderImageSliceObject)
            : Array.isArray(x)
            ? serializeArrayValue(x as BorderImageSliceArray)
            : serializeAtomicValue(x as PercentageOrNumber | GlobalCssKeyword),
    }
}

/** @hide */
type BorderImageSlicePropValue = BorderImageSliceValue | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type BorderImageSliceDeclaration = {
    /**
     * A RB property that maps to CSS's **`border-image-slice`** property
     * @initial 100%
     * @definition https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017/#propdef-border-image-slice
     * @specification {@link https://www.w3.org/TR/2017/CR-css-backgrounds-3-20171017 CSS Backgrounds and Borders Module Level 3}.
     */
    borderImageSlice: BorderImageSlicePropValue
}

export type borderImageSliceDeclarationJSS = {
    BorderImageSlice: ValueOrFunc<BorderImageSlicePropValue>
}
