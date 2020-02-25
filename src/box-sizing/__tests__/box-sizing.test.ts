import { boxSizing } from '../index'

test('boxSizing()', () => {
  const received = boxSizing('content-box')
  const expected = { boxSizing: 'content-box' }
  expect(received).toEqual(expected)
})

test('boxSizing()', () => {
  const received = boxSizing('border-box')
  const expected = { boxSizing: 'border-box' }
  expect(received).toEqual(expected)
})
