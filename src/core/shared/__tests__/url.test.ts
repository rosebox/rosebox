import { style } from '../../..'
import { bezier, ms, uri, url } from '../types'

test('Serialize URL', () => {
    const received = url('https://google.se').serialize()
    const expected = 'url(https://google.se)'
    expect(received).toEqual(expected)
})

test('Serialize URI', () => {
    const received = uri('/google.se').serialize()
    const expected = 'uri(/google.se)'
    expect(received).toEqual(expected)
})

test('Serialize URI', () => {
    const received = style({
        transition: ['all', ms(300), bezier(0.25, 0.8, 0.25, 1)]
    })
    const expected = {transition: "all 300ms cubic-bezier(0.25, 0.8, 0.25, 1)"}
    expect(received).toEqual(expected)
})

