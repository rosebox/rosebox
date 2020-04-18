import { textAlign } from '../internal'

test('textAlign(match-parent)', () => {
  const received = textAlign('match-parent')
  const expected = { textAlign: 'match-parent' }
  expect(received).toEqual(expected)
})
