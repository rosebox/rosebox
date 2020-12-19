import { style } from '../../index'

test('breakInside: keyword', () => {
    const received = style({
        breakInside: 'avoid-column',
    })
    const expected = {
        breakInside: 'avoid-column',
    }
    expect(received).toEqual(expected)
})
