import { GlobalCssKeyword, Position, PropType, ValueOrFunc } from '../shared'

/**
 * @hide
 */
type BackfaceVisibility = 'visible' | 'hidden'

export const serializeBackfaceVisibility = (type: PropType) => (
  x: BackfaceVisibility | GlobalCssKeyword
) => {
  const propName = type === 'inline' ? 'backfaceVisibility' : 'backface-visibility'
  return ({
    [propName]: x,
  })
}

/** @hide */
type PropValue = BackfaceVisibility | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type BackfaceVisibilityDeclaration = {
  /**
   * Maps to CSS's **`backface-visibility`** property
   * @category RBProperty
   */
  backfaceVisibility: PropValue
}
export type BackfaceVisibilityDeclarationJSS = {
  backfaceVisibility: ValueOrFunc<PropValue>
}
