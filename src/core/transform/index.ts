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
  serializeTranslate3d
} from './translate'
import { isGlobalCssKeyword, GlobalCssKeyword } from '../shared/types'
import { TransformFunction } from './shared'
import {
  isScaleX,
  serializeScaleX,
  isScaleY,
  serializeScaleY,
  isScale,
  serializeScale,
  isScale3d,
  serializeScale3d
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
  serializeRotate3d
} from './rotate'

type TransformPropertyValue = TransformFunction<any> | GlobalCssKeyword

export const serializeTransformPropertyValue = (
  x: TransformPropertyValue
): string => {
  if (isGlobalCssKeyword(x)) return x
  else if (isTranslateX(x)) {
    return serializeTranslateX(x as TransformFunction<'translateX'>)
  } else if (isTranslateY(x)) {
    return serializeTranslateY(x as TransformFunction<'translateY'>)
  } else if (isTranslateZ(x))
    return serializeTranslateZ(x as TransformFunction<'translateZ'>)
  else if (isTranslate(x))
    return serializeTranslate(x as TransformFunction<'translate'>)
  else if (isTranslate3d(x))
    return serializeTranslate3d(x as TransformFunction<'translate3d'>)
  else if (isScaleX(x))
    return serializeScaleX(x as TransformFunction<'scaleSingleAxis'>)
  else if (isScaleY(x))
    return serializeScaleY(x as TransformFunction<'scaleSingleAxis'>)
  else if (isScale(x)) return serializeScale(x as TransformFunction<'scale'>)
  else if (isScale3d(x))
    return serializeScale3d(x as TransformFunction<'scale3d'>)
  else if (isRotateX(x))
    return serializeRotateX(x as TransformFunction<'rotateX'>)
  else if (isRotateY(x))
    return serializeRotateY(x as TransformFunction<'rotateY'>)
  else if (isRotateZ(x))
    return serializeRotateZ(x as TransformFunction<'rotateZ'>)
  else if (isRotate(x)) return serializeRotate(x as TransformFunction<'rotate'>)
  else if (isRotate3d(x))
    return serializeRotate3d(x as TransformFunction<'rotate3d'>)
  else throw new Error('The value is not of type TransformFunction')
}

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
  transform: TransformFunction | GlobalCssKeyword | 'none'
}

export {
  translateX,
  translateY,
  translateZ,
  translate,
  translate3d
} from './translate'

export { scaleX, scaleY, scaleZ, scale, scale3d } from './scale'
