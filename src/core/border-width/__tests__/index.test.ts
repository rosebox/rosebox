import {
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftWidth,
  borderWidth
} from '../internal'
import { px } from '../../shared/value-constructors'

test('borderTopWidth(thick)', () => {
  const received = borderTopWidth('thick')
  const expected = { borderTopWidth: 'thick' }
  expect(received).toEqual(expected)
})

test('borderTopWidth(Length<px>)', () => {
  const received = borderTopWidth(px(30))
  const expected = { borderTopWidth: '30px' }
  expect(received).toEqual(expected)
})

test('borderRightWidth(Length<px>)', () => {
  const received = borderRightWidth(px(30))
  const expected = { borderRightWidth: '30px' }
  expect(received).toEqual(expected)
})

test('borderBottomWidth(Length<px>)', () => {
  const received = borderBottomWidth(px(30))
  const expected = { borderBottomWidth: '30px' }
  expect(received).toEqual(expected)
})

test('borderLeftWidth(Length<px>)', () => {
  const received = borderLeftWidth(px(30))
  const expected = { borderLeftWidth: '30px' }
  expect(received).toEqual(expected)
})

test('borderWidth(thick)', () => {
  const received = borderWidth('thick')
  const expected = { borderWidth: 'thick' }
  expect(received).toEqual(expected)
})

test('borderWidth(LineWidth)', () => {
  const received = borderWidth(px(30))
  const expected = { borderWidth: '30px' }
  expect(received).toEqual(expected)
})

test('borderWidth([LineWidth])', () => {
  const received = borderWidth([px(30)])
  const expected = { borderWidth: '30px' }
  expect(received).toEqual(expected)
})

test('borderWidth([LineWidth, LineWidth])', () => {
  const received = borderWidth([px(30), px(10)])
  const expected = { borderWidth: '30px 10px' }
  expect(received).toEqual(expected)
})

test('borderWidth([LineWidth, LineWidth, LineWidth])', () => {
  const received = borderWidth([px(10), px(20), px(30)])
  const expected = { borderWidth: '10px 20px 30px' }
  expect(received).toEqual(expected)
})

test('borderWidth([LineWidth, LineWidth, LineWidth, LineWidth])', () => {
  const received = borderWidth([px(10), px(20), px(30), px(40)])
  const expected = { borderWidth: '10px 20px 30px 40px' }
  expect(received).toEqual(expected)
})
