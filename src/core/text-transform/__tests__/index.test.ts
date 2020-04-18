import { textTransform } from '../internal'

test('textTransform()', () => {
  const received = textTransform('lowercase full-width')
  const expected = { textTransform: 'lowercase full-width' }
  expect(received).toEqual(expected)
})
