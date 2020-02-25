import { display } from '../index'

test('display()', () => {
  const received = display('list-item')
  const expected = { display: 'list-item' }
  expect(received).toEqual(expected)
})
