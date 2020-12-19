import { style } from '../../index'

test('backgroundOrigin: keyword', () => {
    const received = style({
        backgroundOrigin: 'border-box',
    })
    const expected = {
        backgroundOrigin: 'border-box',
    }
    expect(received).toEqual(expected)
})

test('backgroundOrigin: keyword[]', () => {
    const received = style({
        backgroundOrigin: ['content-box', 'padding-box'],
    })
    const expected = {
        backgroundOrigin: 'content-box, padding-box',
    }
    expect(received).toEqual(expected)
})
