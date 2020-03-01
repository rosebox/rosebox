import { overflowX, overflowY, overflow } from '../index'

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

test('overflow(auto)', () => {
  const received = overflow(['auto', 'hidden'])
  const expected = {
    overflow: 'auto hidden'
  }
  expect(received).toEqual(expected)
})

test('overflow(auto)', () => {
  const received = overflow(['auto'])
  const expected = {
    overflow: 'auto'
  }
  expect(received).toEqual(expected)
})
