import { uri, url } from '../types'

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