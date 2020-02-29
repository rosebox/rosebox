import { borderTopStyle, borderRightStyle } from '../index'

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
