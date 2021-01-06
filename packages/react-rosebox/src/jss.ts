import { style, RBStyle } from '@rosebox/core'
import { create, JssStyle, Plugin } from 'jss'
import functions from 'jss-plugin-rule-value-function'
import global from 'jss-plugin-global'
import camelCase from 'jss-plugin-camel-case'
import vendorPrefixer from 'jss-plugin-vendor-prefixer'
import propsSort from 'jss-plugin-props-sort'
import nested from 'jss-plugin-nested'
import { createUseStyles as createUseStylesJSS } from 'react-jss'

const styleJSS = (x: JssStyle) => style(x) as JssStyle

const serializeChangedValue = (value: any, prop: string) => {
    return Object.values(
        styleJSS({
            [prop]: value,
        }),
    )[0]
}

/** A JSS plugin for Rosebox */
export const rbJSS = (): Plugin => {
    return {
        onProcessStyle: (x: JssStyle) => {
            return x ? styleJSS(x) : x
        },
        onChangeValue: (value: any, key) => {
            return value ? serializeChangedValue(value, key) : value
        },
    }
}

export const jssPreset = () => {
    const clientSideOnly =
        typeof window === 'undefined' ? [] : [vendorPrefixer()]
    const plugins = [
        functions(),
        rbJSS(),
        nested(),
        global(),
        camelCase(),
        propsSort(),
    ].concat(clientSideOnly)
    return {
        plugins,
    }
}

export const defaultJss = create({
    plugins: [...jssPreset().plugins],
})

type ValueOrFunction<T> = T | ((x: any) => T)

export type RBStyleDynamic = {
    [key in keyof RBStyle]: ValueOrFunction<RBStyle[key]>
}

export type StyleMap<A extends string> = Record<A, RBStyleDynamic>

type ThemeFunc = <A extends string>(theme: unknown) => StyleMap<A>

export const createUseStyles = <A extends string>(
    styleMap: StyleMap<A> | ThemeFunc,
    options?: any,
): ((data?: unknown) => Record<A, string>) => {
    return createUseStylesJSS(styleMap as any, options)
}
