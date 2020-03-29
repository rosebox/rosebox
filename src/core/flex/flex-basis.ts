import {
  GlobalCssKeyword,
  Width,
  isGlobalCssKeyword,
  isWidthType
} from '../shared/types'
import { serializeKeyword, serializeWidth } from '../shared/serializers'

/**
 * @skip
 * */
export type FlexBasis = 'content' | Width

export const isFlexBasis = (value: any): value is FlexBasis =>
  value === 'content' || isWidthType(value)
export const serializeFlexBasis = (value: FlexBasis): string =>
  value === 'content'
    ? 'content'
    : isGlobalCssKeyword(value)
    ? serializeKeyword(value)
    : serializeWidth(value)

/**
 * Creates a declaration object for the **`flex-basis`** property.
 * @category Declaration function
 * @formalSyntax content | <‘width’>
 * @added 0.1.4
 * @imlementationReference https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#flex-basis-property
 */
export const basis = (value: FlexBasis | GlobalCssKeyword) => ({
  flexBasis: isGlobalCssKeyword(value)
    ? serializeKeyword(value)
    : serializeFlexBasis(value)
})