import { serializeTime } from './serializers'
import { ms, s } from './value-constructors'

test('serializeTime(value: Time<ms>)', () => {
    const received = serializeTime(ms(300))
    const expected = '300ms'
    expect(received).toEqual(expected)
})

test('serializeTime(value: Time<s>)', () => {
    const received = serializeTime(s(3))
    const expected = '3s'
    expect(received).toEqual(expected)
})