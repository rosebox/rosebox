import { height } from '../index'
import { px, per } from '../../shared/value-constructors'

test('height(px)', () => {
  const received = height(px(20))
  const expected = { height: '20px' }
  expect(received).toEqual(expected)
})

test('height(%)', () => {
  const received = height(per(20))
  const expected = { height: '20%' }
  expect(received).toEqual(expected)
})

test('height(auto)', () => {
  const received = height('auto')
  const expected = { height: 'auto' }
  expect(received).toEqual(expected)
})

test('height(inherit)', () => {
  const received = height('inherit')
  const expected = { height: 'inherit' }
  expect(received).toEqual(expected)
})
