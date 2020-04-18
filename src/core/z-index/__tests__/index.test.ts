import { zIndex } from '../internal'

test('zIndex(auto)', () => {
  const received = zIndex('auto')
  const expected = { zIndex: 'auto' }
  expect(received).toEqual(expected)
})

test('zIndex(number)', () => {
  const received = zIndex(-1)
  const expected = { zIndex: -1 }
  expect(received).toEqual(expected)
})
