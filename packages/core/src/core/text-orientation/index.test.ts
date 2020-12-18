import { style } from '../../index'

test('TextOrientation: keyword', () => {
    const received = style({
        textOrientation: 'mixed',
    })
    const expected = {
        textOrientation: 'mixed',
    }
    expect(received).toEqual(expected)
})
