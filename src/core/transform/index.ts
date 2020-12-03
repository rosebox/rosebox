import {
  isTranslateX,
  serializeTranslateX,
  isTranslateY,
  serializeTranslateY,
  isTranslateZ,
  serializeTranslateZ,
  isTranslate,
  serializeTranslate,
  isTranslate3d,
  serializeTranslate3d,
} from './translate'
import { isGlobalCssKeyword, GlobalCssKeyword, ValueOrFunc } from '../shared'
import { TransformFunction } from './shared'
import {
  isScaleX,
  serializeScaleX,
  isScaleY,
  serializeScaleY,
  isScale,
  serializeScale,
  isScale3d,
  serializeScale3d,
  isScaleZ,
  serializeScaleZ,
} from './scale'
import {
  isRotateX,
  serializeRotateX,
  isRotateY,
  serializeRotateY,
  isRotateZ,
  serializeRotateZ,
  isRotate,
  serializeRotate,
  isRotate3d,
  serializeRotate3d,
} from './rotate'
import {
  isSkewX,
  serializeSkewX,
  isSkewY,
  serializeSkewY,
  isSkew,
  serializeSkew,
} from './skew'
import {
  isMatrix,
  serializeMatrix,
  isMatrix3d,
  serializeMatrix3d,
} from './matrix'
import { isPerspective, serializePerspective } from './perspective'

type TransformPropertyValue =
  | TransformFunction
  | TransformFunction[]
  | GlobalCssKeyword
  | 'none'

export const serializeTransformPropertyValue = (
  x: TransformPropertyValue
): string => {
  if (isGlobalCssKeyword(x) || x === 'none') return x
  else if (Array.isArray(x))
    return x.reduce(
      (acc, val, idx) =>
        idx !== x.length - 1
          ? `${acc}${serializeTransformPropertyValue(val)} `
          : `${acc}${serializeTransformPropertyValue(val)}`,
      ''
    )
  if (isTranslateX(x))
    return serializeTranslateX(x as TransformFunction<'translateX'>)
  if (isTranslateY(x))
    return serializeTranslateY(x as TransformFunction<'translateY'>)
  if (isTranslateZ(x))
    return serializeTranslateZ(x as TransformFunction<'translateZ'>)
  if (isTranslate(x))
    return serializeTranslate(x as TransformFunction<'translate'>)
  if (isTranslate3d(x))
    return serializeTranslate3d(x as TransformFunction<'translate3d'>)
  if (isScaleX(x))
    return serializeScaleX(x as TransformFunction<'scaleSingleAxis'>)
  if (isScaleY(x))
    return serializeScaleY(x as TransformFunction<'scaleSingleAxis'>)
  if (isScaleZ(x))
    return serializeScaleZ(x as TransformFunction<'scaleSingleAxis'>)
  if (isScale(x)) return serializeScale(x as TransformFunction<'scale'>)
  if (isScale3d(x)) return serializeScale3d(x as TransformFunction<'scale3d'>)
  if (isRotateX(x)) return serializeRotateX(x as TransformFunction<'rotateX'>)
  if (isRotateY(x)) return serializeRotateY(x as TransformFunction<'rotateY'>)
  if (isRotateZ(x)) return serializeRotateZ(x as TransformFunction<'rotateZ'>)
  if (isRotate(x)) return serializeRotate(x as TransformFunction<'rotate'>)
  if (isRotate3d(x))
    return serializeRotate3d(x as TransformFunction<'rotate3d'>)
  if (isSkewX(x)) return serializeSkewX(x as TransformFunction<'skewSingle'>)
  if (isSkewY(x)) return serializeSkewY(x as TransformFunction<'skewSingle'>)
  if (isSkew(x)) return serializeSkew(x as TransformFunction<'skew'>)
  if (isMatrix(x)) return serializeMatrix(x as TransformFunction<'matrix'>)
  if (isMatrix3d(x))
    return serializeMatrix3d(x as TransformFunction<'matrix3d'>)
  if (isPerspective(x))
    return serializePerspective(x as TransformFunction<'perspective'>)
  throw new Error('The value is not of type TransformFunction')
}

export const serializeTransform = (
  x: TransformPropertyValue
): {
  transform: string
} => ({
  transform: serializeTransformPropertyValue(x),
})

/** @hide */
type PropValue = TransformFunction | TransformFunction[] | GlobalCssKeyword | 'none'

/**
 * @category RBDeclarationTypeAlias
 */
export type TransformDeclaration = {
  /**
   * Maps to CSS's **`transform`** property
   * @category RBProperty
   * @formalSyntaxForValue relative | absolute | static | fixed | sticky
   * @added 0.2.3
   * @implementationReference https://www.w3.org/TR/2016/WD-css-position-3-20160517/#position-property
   */
  transform: PropValue
}

export type TransformDeclarationJSS = {
  transform: ValueOrFunc<PropValue>
}

export { matrix, matrix3d } from './matrix'
export { perspective } from './perspective'
export { rotateX, rotateY, rotateZ, rotate, rotate3d } from './rotate'
export { scaleX, scaleY, scaleZ, scale, scale3d } from './scale'
export { skewX, skewY, skew } from './skew'
export {
  translateX,
  translateY,
  translateZ,
  translate,
  translate3d,
} from './translate'
