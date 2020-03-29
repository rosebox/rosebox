import { minHeight } from '../index'
import { px, per } from '../../shared/value-constructors'

test('minHeight(px)', () => {
  const received = minHeight(px(30))
  const expected = { minHeight: '30px' }
  expect(received).toEqual(expected)
})

test('minHeight(%)', () => {
  const received = minHeight(per(30))
  const expected = { minHeight: '30%' }
  expect(received).toEqual(expected)
})

test('minHeight(inherit)', () => {
  const received = minHeight('inherit')
  const expected = { minHeight: 'inherit' }
  expect(received).toEqual(expected)
})
