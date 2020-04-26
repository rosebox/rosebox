import { serializeSteps, steps, bezier, serializeBezier } from '../index'

const a = steps(2, 'jump-both')
const b = bezier(2, 4, 0, 0)

test('serializeTime(value: Time<s>)', () => {
    const received = serializeSteps(a)
    const expected = 'steps(2, jump-both)'
    expect(received).toEqual(expected)
})

test('serializeBezier()', () => {
    const received = serializeBezier(b)
    const expected = 'cubic-bezier(2, 4, 0, 0)'
    expect(received).toEqual(expected)
})
