import { CSSProperties } from 'react'

export * from './background-color/index'
export * from './box-offsets/index'
export * from './box-sizing/index'
export * from './color/index'
export * from './display/index'
export * from './flex/index'
export * from './fonts/index'
export * from './height/index'
export * from './margin/index'
export * from './padding/index'
export * from './max-height/index'
export * from './max-width/index'
export * from './min-height/index'
export * from './min-width/index'
export * from './opacity/index'
export * from './position/index'
export * from './visibility/index'
export * from './width/index'
export * from './shared/value-constructors'

export type StyleProperties = {
  width: string
  minWidth: string
  maxwidth: string
  height: string
  minHeight: string
  maxHeight: string
  marginTop: string
  marginBottom: string
  marginLeft: string
  marginRight: string
  margin: string
  paddingTop: string
  paddingRight: string
  paddingBottom: string
  paddingLeft: string
  padding: string
  display: string
  flex: string
  flexShrink: string
  flexBasis: string
  flexGrow: string
  flexDirection: string
  flexWrap: string
  boxSizing: string
  position: string
  color: string
  backgroundColor: string
  top: number
  right: number
  bottom: number
  left: number
  opacity: number
  visibility: string
}

const merge = (obj1: object, obj2: object): object =>
  Object.assign({}, obj1, obj2)

export const style = (x: Partial<StyleProperties>[]): CSSProperties =>
  x.reduce((acc, val) => merge(acc, val), {}) as CSSProperties
