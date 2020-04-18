import {
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  borderRadius
} from '../internal'
import { px, per } from '../../shared/value-constructors'

test('borderTopRightRadius(Length<px>)', () => {
  const received = borderTopRightRadius(px(10))
  const expected = { borderTopRightRadius: '10px' }
  expect(received).toEqual(expected)
})

test('borderBottomRightRadius(Length<px>)', () => {
  const received = borderBottomRightRadius(px(10))
  const expected = { borderBottomRightRadius: '10px' }
  expect(received).toEqual(expected)
})

test('borderBottomLeftRadius(Length<px>)', () => {
  const received = borderBottomLeftRadius([px(10), per(10)])
  const expected = { borderBottomLeftRadius: '10px 10%' }
  expect(received).toEqual(expected)
})

test('borderTopLeftRadius(Length<px>)', () => {
  const received = borderTopLeftRadius([px(10)])
  const expected = { borderTopLeftRadius: '10px' }
  expect(received).toEqual(expected)
})

test('borderRadius(LengthPercentage)', () => {
  const received = borderRadius(px(10))
  const expected = { borderRadius: '10px' }
  expect(received).toEqual(expected)
})

test('borderRadius([LengthPercentage])', () => {
  const received = borderRadius([px(10)])
  const expected = { borderRadius: '10px' }
  expect(received).toEqual(expected)
})

test('borderRadius([LengthPercentage, LengthPercentage])', () => {
  const received = borderRadius([px(10), per(100)])
  const expected = { borderRadius: '10px 100%' }
  expect(received).toEqual(expected)
})

test('borderRadius([[LengthPercentage, LengthPercentage], [LengthPercentage, LengthPercentage]])', () => {
  const received = borderRadius([
    [px(10), per(100)],
    [px(10), per(100)]
  ])
  const expected = { borderRadius: '10px 100% / 10px 100%' }
  expect(received).toEqual(expected)
})

test('borderRadius(GlobalCssKeyword)', () => {
  const received = borderRadius('inherit')
  const expected = { borderRadius: 'inherit' }
  expect(received).toEqual(expected)
})
