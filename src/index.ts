import { CSSProperties } from 'react'
import { overflowX, overflow, overflowY } from './overflow'
import { textAlign } from './text-align'
import { textTransform } from './text-transform'

export * from './shared/value-constructors'
export * from './background-color'
export * from './box-offsets'
export * from './box-sizing'
export * from './color'
export * from './display'
export * from './flex'
export * from './fonts'
export * from './height'
export * from './margin'
export * from './padding'
export * from './max-height'
export * from './max-width'
export * from './min-height'
export * from './min-width'
export * from './opacity'
export * from './position'
export * from './visibility'
export * from './width'
export * from './border'
export * from './border-color'
export * from './border-radius'
export * from './border-style'
export * from './border-width'
export * from './letter-spacing'
export * from './line-height'
export * from './overflow'
export * from './text-align'
export * from './text-decoration'
export * from './text-transform'
export * from './z-index'

type Diff<T extends keyof any, U extends keyof any> = ({ [P in T]: P } &
  { [P in U]: never } & { [x: string]: never })[T]

type Overwrite<T, U> = Pick<T, Diff<keyof T, keyof U>> & U

type RoseBoxCssProperties_ = Partial<
  ReturnType<typeof overflowX> &
    ReturnType<typeof overflowY> &
    ReturnType<typeof overflow> &
    ReturnType<typeof textAlign> &
    ReturnType<typeof textTransform>
>

interface RoseBoxCssProperties
  extends Overwrite<React.CSSProperties, RoseBoxCssProperties_> {}

export const merge = (obj1: object, obj2: object): object =>
  Object.assign({}, obj1, obj2)

/**
 * Merges several declaration objects into a single object of type React.CSSProperties
 * @category Utility function
 * @added 0.1.4
 */
export const style = (x: RoseBoxCssProperties[]): CSSProperties =>
  x.reduce((acc, val) => merge(acc, val), {}) as CSSProperties
