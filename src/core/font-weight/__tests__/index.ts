import { fontWeight } from '..'

test('fontWeight(bold)', () => {
  const received = fontWeight('bold')
  const expected = { fontWeight: 'bold' }
  expect(received).toEqual(expected)
})
