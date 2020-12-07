import { style } from '../../index'

test('alignContent: center', () => {
    const received = style({
        alignContent: 'center',
    })
    const expected = {
        alignContent: 'center',
    }
    expect(received).toEqual(expected)
})

test('alignContent: ["first", "baseline"]', () => {
    const received = style({
        alignContent: ['first', 'baseline'],
    })
    const expected = {
        alignContent: 'first baseline',
    }
    expect(received).toEqual(expected)
})
