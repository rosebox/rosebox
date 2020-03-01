import { overflowX } from '../index'

test('overflowX(auto)', () => {
  const received = overflowX('auto')
  const expected = {
    overflowX: 'auto'
  }
  expect(received).toEqual(expected)
})
