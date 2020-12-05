import { GlobalCssKeyword, PropType, ValueOrFunc } from '../shared'

type AnimationDirectionKeyword =
  | 'normal'
  | 'reverse'
  | 'alternate'
  | 'alternate-reverse'

/**
 * @hide
 */
export type AnimationDirection =
  | GlobalCssKeyword
  | AnimationDirectionKeyword
  | AnimationDirectionKeyword[]

export const serializeValue = (value: AnimationDirection): string | number =>
  !Array.isArray(value)
    ? value
    : value.reduce(
        (acc, item, idx) => acc + item + (idx === value.length - 1 ? '' : ', '),
        ''
      )

export const serializeAnimationDirection = (type: PropType) => (x: AnimationDirection) => {
  const propName = type === 'inline' ? 'animationDirection' : 'animation-direction'
  return {
    [propName]: serializeValue(x),
  }
}

/** @hide */
type AnimationDirectioPropValue = AnimationDirection

/**
 * @category RBDeclarationTypeAlias
 */
export type AnimationDirectionDeclaration = {
  /**
   * Maps to CSS's **`animation-direction`** property
   * @docsUrl https://www.rosebox.dev/api/#rb-prop-animationdirection
   * @initial normal
   * @basedOn https://drafts.csswg.org/css-animations/#animation-direction
   */
  animationDirection: AnimationDirectioPropValue
}
export type AnimationDirectionDeclarationJSS = {
  animationDirection: ValueOrFunc<AnimationDirectioPropValue>
}
