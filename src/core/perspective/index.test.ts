import { style } from '../../index'
import { px } from '../shared'

test('perspective: none', () => {
  const received = style({
    perspective: 'none',
  })
  const expected = {
    perspective: 'none',
  }
  expect(received).toEqual(expected)
})

test('perspective: Length', () => {
  const received = style({
    perspective: px(30),
  })
  const expected = {
    perspective: '30px',
  }
  expect(received).toEqual(expected)
})
