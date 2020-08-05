import { style } from '../../index'
import { div, multi, per, px } from '../shared'

test('maxWidth: Length', () => {
  const received = style({
    maxWidth: px(40),
  })
  const expected = {
    maxWidth: '40px',
  }
  expect(received).toEqual(expected)
})

test('maxWidth: WidthCalculation', () => {
  const received = style({
    maxWidth: multi(div(per(100), 7), 3),
  })
  const expected = {
    maxWidth: 'calc((100% / 7) * 3)',
  }
  expect(received).toEqual(expected)
})
