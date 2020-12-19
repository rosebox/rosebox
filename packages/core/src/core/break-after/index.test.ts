import { style } from '../../index'

test('breakAfter: recto', () => {
    const received = style({
        breakAfter: 'recto',
    })
    const expected = {
        breakAfter: 'recto',
    }
    expect(received).toEqual(expected)
})
