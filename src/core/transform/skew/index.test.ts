import { style } from '../../../index'
import { skewX, skewY, skew } from './skew'
import { deg } from '../../shared'

test('skewX()', () => {
  const received = style({
    transform: skewX(deg(-10)),
  })
  const expected = {
    transform: 'skewX(-10deg)',
  }
  expect(received).toEqual(expected)
})

test('skewY()', () => {
  const received = style({
    transform: skewY(deg(10)),
  })
  const expected = {
    transform: 'skewY(10deg)',
  }
  expect(received).toEqual(expected)
})

test('skew()', () => {
  const received = style({
    transform: skew(deg(10), deg(-10)),
  })
  const expected = {
    transform: 'skew(10deg, -10deg)',
  }
  expect(received).toEqual(expected)
})
