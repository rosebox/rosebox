import { LengthPercentage, Length } from '../shared/types'
import { Angle } from '../shared'

/**
 *
 * A type that maps to CSS's **`<transform-function>`** type.
 * @added 0.2.3
 */
export interface TransformFunction<A = any> {
  type: 'TransformFunction'
  valueConstructor: Function
  value: A extends 'translateX'
    ? [LengthPercentage]
    : A extends 'translateY'
    ? [LengthPercentage]
    : A extends 'translateZ'
    ? [LengthPercentage]
    : A extends 'translate'
    ? [LengthPercentage] | [LengthPercentage, LengthPercentage]
    : A extends 'translate3d'
    ? [LengthPercentage, LengthPercentage, LengthPercentage]
    : A extends 'scaleSingleAxis'
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
    : A extends 'skewSingle'
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
        number
      ]
    : A extends 'perspective'
    ? Length
    : any
}
