import { add, ms, mult, px } from "../types"

test('mult(Length, number)', () => {
    const received = mult(px(300), 3).serialize()
    const expected = '900px'
    expect(received).toEqual(expected)
})

test('mult(Duration, number)', () => {
    const received = mult(ms(250), 3).serialize()
    const expected = '750ms'
    expect(received).toEqual(expected)
})

test('add(Length, Length)', () => {
    const received = add(px(100), px(500)).serialize()
    const expected = '600px'
    expect(received).toEqual(expected)
})