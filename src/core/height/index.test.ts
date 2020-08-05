import { style } from '../../index'
import { div, multi, per, px } from '../shared'

test('height: Length', () => {
  const received = style({
    height: px(100),
  })
  const expected = {
    height: '100px',
  }
  expect(received).toEqual(expected)
})

test('height: WidthCalculation', () => {
  const received = style({
    height: multi(div(per(100), 7), 3),
  })
  const expected = {
    height: 'calc((100% / 7) * 3)',
  }
  expect(received).toEqual(expected)
})
