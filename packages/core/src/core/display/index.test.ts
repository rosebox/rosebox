import { style } from '../..'

test('display', () => {
    const received = style({
        display: ['flex', 'block'],
    })
    const expected = {
        display: 'flex block',
    }
    expect(received).toEqual(expected)
})
