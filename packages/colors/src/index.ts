import { isHSL, isHex, isRGB, HEX, RGB, HSL, rgb, hex, RGBInteger, hsl, per } from '@rosebox/core'
import { HSLInput } from '@rosebox/core/src'
import ColorM from 'color'
import { pipe } from 'ramda'

export function lighten(x: HEX, y: number): HEX
export function lighten(x: RGB, y: number): RGB
export function lighten(x: HSL, y: number): HSL

/**
 * Takes a color and a number between 0 and 1 and returns a tint of that color
 */
export function lighten(x: HEX | RGB | HSL, y: number): HEX | RGB | HSL {
    if (isRGB(x)) {
        const lightened = ColorM.rgb(x.data).lighten(y)
        return rgb(lightened.red() as RGBInteger, lightened.green() as RGBInteger, lightened.blue() as RGBInteger)
    }

    if (isHSL(x)) {
        const fn = pipe(
            (x: HSL) => x.data,
            (x: HSLInput) => ColorM.hsl(x[0], x[1].data, x[2].data),
            (x) => x.lighten(y).array(),
            (x) => hsl(x[0], per(x[1]), per(x[2])),
        )
        return fn(x)
    }

    const darkened = ColorM(x.data).lighten(y).hex()
    return hex(darkened)
}

export function darken(x: HEX, y: number): HEX
export function darken(x: RGB, y: number): RGB
export function darken(x: HSL, y: number): HSL

/**
 * Takes a color and a number between 0 and 1 and returns a shade of that color
 */
export function darken(x: HEX | RGB | HSL, y: number): HEX | RGB | HSL {
    if (isRGB(x)) {
        const darkened = ColorM.rgb(x.data).darken(y)
        return rgb(darkened.red() as RGBInteger, darkened.green() as RGBInteger, darkened.blue() as RGBInteger)
    }

    if (isHSL(x)) {
        const fn = pipe(
            (x: HSL) => x.data,
            (x: HSLInput) => ColorM.hsl(x[0], x[1].data, x[2].data),
            (x) => x.darken(y).array(),
            (x) => hsl(x[0], per(x[1]), per(x[2])),
        )
        return fn(x)
    }

    if (isHex(x)) {
        const darkened = ColorM(x.data).darken(y).hex()
        return hex(darkened)
    }
    return x
}
