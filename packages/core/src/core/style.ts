import { CSSProperties } from 'react'
import { RBStyle } from '.'
import { funcMap } from '../func-mapper'

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
                  [key[0] === '_' ? key.slice(1) : key]: key[0] === '&' ? style((obj as any)[key]) : (obj as any)[key],
              }
    }, {}) as CSSProperties
}
