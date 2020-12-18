import { style } from '../../index'

test('borderImageRepeat: stretch', () => {
    const received = style({
        borderImageRepeat: 'stretch',
    })
    const expected = {
        borderImageRepeat: 'stretch',
    }
    expect(received).toEqual(expected)
})

test('borderImageRepeat: [stretch, space]', () => {
    const received = style({
        borderImageRepeat: ['stretch', 'space'],
    })
    const expected = {
        borderImageRepeat: 'stretch space',
    }
    expect(received).toEqual(expected)
})
