import { minWidth } from '../index'
import { px, per } from '../../shared/value-constructors'

test('minWidth(px)', () => {
  const received = minWidth(px(30))
  const expected = { minWidth: '30px' }
  expect(received).toEqual(expected)
})

test('minWidth(%)', () => {
  const received = minWidth(per(30))
  const expected = { minWidth: '30%' }
  expect(received).toEqual(expected)
})

test('minWidth(inherit)', () => {
  const received = minWidth('inherit')
  const expected = { minWidth: 'inherit' }
  expect(received).toEqual(expected)
})
