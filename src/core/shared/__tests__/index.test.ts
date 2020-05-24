import { deg, serializeAngle, grad, rad, turn } from '../angle'
import { serializeTime } from '../serializers'
import { ms, s } from '../value-constructors'

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
