import { flexGrow } from '../flex-grow/internal'

test('flexGrow() with number', () => {
  const received = flexGrow(2)
  const expected = { flexGrow: 2 }
  expect(received).toEqual(expected)
})

test('flexGrow() with keyword', () => {
  const received = flexGrow('unset')
  const expected = { flexGrow: 'unset' }
  expect(received).toEqual(expected)
})
