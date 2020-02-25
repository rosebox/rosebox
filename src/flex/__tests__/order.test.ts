import { order } from '../order'

test('order() with number', () => {
  const received = order(2)
  const expected = { order: 2 }
  expect(received).toEqual(expected)
})

test('order() with keyword', () => {
  const received = order('initial')
  const expected = { order: 'initial' }
  expect(received).toEqual(expected)
})
