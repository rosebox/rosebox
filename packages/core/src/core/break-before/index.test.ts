import { style } from '../../index'

test('breakBefore: recto', () => {
    const received = style({
        breakBefore: 'recto',
    })
    const expected = {
        breakBefore: 'recto',
    }
    expect(received).toEqual(expected)
})
