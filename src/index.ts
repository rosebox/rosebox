import { CSSProperties } from 'react'
import {
  overflowX,
  overflow,
  overflowY,
  OverflowXDeclaration,
  OverflowYDeclaration,
  OverflowDeclaration,
} from './core/overflow'
import { textAlign } from './core/text-align'
import { textTransform, TextTransformDeclaration } from './core/text-transform'
import { display } from './core/display'
import { WidthDeclaration, width } from './core/width'
import { HeightDeclaration, height } from './core/height'
import { BgColorDeclaration, bgColor } from './core/background-color'
import {
  top,
  TopDeclaration,
  RightDeclaration,
  BottomDeclaration,
  LeftDeclaration,
  right,
  bottom,
  left,
} from './core/box-offsets/internal'
import { BoxSizingDeclaration, boxSizing } from './core/box-sizing/internal'
import { color } from './core/color'
import { ColorDeclaration } from './core/color/internal'
import { MaxHeightDeclaration, maxHeight } from './core/max-height'
import { maxWidth, MaxWidthDeclaration } from './core/max-width'
import { MinHeightDeclaration, minHeight } from './core/min-height'
import { MinWidthDeclaration, minWidth } from './core/min-width'
import { OpacityDeclaration, opacity } from './core/opacity'
import { PositionDeclaration, position } from './core/position'
import { VisibilityDeclration, visibility } from './core/visibility'
import {
  BorderColorDeclaration,
  borderColor,
  BorderTopColorDeclaration,
  BorderRightColorDeclaration,
  BorderBottomColorDeclaration,
  BorderLeftColorDeclaration,
  borderTopColor,
  borderRightColor,
  borderBottomColor,
  borderLeftColor,
} from './core/border-color'
import { CursorDeclaration, cursor } from './core/cursor'
import { DisplayDeclaration } from './core/display/internal'
import {
  BorderTopRightRadiusDeclaration,
  BorderBottomRightRadiusDeclaration,
  BorderBottomLeftRadiusDeclaration,
  BorderRadiusDeclaration,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  BorderTopLeftRadiusDeclaration,
  borderTopLeftRadius,
  borderRadius,
} from './core/border-radius'
import {
  BorderTopStyleDeclaration,
  BorderRightStyleDeclaration,
  BorderBottomStyleDeclaration,
  BorderLeftStyleDeclaration,
  BorderStyleDeclaration,
  borderTopStyle,
  borderRightStyle,
  borderBottomStyle,
  borderLeftStyle,
  borderStyle,
} from './core/border-style'
import {
  BorderTopWidthDeclaration,
  borderTopWidth,
  BorderRightWidthDeclaration,
  borderRightWidth,
  BorderBottomWidthDeclaration,
  borderBottomWidth,
  BorderLeftWidthDeclaration,
  borderLeftWidth,
  BorderWidthDeclaration,
  borderWidth,
} from './core/border-width'
import { ZIndexDeclaration, zIndex } from './core/z-index'
import {
  TextDecorationDeclaration,
  textDecoration,
} from './core/text-decoration'
import {
  BorderTopDeclaration,
  borderTop,
  BorderRightDeclaration,
  borderRight,
  BorderBottomDeclaration,
  borderBottom,
} from './core/border'

export * from './core/shared/value-constructors'
export * from './core/background-color'
export * from './core/box-offsets'
export * from './core/box-sizing'
export * from './core/color'
export * from './core/display'
export * from './core/flex'
export * from './core/fonts'
export * from './core/height'
export * from './core/margin'
export * from './core/padding'
export * from './core/max-height'
export * from './core/max-width'
export * from './core/min-height'
export * from './core/min-width'
export * from './core/opacity'
export * from './core/position'
export * from './core/visibility'
export * from './core/width'
export * from './core/border'
export * from './core/border-color'
export * from './core/border-radius'
export * from './core/border-style'
export * from './core/border-width'
export * from './core/letter-spacing'
export * from './core/line-height'
export * from './core/overflow'
export * from './core/text-align'
export * from './core/text-decoration'
export * from './core/text-transform'
export * from './core/z-index'
export * from './core/font-family'
export * from './core/cursor'
export * from './react'

type RoseBoxCssProperties_ = ReturnType<typeof display> &
  ReturnType<typeof overflowX> &
  ReturnType<typeof overflowY> &
  ReturnType<typeof overflow> &
  ReturnType<typeof textAlign> &
  ReturnType<typeof textTransform>

type RoseBoxCssPropertiesPartial = Partial<
  Omit<React.CSSProperties, keyof RoseBoxCssProperties_> & RoseBoxCssProperties_
>

export type __RoseBoxCssProperties__ = Partial<
  WidthDeclaration &
    HeightDeclaration &
    BgColorDeclaration &
    ColorDeclaration &
    TopDeclaration &
    RightDeclaration &
    BottomDeclaration &
    LeftDeclaration &
    BoxSizingDeclaration &
    MaxHeightDeclaration &
    MaxWidthDeclaration &
    MinHeightDeclaration &
    MinWidthDeclaration &
    OpacityDeclaration &
    OverflowXDeclaration &
    OverflowYDeclaration &
    OverflowDeclaration &
    PositionDeclaration &
    VisibilityDeclration &
    BorderColorDeclaration &
    BorderTopColorDeclaration &
    BorderRightColorDeclaration &
    BorderBottomColorDeclaration &
    BorderLeftColorDeclaration &
    CursorDeclaration &
    DisplayDeclaration &
    BorderTopRightRadiusDeclaration &
    BorderBottomRightRadiusDeclaration &
    BorderBottomLeftRadiusDeclaration &
    BorderTopLeftRadiusDeclaration &
    BorderRadiusDeclaration &
    BorderTopStyleDeclaration &
    BorderRightStyleDeclaration &
    BorderBottomStyleDeclaration &
    BorderLeftStyleDeclaration &
    BorderStyleDeclaration &
    BorderTopWidthDeclaration &
    BorderTopWidthDeclaration &
    BorderRightWidthDeclaration &
    BorderBottomWidthDeclaration &
    BorderLeftWidthDeclaration &
    BorderWidthDeclaration &
    ZIndexDeclaration &
    TextTransformDeclaration &
    TextDecorationDeclaration &
    BorderTopDeclaration &
    BorderRightDeclaration &
    BorderBottomDeclaration
>

const funcMapper = {
  width,
  height,
  minHeight,
  maxHeight,
  minWidth,
  maxWidth,
  backgroundColor: bgColor,
  color,
  top,
  right,
  bottom,
  left,
  boxSizing,
  opacity,
  overflowX,
  overflowY,
  overflow,
  position,
  visibility,
  borderColor,
  borderTopColor,
  borderRightColor,
  borderBottomColor,
  borderLeftColor,
  cursor,
  display,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  borderTopLeftRadius,
  borderRadius,
  borderTopStyle,
  borderRightStyle,
  borderBottomStyle,
  borderLeftStyle,
  borderStyle,
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftWidth,
  borderWidth,
  zIndex,
  textTransform,
  textDecoration,
  borderTop,
  borderRight,
  borderBottom,
}

export const __style2__ = (obj: __RoseBoxCssProperties__) => {
  return Object.keys(obj).reduce((acc, key) => {
    return Object.assign({}, acc, {
      [key]: (funcMapper as any)[key]((obj as any)[key])[key],
    })
  }, {})
}

/**
 *
 * **`RoseBoxCssProperties`**
 * @added 0.1.9
 */
export interface RoseBoxCssProperties extends RoseBoxCssPropertiesPartial {}

// Unexport
export const merge = (obj1: object, obj2: object): object =>
  Object.assign({}, obj1, obj2)

/**
 * A Type assertion function that tells the compiler to consider a style object of type **`RoseBoxCssProperties`** as a **`React.CSSProperties`** style object.
 * @category Utility function
 * @added 0.1.4
 * @updated 0.1.91
 */
export const style = (x: RoseBoxCssProperties): CSSProperties =>
  x as CSSProperties

/**
 * Merges an array of **`RoseBoxCssProperties`** objects into a single **`RoseBoxCssProperties`** object.
 * @category Utility function
 * @added 0.1.9
 */
export const compose = (x: RoseBoxCssProperties[]): RoseBoxCssProperties =>
  x.reduce((acc, val) => merge(acc, val), {}) as RoseBoxCssProperties
