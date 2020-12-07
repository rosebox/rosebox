import { style } from '../../index'
import { ident } from '../shared'

test('willChange: AnimateableFeature', () => {
    const received = style({
        willChange: 'scroll-position',
    })
    const expected = {
        willChange: 'scroll-position',
    }
    expect(received).toEqual(expected)
})

test('willChange: CustomIdent', () => {
    const received = style({
        willChange: ident('something'),
    })
    const expected = {
        willChange: 'something',
    }
    expect(received).toEqual(expected)
})

test('willChange: AnimateableFeature[]', () => {
    const received = style({
        willChange: ['contents', ident('something')],
    })
    const expected = {
        willChange: 'contents, something',
    }
    expect(received).toEqual(expected)
})
