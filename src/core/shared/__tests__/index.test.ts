import { deg, serializeAngle, grad, rad, turn } from '../'
import { serializeDuration } from '../'
import { ms, s } from '../index'

test('serializeDuration(value: Duration<ms>)', () => {
  const received = serializeDuration(ms(300))
  const expected = '300ms'
  expect(received).toEqual(expected)
})

test('serializeDuration(value: Duration<s>)', () => {
  const received = serializeDuration(s(3))
  const expected = '3s'
  expect(received).toEqual(expected)
})

test('serializeAngle(deg)', () => {
  const received = serializeAngle(deg(180))
  const expected = '180deg'
  expect(received).toEqual(expected)
})

test('serializeAngle(grad)', () => {
  const received = serializeAngle(grad(400))
  const expected = '400grad'
  expect(received).toEqual(expected)
})

test('serializeAngle(rad)', () => {
  const received = serializeAngle(rad(3.1416))
  const expected = '3.1416rad'
  expect(received).toEqual(expected)
})

test('serializeAngle(turn)', () => {
  const received = serializeAngle(turn(2))
  const expected = '2turn'
  expect(received).toEqual(expected)
})
