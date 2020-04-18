import { flexDirection } from '../flex-direction/internal'

test('flexDirection(column)', () => {
  const received = flexDirection('column')
  const expected = { flexDirection: 'column' }
  expect(received).toEqual(expected)
})

test('flexDirection(column)', () => {
  const received = flexDirection('column-reverse')
  const expected = { flexDirection: 'column-reverse' }
  expect(received).toEqual(expected)
})
