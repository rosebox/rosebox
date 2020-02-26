import { display } from '../internal'

test('display()', () => {
  const received = display('list-item')
  const expected = { display: 'list-item' }
  expect(received).toEqual(expected)
})
