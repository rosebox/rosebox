import { LengthPercentage, Length, Angle, RBType } from '..'
import { serializeAtomicValue } from '../shared'

const isMatrix = (x: TransformFunction): x is TransformFunction<'matrix'> =>
    x.valueConstructor === TransformFunction.matrix
const isMatrix3d = (x: TransformFunction): x is TransformFunction<'matrix3d'> =>
    x.valueConstructor === TransformFunction.matrix3d
const isPerspective = (
    x: TransformFunction,
): x is TransformFunction<'perspective'> =>
    x.valueConstructor === TransformFunction.perspective
const isRotateX = (x: TransformFunction): x is TransformFunction<'rotateX'> =>
    x.valueConstructor === TransformFunction.rotateX
const isRotateY = (x: TransformFunction): x is TransformFunction<'rotateY'> =>
    x.valueConstructor === TransformFunction.rotateY
const isRotateZ = (x: TransformFunction): x is TransformFunction<'rotateZ'> =>
    x.valueConstructor === TransformFunction.rotateZ
const isRotate = (x: TransformFunction): x is TransformFunction<'rotate'> =>
    x.valueConstructor === TransformFunction.rotate
const isRotate3d = (x: TransformFunction): x is TransformFunction<'rotate3d'> =>
    x.valueConstructor === TransformFunction.rotate3d
const isScaleX = (x: TransformFunction): boolean =>
    x.valueConstructor === TransformFunction.scaleX
const isScaleY = (x: TransformFunction): boolean =>
    x.valueConstructor === TransformFunction.scaleY
const isScaleZ = (x: TransformFunction): boolean =>
    x.valueConstructor === TransformFunction.scaleZ
const isScale = (x: TransformFunction): boolean =>
    x.valueConstructor === TransformFunction.scale
const isScale3d = (x: TransformFunction): boolean =>
    x.valueConstructor === TransformFunction.scale3d
const isSkewX = (x: TransformFunction): boolean =>
    x.valueConstructor === TransformFunction.skewX
const isSkewY = (x: TransformFunction): boolean =>
    x.valueConstructor === TransformFunction.skewY
const isSkew = (x: TransformFunction): boolean =>
    x.valueConstructor === TransformFunction.skew
const isTranslateX = (x: TransformFunction): boolean =>
    x.valueConstructor === TransformFunction.translateX
const isTranslateY = (x: TransformFunction): boolean =>
    x.valueConstructor === TransformFunction.translateY
const isTranslateZ = (x: TransformFunction): boolean =>
    x.valueConstructor === TransformFunction.translateZ
const isTranslate = (x: TransformFunction): boolean =>
    x.valueConstructor === TransformFunction.translate
const isTranslate3d = (x: TransformFunction): boolean =>
    x.valueConstructor === TransformFunction.translate3d

const serializeSkewX = (x: TransformFunction<'skewX'>): string =>
    `skewX(${serializeAtomicValue(x.data)})`
const serializeSkewY = (x: TransformFunction<'skewY'>): string =>
    `skewY(${serializeAtomicValue(x.data)})`
const serializeSkew = (x: TransformFunction<'skew'>): string =>
    `skew(${serializeAtomicValue(x.data[0])}${
        x.data[1] ? `, ${serializeAtomicValue(x.data[1])}` : ''
    })`

const serializeMatrix = (x: TransformFunction<'matrix'>): string =>
    `matrix(${x.data.reduce(
        (acc, val, idx) =>
            idx !== x.data.length - 1 ? acc + `${val}, ` : acc + val,
        '',
    )})`

const serializeMatrix3d = (x: TransformFunction<'matrix3d'>): string =>
    `matrix3d(${x.data.reduce(
        (acc, val, idx) =>
            idx !== x.data.length - 1 ? acc + `${val}, ` : acc + val,
        '',
    )})`

const serializePerspective = (x: TransformFunction<'perspective'>): string =>
    `perspective(${serializeAtomicValue(x.data)})`

const serializeScaleX = (x: TransformFunction<'scaleX'>): string =>
    `scaleX(${x.data})`
const serializeScaleY = (x: TransformFunction<'scaleY'>): string =>
    `scaleY(${x.data})`
const serializeScaleZ = (x: TransformFunction<'scaleZ'>): string =>
    `scaleZ(${x.data})`

const serializeScale = (x: TransformFunction<'scale'>): string =>
    `scale(${x.data[0]}${x.data[1] ? `, ${x.data[1]}` : ''})`

const serializeScale3d = (x: TransformFunction<'scale3d'>): string =>
    `scale3d(${x.data[0]}, ${x.data[1]}, ${x.data[2]})`

const serializeRotateX = (x: TransformFunction<'rotateX'>): string =>
    `rotateX(${serializeAtomicValue(x.data)})`

const serializeRotateY = (x: TransformFunction<'rotateY'>): string =>
    `rotateY(${serializeAtomicValue(x.data)})`

const serializeRotateZ = (x: TransformFunction<'rotateZ'>): string =>
    `rotateZ(${serializeAtomicValue(x.data)})`

const serializeRotate = (x: TransformFunction<'rotate'>): string =>
    `rotate(${serializeAtomicValue(x.data)})`

const serializeRotate3d = (x: TransformFunction<'rotate3d'>): string => {
    const [x0, x1, x2, x3] = x.data
    return `rotate3d(${x0}, ${x1}, ${x2}, ${serializeAtomicValue(x3)})`
}

const serializeTranslateX = (x: TransformFunction<'translateX'>): string =>
    `translateX(${serializeAtomicValue(x.data[0])})`

const serializeTranslateY = (value: TransformFunction<'translateY'>): string =>
    `translateY(${serializeAtomicValue(value.data[0])})`

const serializeTranslateZ = (value: TransformFunction<'translateZ'>): string =>
    `translateZ(${serializeAtomicValue(value.data[0])})`

const serializeTranslate = (value: TransformFunction<'translate'>): string => {
    const xAxis = serializeAtomicValue(value.data[0])
    const yAxis = value.data[1]
        ? `, ${serializeAtomicValue(value.data[1])}`
        : ''
    const zAxis = value.data[2]
        ? `, ${serializeAtomicValue(value.data[2])}`
        : ''
    return `translate(${xAxis}${yAxis}${zAxis})`
}

const serializeTranslate3d = (
    value: TransformFunction<'translate3d'>,
): string =>
    `translate3d(${serializeAtomicValue(value.data[0])}, ${serializeAtomicValue(
        value.data[1],
    )}, ${serializeAtomicValue(value.data[2])})`

const serializeTransformFunction = (x: TransformFunction): string => {
    if (isMatrix(x)) return serializeMatrix(x)
    if (isMatrix3d(x)) return serializeMatrix3d(x)
    if (isPerspective(x)) return serializePerspective(x)
    if (isRotateX(x)) return serializeRotateX(x)
    if (isRotateY(x)) return serializeRotateY(x)
    if (isRotateZ(x)) return serializeRotateZ(x)
    if (isRotate(x)) return serializeRotate(x)
    if (isRotate3d(x)) return serializeRotate3d(x)
    if (isScaleX(x)) return serializeScaleX(x)
    if (isScaleY(x)) return serializeScaleY(x)
    if (isScaleZ(x)) return serializeScaleZ(x)
    if (isScale(x)) return serializeScale(x)
    if (isScale(x)) return serializeScale(x)
    if (isScale3d(x)) return serializeScale3d(x)
    if (isSkewX(x)) return serializeSkewX(x)
    if (isSkewY(x)) return serializeSkewY(x)
    if (isSkew(x)) return serializeSkew(x)
    if (isTranslateX(x)) return serializeTranslateX(x)
    if (isTranslateY(x)) return serializeTranslateY(x)
    if (isTranslateZ(x)) return serializeTranslateZ(x)
    if (isTranslate(x)) return serializeTranslate(x)
    if (isTranslate3d(x)) return serializeTranslate3d(x)
    throw new Error('Unrecognized type')
}

type TransformationType =
    | 'scaleX'
    | 'scaleY'
    | 'scaleZ'
    | 'scale'
    | 'scale3d'
    | 'translateX'
    | 'translateY'
    | 'translateZ'
    | 'translate'
    | 'translate3d'
    | 'rotateX'
    | 'rotateY'
    | 'rotateZ'
    | 'rotate'
    | 'rotate3d'
    | 'skewX'
    | 'skewY'
    | 'skew'
    | 'matrix'
    | 'matrix3d'
    | 'perspective'

/**
 *
 * A type that maps to CSS's **`<transform-function>`** type.
 */
export class TransformFunction<
    A extends TransformationType = TransformationType
> implements RBType<any> {
    serialize: () => string
    valueConstructor: Function
    data: A extends 'translateX'
        ? [LengthPercentage]
        : A extends 'translateY'
        ? [LengthPercentage]
        : A extends 'translateZ'
        ? [Length]
        : A extends 'translate'
        ?
              | [LengthPercentage]
              | [LengthPercentage, LengthPercentage]
              | [LengthPercentage, LengthPercentage, LengthPercentage]
        : A extends 'translate3d'
        ? [LengthPercentage, LengthPercentage, LengthPercentage]
        : A extends 'scaleX'
        ? number
        : A extends 'scaleY'
        ? number
        : A extends 'scaleZ'
        ? number
        : A extends 'scale'
        ? [number] | [number, number]
        : A extends 'scale3d'
        ? [number, number, number]
        : A extends 'rotateX'
        ? Angle
        : A extends 'rotateY'
        ? Angle
        : A extends 'rotateZ'
        ? Angle
        : A extends 'rotate'
        ? Angle
        : A extends 'rotate3d'
        ? [number, number, number, Angle]
        : A extends 'skewX'
        ? Angle
        : A extends 'skewY'
        ? Angle
        : A extends 'skew'
        ? [Angle] | [Angle, Angle]
        : A extends 'matrix'
        ? [number, number, number, number, number, number]
        : A extends 'matrix3d'
        ? [
              number,
              number,
              number,
              number,
              number,
              number,
              number,
              number,
              number,
              number,
              number,
              number,
              number,
              number,
              number,
              number,
          ]
        : A extends 'perspective'
        ? Length
        : any

    private constructor(data: any, valueConstructor: Function) {
        this.data = data
        this.valueConstructor = valueConstructor
        this.serialize = () => serializeTransformFunction(this)
    }

    /** Constructs a value of type **`TransformFunction<'matrix'>`**. */
    static matrix(
        x1: number,
        x2: number,
        x3: number,
        x4: number,
        x5: number,
        x6: number,
    ): TransformFunction<'matrix'> {
        return new TransformFunction(
            [x1, x2, x3, x4, x5, x6],
            TransformFunction.matrix,
        )
    }

    /** Constructs a value of type **`TransformFunction<'matrix3d'>`**. */
    static matrix3d(
        x1: number,
        x2: number,
        x3: number,
        x4: number,
        x5: number,
        x6: number,
        x7: number,
        x8: number,
        x9: number,
        x10: number,
        x11: number,
        x12: number,
        x13: number,
        x14: number,
        x15: number,
        x16: number,
    ): TransformFunction<'matrix3d'> {
        return new TransformFunction(
            [
                x1,
                x2,
                x3,
                x4,
                x5,
                x6,
                x7,
                x8,
                x9,
                x10,
                x11,
                x12,
                x13,
                x14,
                x15,
                x16,
            ],
            TransformFunction.matrix3d,
        )
    }

    /** Constructs a value of type **`TransformFunction<'perspective'>`**. */
    static perspective(x: Length): TransformFunction<'perspective'> {
        return new TransformFunction(x, TransformFunction.perspective)
    }

    /** Constructs a value of type **`TransformFunction<'rotateX'>`**. */
    static rotateX(x: Angle): TransformFunction<'rotateX'> {
        return new TransformFunction(x, TransformFunction.rotateX)
    }

    /** Constructs a value of type **`TransformFunction<'rotateY'>`**. */
    static rotateY(x: Angle): TransformFunction<'rotateY'> {
        return new TransformFunction(x, TransformFunction.rotateY)
    }

    /** Constructs a value of type **`TransformFunction<'rotateZ'>`**. */
    static rotateZ(x: Angle): TransformFunction<'rotateZ'> {
        return new TransformFunction(x, TransformFunction.rotateZ)
    }

    /** Constructs a value of type **`TransformFunction<'rotate'>`**. */
    static rotate(x: Angle): TransformFunction<'rotate'> {
        return new TransformFunction(x, TransformFunction.rotate)
    }

    /** Constructs a value of type **`TransformFunction<'rotate3d'>`**. */
    static rotate3d(
        x: number,
        y: number,
        z: number,
        a: Angle,
    ): TransformFunction<'rotate3d'> {
        return new TransformFunction([x, y, z, a], TransformFunction.rotate3d)
    }

    /** Constructs a value of type **`TransformFunction<'scaleX'>`**. */
    static scaleX(x: number): TransformFunction<'scaleX'> {
        return new TransformFunction(x, TransformFunction.scaleX)
    }

    /** Constructs a value of type **`TransformFunction<'scaleY'>`**. */
    static scaleY(x: number): TransformFunction<'scaleY'> {
        return new TransformFunction(x, TransformFunction.scaleY)
    }

    /** Constructs a value of type **`TransformFunction<'scaleZ'>`**. */
    static scaleZ(x: number): TransformFunction<'scaleZ'> {
        return new TransformFunction(x, TransformFunction.scaleZ)
    }

    /** Constructs a value of type **`TransformFunction<'scale'>`**. */
    static scale(x: number, y?: number): TransformFunction<'scale'> {
        return new TransformFunction(y ? [x, y] : [x], TransformFunction.scale)
    }

    /** Constructs a value of type **`TransformFunction<'scale3d'>`**. */
    static scale3d(
        x: number,
        y: number,
        z: number,
    ): TransformFunction<'scale3d'> {
        return new TransformFunction([x, y, z], TransformFunction.scale3d)
    }

    /** Constructs a value of type **`TransformFunction<'skewX'>`**. */
    static skewX(x: Angle): TransformFunction<'skewX'> {
        return new TransformFunction(x, TransformFunction.skewX)
    }

    /** Constructs a value of type **`TransformFunction<'skewY'>`**. */
    static skewY(x: Angle): TransformFunction<'skewY'> {
        return new TransformFunction(x, TransformFunction.skewY)
    }

    /** Constructs a value of type **`TransformFunction<'skew'>`**. */
    static skew(x: Angle, y?: Angle): TransformFunction<'skew'> {
        return new TransformFunction(y ? [x, y] : [x], TransformFunction.skew)
    }

    /** Constructs a value of type **`TransformFunction<'translateX'>`**. */
    static translateX(x: LengthPercentage): TransformFunction<'translateX'> {
        return new TransformFunction([x], TransformFunction.translateX)
    }

    /** Constructs a value of type **`TransformFunction<'translateY'>`**. */
    static translateY(x: LengthPercentage): TransformFunction<'translateY'> {
        return new TransformFunction([x], TransformFunction.translateY)
    }

    /** Constructs a value of type **`TransformFunction<'translateZ'>`**. */
    static translateZ(x: LengthPercentage): TransformFunction<'translateZ'> {
        return new TransformFunction([x], TransformFunction.translateZ)
    }

    /** Constructs a value of type **`TransformFunction<'translate'>`**. */
    static translate(
        x: LengthPercentage,
        y?: LengthPercentage,
        z?: LengthPercentage,
    ): TransformFunction<'translate'> {
        return new TransformFunction([x, y, z], TransformFunction.translate)
    }

    /** Constructs a value of type **`TransformFunction<'translate3d'>`**. */
    static translate3d(
        x: LengthPercentage,
        y: LengthPercentage,
        z: LengthPercentage,
    ): TransformFunction<'translate3d'> {
        return new TransformFunction([x, y, z], TransformFunction.translate3d)
    }
}

/**
 * Constructs a value of type **`TransformFunction<'matrix'>`**.
 * @category Value constructor
 */
export const matrix = TransformFunction.matrix

/**
 * Constructs a value of type **`TransformFunction<'matrix3d'>`**.
 * @category Value constructor
 */
export const matrix3d = TransformFunction.matrix3d

/**
 * Constructs a value of type **`TransformFunction<'perspective'>`**.
 * @category Value constructor
 */
export const perspective = TransformFunction.perspective

/**
 * Constructs a value of type **`TransformFunction<'rotateX'>`**.
 * @category Value constructor
 */
export const rotateX = TransformFunction.rotateX

/**
 * Constructs a value of type **`TransformFunction<'rotateY'>`**.
 * @category Value constructor
 */
export const rotateY = TransformFunction.rotateY

/**
 * Constructs a value of type **`TransformFunction<'rotateZ'>`**.
 * @category Value constructor
 */
export const rotateZ = TransformFunction.rotateZ

/**
 * Constructs a value of type **`TransformFunction<'rotate'>`**.
 * @category Value constructor
 */
export const rotate = TransformFunction.rotate

/**
 * Constructs a value of type **`TransformFunction<'rotate3d'>`**.
 * @category Value constructor
 */
export const rotate3d = TransformFunction.rotate3d

/**
 * Constructs a value of type **`TransformFunction<'scaleX'>`**.
 * @category Value constructor
 */
export const scaleX = TransformFunction.scaleX

/**
 * Constructs a value of type **`TransformFunction<'scaleY'>`**.
 * @category Value constructor
 */
export const scaleY = TransformFunction.scaleY

/**
 * Constructs a value of type **`TransformFunction<'scaleZ'>`**.
 * @category Value constructor
 */
export const scaleZ = TransformFunction.scaleZ

/**
 * Constructs a value of type **`TransformFunction<'scale'>`**.
 * @category Value constructor
 */
export const scale = TransformFunction.scale

/**
 * Constructs a value of type **`TransformFunction<'scale3d'>`**.
 * @category Value constructor
 */
export const scale3d = TransformFunction.scale3d

/**
 * Constructs a value of type **`TransformFunction<'skewX'>`**.
 * @category Value constructor
 */
export const skewX = TransformFunction.skewX

/**
 * Constructs a value of type **`TransformFunction<'skewY'>`**.
 * @category Value constructor
 */
export const skewY = TransformFunction.skewY

/**
 * Constructs a value of type **`TransformFunction<'skew'>`**.
 * @category Value constructor
 */
export const skew = TransformFunction.skew

/**
 * Constructs a value of type **`TransformFunction<'translateX'>`**.
 * @category Value constructor
 */
export const translateX = TransformFunction.translateX

/**
 * Constructs a value of type **`TransformFunction<'translateY'>`**.
 * @category Value constructor
 */
export const translateY = TransformFunction.translateY

/**
 * Constructs a value of type **`TransformFunction<'translateZ'>`**.
 * @category Value constructor
 */
export const translateZ = TransformFunction.translateZ

/**
 * Constructs a value of type **`TransformFunction<'translate'>`**.
 * @category Value constructor
 */
export const translate = TransformFunction.translate

/**
 * Constructs a value of type **`TransformFunction<'translate3d'>`**.
 * @category Value constructor
 */
export const translate3d = TransformFunction.translate3d
