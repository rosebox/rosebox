import { overflowX, overflowY } from '../index'

test('overflowX(auto)', () => {
  const received = overflowX('auto')
  const expected = {
    overflowX: 'auto'
  }
  expect(received).toEqual(expected)
})

test('overflowY(auto)', () => {
  const received = overflowY('auto')
  const expected = {
    overflowY: 'auto'
  }
  expect(received).toEqual(expected)
})
