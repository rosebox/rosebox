import { hex, hsl, per, rgb } from '@rosebox/core'
import { darken, lighten } from '.'
import Color from 'color'

test('darken(RGB)', () => {
    const color = rgb(0, 255, 0)
    const a = darken(color, 0.5).serialize()
    const b = Color.rgb([0, 255, 0]).darken(0.5).rgb().string()

    expect(a).toEqual(b)
})

test('darken(HEX)', () => {
    const color = hex('#eb4034')
    const a = darken(color, 0.5).serialize()
    const b = Color('#eb4034').darken(0.5).hex()

    expect(a).toEqual(b)
})

test('darken(HSL)', () => {
    const color = hsl(120, per(100), per(50))
    const a = darken(color, 0.5).serialize()
    const b = Color.hsl([120, 100, 50]).darken(0.5).string()

    expect(a).toEqual(b)
})

test('lighten(HSL)', () => {
    const color = hsl(120, per(100), per(50))
    const a = lighten(color, 0.5).serialize()
    const b = Color.hsl([120, 100, 50]).lighten(0.5).string()

    expect(a).toEqual(b)
})

test('lighten(RGB)', () => {
    const color = rgb(0, 255, 0)
    const a = lighten(color, 0.5).serialize()
    const b = Color.rgb([0, 255, 0]).lighten(0.5).rgb().string()

    expect(a).toEqual(b)
})

test('lighten(HEX)', () => {
    const color = hex('#eb4034')
    const a = lighten(color, 0.5).serialize()
    const b = Color('#eb4034').lighten(0.5).hex()

    expect(a).toEqual(b)
})
