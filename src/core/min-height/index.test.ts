import { style } from '../../index'
import { cdiv, cmult, per, px } from '../shared'

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
    minHeight: cmult(cdiv(per(100), 7), 3),
  })
  const expected = {
    minHeight: 'calc(calc(100% / 7) * 3)',
  }
  expect(received).toEqual(expected)
})
