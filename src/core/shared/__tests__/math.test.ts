import { add, eq, ms, mult, px, sub, div, s } from '../types'

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

test('sub(Length, Length)', () => {
    const received = sub(px(600), px(500)).serialize()
    const expected = '100px'
    expect(received).toEqual(expected)
})

test('div(Length, Length)', () => {
    const received = eq(div(px(600), 2), px(300))
    const expected = true
    expect(received).toEqual(expected)
})

test('eq(Length, Length): boolean<false>', () => {
    const received = eq(px(600), px(500))
    const expected = false
    expect(received).toEqual(expected)
})

test('eq(Length, Length): boolean<true>', () => {
    const received = eq(px(600), px(600))
    const expected = true
    expect(received).toEqual(expected)
})

test('eq(Duration<ms>, Duration<ms>): boolean<true>', () => {
    const received = eq(ms(500), ms(500))
    const expected = true
    expect(received).toEqual(expected)
})

test('eq(Duration<ms>, Duration<ms>): boolean<false>', () => {
    const received = eq(ms(500), ms(400))
    const expected = false
    expect(received).toEqual(expected)
})

test('eq(Duration<ms>, Duration<s>): boolean<true>', () => {
    const received = eq(ms(500), s(0.5))
    const expected = true
    expect(received).toEqual(expected)
})

test('eq(Duration<ms>, Duration<s>): boolean<false>', () => {
    const received = eq(ms(500), s(0.4))
    const expected = false
    expect(received).toEqual(expected)
})
