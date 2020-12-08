import { style } from '../../index'

test('justifyItems: center', () => {
    const received = style({
        justifyItems: 'center',
    })
    const expected = {
        justifyItems: 'center',
    }
    expect(received).toEqual(expected)
})

test('justifyItems: ["legacy", "left"]', () => {
    const received = style({
        justifyItems: ['legacy', 'left'],
    })
    const expected = {
        justifyItems: 'legacy left',
    }
    expect(received).toEqual(expected)
})
