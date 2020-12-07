import { image, url } from '../types'

test('Serialize Image', () => {
    const received = image({ src: url('google.se') }).serialize()
    const expected = 'image(url(google.se))'
    expect(received).toEqual(expected)
})

test('Serialize Image', () => {
    const received = image({ color: 'black' }).serialize()
    const expected = 'image(black)'
    expect(received).toEqual(expected)
})

test('Serialize Image', () => {
    const received = image({ color: 'black', src: url('google.se') }).serialize()
    const expected = 'image("google.se" , black)'
    expect(received).toEqual(expected)
})

test('Serialize Image', () => {
    const received = image({ direction: 'ltr', color: 'black', src: url('google.se') }).serialize()
    const expected = 'image(ltr "google.se" , black)'
    expect(received).toEqual(expected)
})
