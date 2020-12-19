import { style } from '../../index'

test('backgroundImage: keyword', () => {
    const received = style({
        backgroundOrigin: 'border-box',
    })
    const expected = {
        backgroundOrigin: 'border-box',
    }
    expect(received).toEqual(expected)
})
