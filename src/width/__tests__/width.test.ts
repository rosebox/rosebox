import { width } from '../index'
import { per, px, rem, em } from '../../shared/value-constructors'

test('width(number)', () => {
  const received = width(per(20))
  const expected = { width: '20%' }
  expect(received).toEqual(expected)
})

test('width(pixels)', () => {
  const received = width(px(100))
  const expected = { width: '100px' }
  expect(received).toEqual(expected)
})

test('width(rem)', () => {
  const received = width(rem(100))
  const expected = { width: '100rem' }
  expect(received).toEqual(expected)
})

test('width(em)', () => {
  const received = width(em(100))
  const expected = { width: '100em' }
  expect(received).toEqual(expected)
})

test('width(auto)', () => {
  const received = width('auto')
  const expected = { width: 'auto' }
  expect(received).toEqual(expected)
})

test('width(unset)', () => {
  const received = width('unset')
  const expected = { width: 'unset' }
  expect(received).toEqual(expected)
})
