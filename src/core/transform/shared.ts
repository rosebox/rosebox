import { LengthPercentage } from '../shared/types'
import { Angle } from '../shared'

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
    ? Angle | 0
    : A extends 'rotateY'
    ? Angle | 0
    : A extends 'rotateZ'
    ? Angle
    : A extends 'rotate'
    ? Angle
    : A extends 'rotate3d'
    ? [number, number, number, Angle]
    : A extends 'skewSingle'
    ? Angle | 0
    : A extends 'skew'
    ? [Angle | 0] | [Angle | 0, Angle | 0]
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
    : any
}
