import { rgb } from '@rosebox/core'
import { darken } from '.'
import { rgb as rgbM } from 'color'

test('darken(rgb)', () => {
    const a = darken(rgb(245, 245, 245), 0.5).serialize()
    const b = rgbM([245, 245, 245]).darken(0.5).toString()

    expect(a === b).toEqual(true)
})
