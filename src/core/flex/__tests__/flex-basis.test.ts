import { basis } from '../flex-basis'
import { per, px } from '../../shared/value-constructors'

test('basis() with pixels', () => {
  const received = basis(px(2))
  const expected = { flexBasis: '2px' }
  expect(received).toEqual(expected)
})

test('basis() with percentage', () => {
  const received = basis(per(20))
  const expected = { flexBasis: '20%' }
  expect(received).toEqual(expected)
})

test('basis() with keyword', () => {
  const received = basis('auto')
  const expected = { flexBasis: 'auto' }
  expect(received).toEqual(expected)
})
