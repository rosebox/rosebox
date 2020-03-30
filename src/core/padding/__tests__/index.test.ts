import {
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  padding
} from '../index'
import { px, per } from '../../shared/value-constructors'

test('paddingTop(Length<px>)', () => {
  const received = paddingTop(px(20))
  const expected = { paddingTop: '20px' }
  expect(received).toEqual(expected)
})

test('paddingRight(Length<px>)', () => {
  const received = paddingRight(px(20))
  const expected = { paddingRight: '20px' }
  expect(received).toEqual(expected)
})

test('paddingBottom(Length<px>)', () => {
  const received = paddingBottom(px(20))
  const expected = { paddingBottom: '20px' }
  expect(received).toEqual(expected)
})
test('paddingLeft(Length<px>)', () => {
  const received = paddingLeft(px(20))
  const expected = { paddingLeft: '20px' }
  expect(received).toEqual(expected)
})

test('padding([Percentage, Length<px>])', () => {
  const received = padding([per(30), px(20)])
  const expected = { padding: '30% 20px' }
  expect(received).toEqual(expected)
})

test('padding([Percentage, Length<px>, Length<px>])', () => {
  const received = padding([per(30), px(20), px(20)])
  const expected = { padding: '30% 20px 20px' }
  expect(received).toEqual(expected)
})

test('padding([Percentage, Length<px>, Length<px>])', () => {
  const received = padding([per(30), px(20), px(20), per(40)])
  const expected = { padding: '30% 20px 20px 40%' }
  expect(received).toEqual(expected)
})
