import { style } from '../../index'
import { cdiv, cmult, per, px } from '../shared'

test('maxHeight: Length', () => {
  const received = style({
    maxHeight: px(40),
  })
  const expected = {
    maxHeight: '40px',
  }
  expect(received).toEqual(expected)
})

test('maxHeight: WidthCalculation', () => {
  const received = style({
    maxHeight: cmult(cdiv(per(100), 7), 3),
  })
  const expected = {
    maxHeight: 'calc(calc(100% / 7) * 3)',
  }
  expect(received).toEqual(expected)
})
