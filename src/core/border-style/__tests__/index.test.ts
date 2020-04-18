import {
  borderTopStyle,
  borderRightStyle,
  borderBottomStyle,
  borderLeftStyle,
  borderStyle
} from '../internal'

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

test('borderStyle(hidden)', () => {
  const received = borderStyle('hidden')
  const expected = { borderStyle: 'hidden' }
  expect(received).toEqual(expected)
})

test('borderStyle([hidden])', () => {
  const received = borderStyle(['hidden'])
  const expected = { borderStyle: 'hidden' }
  expect(received).toEqual(expected)
})

test('borderStyle([hidden, none])', () => {
  const received = borderStyle(['none', 'hidden'])
  const expected = { borderStyle: 'none hidden' }
  expect(received).toEqual(expected)
})

test('borderStyle([none, hidden, solid])', () => {
  const received = borderStyle(['none', 'hidden', 'solid'])
  const expected = { borderStyle: 'none hidden solid' }
  expect(received).toEqual(expected)
})

test('borderStyle([none, hidden, solid, solid])', () => {
  const received = borderStyle(['none', 'hidden', 'solid', 'solid'])
  const expected = { borderStyle: 'none hidden solid solid' }
  expect(received).toEqual(expected)
})
