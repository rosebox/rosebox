import { CSSProperties } from 'react'
import { overflowX, overflow, overflowY } from './core/overflow'
import { textAlign } from './core/text-align'
import { textTransform } from './core/text-transform'
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
    MaxWidthDeclaration
>

export const __style2__ = (obj: __RoseBoxCssProperties__) => {
  return Object.keys(obj).reduce((acc, key) => {
    if (key === 'width') {
      return Object.assign({}, acc, width((obj as WidthDeclaration)[key]))
    }
    if (key === 'height') {
      return Object.assign({}, acc, height((obj as HeightDeclaration)[key]))
    }
    if (key === 'backgroundColor') {
      return Object.assign({}, acc, bgColor((obj as BgColorDeclaration)[key]))
    }
    if (key === 'top') {
      return Object.assign({}, acc, top((obj as TopDeclaration)[key]))
    }
    if (key === 'right') {
      return Object.assign({}, acc, right((obj as RightDeclaration)[key]))
    }
    if (key === 'bottom') {
      return Object.assign({}, acc, bottom((obj as BottomDeclaration)[key]))
    }
    if (key === 'left') {
      return Object.assign({}, acc, left((obj as LeftDeclaration)[key]))
    }
    if (key === 'boxSizing') {
      return Object.assign(
        {},
        acc,
        boxSizing((obj as BoxSizingDeclaration)[key])
      )
    }
    if (key === 'color') {
      return Object.assign({}, acc, color((obj as ColorDeclaration)[key]))
    }
    if (key === 'maxHeight') {
      return Object.assign(
        {},
        acc,
        maxHeight((obj as MaxHeightDeclaration)[key])
      )
    }
    if (key === 'maxWidth') {
      return Object.assign({}, acc, maxWidth((obj as MaxWidthDeclaration)[key]))
    }
    return {}
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
