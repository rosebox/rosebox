import { style } from '../../index'

test('fontVariantCaps: oldstyle-num', () => {
    const received = style({
        fontVariantCaps: 'all-petite-caps',
    })
    const expected = {
        fontVariantCaps: 'all-petite-caps',
    }
    expect(received).toEqual(expected)
})
