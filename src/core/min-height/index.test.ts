import { style } from '../../index'
import { div, multi, per, px } from '../shared'

test('minHeight: Length', () => {
  const received = style({
    minHeight: px(40),
  })
  const expected = {
    minHeight: '40px',
  }
  expect(received).toEqual(expected)
})

test('minHeight: WidthCalculation', () => {
  const received = style({
    minHeight: multi(div(per(100), 7), 3),
  })
  const expected = {
    minHeight: 'calc((100% / 7) * 3)',
  }
  expect(received).toEqual(expected)
})
