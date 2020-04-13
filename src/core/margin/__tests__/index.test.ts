import {
  marginLeft,
  marginRight,
  marginBottom,
  marginTop,
  margin,
} from '../index'
import { px, per } from '../../shared/value-constructors'

test('marginLeft(Length<px>)', () => {
  const received = marginLeft(px(20))
  const expected = { marginLeft: '20px' }
  expect(received).toEqual(expected)
})

test('marginRight(auto)', () => {
  const received = marginRight('auto')
  const expected = { marginRight: 'auto' }
  expect(received).toEqual(expected)
})

test('marginBottom(Percentage)', () => {
  const received = marginBottom(per(30))
  const expected = { marginBottom: '30%' }
  expect(received).toEqual(expected)
})

test('marginTop(Percentage)', () => {
  const received = marginTop(per(30))
  const expected = { marginTop: '30%' }
  expect(received).toEqual(expected)
})

test('margin(Length)', () => {
  const received = margin(px(30))
  const expected = { margin: '30px' }
  expect(received).toEqual(expected)
})

test('margin([Percentage])', () => {
  const received = margin([per(30)])
  const expected = { margin: '30%' }
  expect(received).toEqual(expected)
})

test('margin([Percentage, auto])', () => {
  const received = margin([per(30), 'auto'])
  const expected = { margin: '30% auto' }
  expect(received).toEqual(expected)
})

test('margin([Percentage, auto, Length<px>])', () => {
  const received = margin([per(30), 'auto', px(100)])
  const expected = { margin: '30% auto 100px' }
  expect(received).toEqual(expected)
})

test('margin([Percentage, auto, Length<px>, auto])', () => {
  const received = margin([per(30), 'auto', px(100), 'auto'])
  const expected = { margin: '30% auto 100px auto' }
  expect(received).toEqual(expected)
})
