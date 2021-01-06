import { CSSProperties } from 'react'
import { RBStyle } from '.'
import { funcMap } from '../func-mapper'

const isQueryKey = (key: string): boolean => key === '&query'

const serializeQueryDeclaration = (queryDeclaration: any) =>
    Object.keys(queryDeclaration).reduce(
        (acc, item) => ({
            ...acc,
            [item]: style(queryDeclaration[item]),
        }),
        {},
    )

export const style = (obj: RBStyle): CSSProperties => {
    return Object.keys(<any>obj).reduce((acc, key) => {
        const assertedObj = obj as any
        const serializer = (funcMap as any)('inline')[key]
        if (serializer) {
            return {
                ...acc,
                ...serializer(assertedObj[key]),
            }
        }
        if (key[0] === '_') {
            return {
                ...acc,
                [key.slice(1)]: (obj as any)[key],
            }
        }
        if (isQueryKey(key)) {
            return {
                ...acc,
                ...serializeQueryDeclaration(assertedObj[key]),
            }
        }

        return {
            ...acc,
            [key]: (obj as any)[key],
        }
        
    }, {}) as CSSProperties
}
