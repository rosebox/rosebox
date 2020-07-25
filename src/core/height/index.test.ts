import { style } from '../../index'
import { px } from '../shared'

test('height: Length', () => {
  const received = style({
    height: px(100),
  })
  const expected = {
    height: '100px',
  }
  expect(received).toEqual(expected)
})
