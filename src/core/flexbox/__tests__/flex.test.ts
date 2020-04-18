import { flex } from '../flex/internal'
import { px, per } from '../../shared/value-constructors'

test('flex() - One value syntax - ShrinkOrGrow', () => {
  const received = flex(2)
  const expected = { flex: '2' }
  expect(received).toEqual(expected)
})

test('flex() - One value syntax - GlobalCssKEyword', () => {
  const received = flex('unset')
  const expected = { flex: 'unset' }
  expect(received).toEqual(expected)
})

test('flex() - One value syntax - none', () => {
  const received = flex('none')
  const expected = { flex: 'none' }
  expect(received).toEqual(expected)
})

test('flex() - One value syntax - FlexBasis', () => {
  const received = flex(px(2))
  const expected = { flex: '2px' }
  expect(received).toEqual(expected)
})

test('flex() - Two-values syntax', () => {
  const received = flex([2, per(30)])
  const expected = { flex: '2 30%' }
  expect(received).toEqual(expected)
})

test('flex() - Two-values syntax', () => {
  const received = flex([per(30), 2])
  const expected = { flex: '30% 2' }
  expect(received).toEqual(expected)
})

test('flex() - Three-values syntax', () => {
  const received = flex([per(30), 2, 3])
  const expected = { flex: '30% 2 3' }
  expect(received).toEqual(expected)
})

test('flex() - Three-values syntax', () => {
  const received = flex([2, 3, per(30)])
  const expected = { flex: '2 3 30%' }
  expect(received).toEqual(expected)
})
