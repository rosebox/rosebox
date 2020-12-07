import { style } from '../../index'

test('fontVariantNumeric: oldstyle-num', () => {
    const received = style({
        fontVariantNumeric: 'oldstyle-num',
    })
    const expected = {
        fontVariantNumeric: 'oldstyle-num',
    }
    expect(received).toEqual(expected)
})
