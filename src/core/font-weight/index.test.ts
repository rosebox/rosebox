import { style } from '../../index'

test('fontWeight: number', () => {
    const received = style({
        fontWeight: 500,
    })
    const expected = {
        fontWeight: 500,
    }
    expect(received).toEqual(expected)
})
