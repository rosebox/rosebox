import { flexShrink } from '../flex-shrink/internal'

test('flexShrink() with number', () => {
  const received = flexShrink(2)
  const expected = { flexShrink: 2 }
  expect(received).toEqual(expected)
})

test('flexShrink() with keyword', () => {
  const received = flexShrink('initial')
  const expected = { flexShrink: 'initial' }
  expect(received).toEqual(expected)
})
