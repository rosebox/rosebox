import {
  borderTopStyle,
  borderRightStyle,
  borderBottomStyle,
  borderLeftStyle
} from '../index'

test('borderTopStyle(hidden)', () => {
  const received = borderTopStyle('hidden')
  const expected = { borderTopStyle: 'hidden' }
  expect(received).toEqual(expected)
})

test('borderRightStyle(hidden)', () => {
  const received = borderRightStyle('hidden')
  const expected = { borderRightStyle: 'hidden' }
  expect(received).toEqual(expected)
})

test('borderBottomStyle(hidden)', () => {
  const received = borderBottomStyle('hidden')
  const expected = { borderBottomStyle: 'hidden' }
  expect(received).toEqual(expected)
})

test('borderLeftStyle(hidden)', () => {
  const received = borderLeftStyle('hidden')
  const expected = { borderLeftStyle: 'hidden' }
  expect(received).toEqual(expected)
})
