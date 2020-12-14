import { CSSProperties } from 'react'
import { createUseStyles as createUseStyles_ } from 'react-jss'

import { funcMap } from '../func-mapper'
import { RBStyle } from '../core'
import { RBJSSStyle } from './jss'

export * from './jss'

export const style = (obj: RBStyle): CSSProperties => {
    // NEEDS improvement
    return Object.keys(obj).reduce((acc, key) => {
        const serializer = (funcMap as any)('inline')[key]
        return serializer
            ? {
                  ...acc,
                  ...serializer((obj as any)[key]),
              }
            : {
                  ...acc,
                  [key[0] === '_' ? key.slice(1) : key]: (obj as any)[key],
              }
    }, {}) as CSSProperties
}

export type StyleMap = {
    [key: string]: RBJSSStyle
}

export const createUseStyles = (styleMap: StyleMap, options?: any) => {
    return createUseStyles_(styleMap as any, options)
}
