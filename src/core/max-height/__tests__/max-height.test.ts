import { maxHeight } from '../index'
import { px, per } from '../../shared/value-constructors'

test('maxHeight(px)', () => {
  const received = maxHeight(px(30))
  const expected = { maxHeight: '30px' }
  expect(received).toEqual(expected)
})

test('maxHeight(%)', () => {
  const received = maxHeight(per(30))
  const expected = { maxHeight: '30%' }
  expect(received).toEqual(expected)
})

test('maxHeight(inherit)', () => {
  const received = maxHeight('inherit')
  const expected = { maxHeight: 'inherit' }
  expect(received).toEqual(expected)
})
