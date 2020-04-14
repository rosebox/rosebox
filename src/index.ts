import { CSSProperties } from 'react'
import {
  overflowX,
  overflow,
  overflowY,
  OverflowXDeclaration,
  OverflowYDeclaration,
  OverflowDeclaration,
} from './core/overflow'
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
  BorderLeftDeclaration,
  borderLeft,
  BorderDeclaration,
  border,
} from './core/border'
import { FontSizeDeclaration, fontSize } from './core/font-size'
import { FontWeightDeclaration, fontWeight } from './core/font-weight'
import { FontFamilyDeclaration, fontFamily } from './core/font-family'
import { FlexBasisDeclaration, flexBasis } from './core/flexbox/flex-basis'
import {
  FlexDirectionDeclaration,
  flexDirection,
} from './core/flexbox/flex-direction'
import { FlexGrowDeclaration, flexGrow } from './core/flexbox/flex-grow'
import { FlexShrinkDeclaration, flexShrink } from './core/flexbox/flex-shrink'
import { FlexWrapDeclaration, flexWrap } from './core/flexbox/flex-wrap'
import { FlexDeclaration, flex } from './core/flexbox/flex'
import { LetterSpacingDeclaration, letterSpacing } from './core/letter-spacing'
import { LineHeightDeclaration, lineHeight } from './core/line-height'
import {
  MarginTopDeclaration,
  marginTop,
  MarginRightDeclaration,
  marginRight,
  MarginBottomDeclaration,
  marginBottom,
  MarginLeftDeclaration,
  marginLeft,
  MarginDeclaration,
  margin,
} from './core/margin'
import {
  PaddingTopDeclaration,
  paddingTop,
  PaddingRightDeclaration,
  paddingRight,
  PaddingBottomDeclaration,
  paddingBottom,
  PaddingLeftDeclaration,
  paddingLeft,
  PaddingDeclaration,
  padding,
} from './core/padding'
import { TextAlignDeclaration, textAlign } from './core/text-align'

export * from './core/shared/value-constructors'
export * from './core/background-color'
export * from './core/box-offsets'
export * from './core/box-sizing'
export * from './core/color'
export * from './core/display'
export * from './core/flexbox'
export * from './core/font-size'
export * from './core/font-weight'
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

export type __RoseboxProperties__ = Partial<
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
    BorderBottomDeclaration &
    BorderLeftDeclaration &
    BorderDeclaration &
    FontSizeDeclaration &
    FontWeightDeclaration &
    FontFamilyDeclaration &
    FlexBasisDeclaration &
    FlexDirectionDeclaration &
    FlexGrowDeclaration &
    FlexShrinkDeclaration &
    FlexWrapDeclaration &
    FlexDeclaration &
    LetterSpacingDeclaration &
    LineHeightDeclaration &
    MarginTopDeclaration &
    MarginRightDeclaration &
    MarginBottomDeclaration &
    MarginLeftDeclaration &
    MarginDeclaration &
    PaddingTopDeclaration &
    PaddingRightDeclaration &
    PaddingBottomDeclaration &
    PaddingLeftDeclaration &
    PaddingDeclaration &
    TextAlignDeclaration
>
export type RoseboxProperties = Partial<
  Omit<React.CSSProperties, keyof __RoseboxProperties__> & __RoseboxProperties__
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
  borderLeft,
  border,
  fontSize,
  fontWeight,
  fontFamily,
  flexBasis,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  flex,
  letterSpacing,
  lineHeight,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  margin,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  padding,
  textAlign,
}

export const style = (obj: RoseboxProperties): CSSProperties => {
  return Object.keys(obj).reduce((acc, key) => {
    return Object.assign({}, acc, {
      [key]: (funcMapper as any)[key]((obj as any)[key])[key],
    })
  }, {}) as CSSProperties
}
