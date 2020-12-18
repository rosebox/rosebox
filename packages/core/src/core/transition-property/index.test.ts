import { style } from '../..'

test('transitionProperty', () => {
    const received = style({
        transitionProperty: ['boxShadow', 'caretColor'],
    })
    const expected = {
        transitionProperty: 'box-shadow, caret-color',
    }
    expect(received).toEqual(expected)
})
