import { style } from '../../index'

test('backgroundClip: keyword', () => {
    const received = style({
        backgroundClip: 'border-box',
    })
    const expected = {
        backgroundClip: 'border-box',
    }
    expect(received).toEqual(expected)
})

test('backgroundClip: keyword[]', () => {
    const received = style({
        backgroundClip: ['content-box', 'padding-box'],
    })
    const expected = {
        backgroundClip: 'content-box, padding-box',
    }
    expect(received).toEqual(expected)
})
