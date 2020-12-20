import { style } from '../../index'

test('backgroundRepeat: keyword', () => {
    const received = style({
        backgroundRepeat: ['round', 'repeat'],
    })
    const expected = {
        backgroundRepeat: 'round repeat',
    }
    expect(received).toEqual(expected)
})

test('backgroundRepeat: keyword[]', () => {
    const received = style({
        backgroundRepeat: [
            ['round', 'repeat'],
            ['space', 'no-repeat'],
        ],
    })
    const expected = {
        backgroundRepeat: 'round repeat, space no-repeat',
    }
    expect(received).toEqual(expected)
})
