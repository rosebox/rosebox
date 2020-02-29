import { borderTopStyle } from '../index'

test('borderTopStyle(thick)', () => {
  const received = borderTopStyle('hidden')
  const expected = { borderTopStyle: 'hidden' }
  expect(received).toEqual(expected)
})
