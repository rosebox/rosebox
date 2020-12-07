import { style } from '../../..'

test('flexDirection', () => {
    const received = style({
        flexDirection: 'row',
    })
    const expected = {
        flexDirection: 'row',
    }
    expect(received).toEqual(expected)
})
