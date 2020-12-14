import { style } from '../../index'

test('borderCollapse: collapse', () => {
    const received = style({
        borderCollapse: 'collapse',
    })
    const expected = {
        borderCollapse: 'collapse',
    }
    expect(received).toEqual(expected)
})
