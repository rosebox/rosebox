import { hsla, color, hex } from '../internal'
import { per } from '../../shared/value-constructors'

test('color(HSLA)', () => {
  const received = color(hsla([2, per(50), per(50), 0.5]))
  const expected = {
    color: 'hsla(2, 50%, 50%, 0.5)'
  }
  expect(received).toEqual(expected)
})

test('color(ExtendedColorKeyword)', () => {
  const received = color('azure')
  const expected = {
    color: 'azure'
  }
  expect(received).toEqual(expected)
})

test("color('currentColor')", () => {
  const received = color('currentColor')
  const expected = {
    color: 'currentColor'
  }
  expect(received).toEqual(expected)
})

test("color('transparent')", () => {
  const received = color('transparent')
  const expected = {
    color: 'transparent'
  }
  expect(received).toEqual(expected)
})

test("color('hex')", () => {
  const received = color(hex('#000'))
  const expected = {
    color: '#000'
  }
  expect(received).toEqual(expected)
})
