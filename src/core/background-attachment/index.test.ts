import { style } from '../../index'

test('backgroundAttachment: keyword', () => {
    const received = style({
        backgroundAttachment: 'fixed',
    })
    const expected = {
        backgroundAttachment: 'fixed',
    }
    expect(received).toEqual(expected)
})

