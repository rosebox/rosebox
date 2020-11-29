import { style } from '../../index'
import { cdiv, cmult, per, px } from '../shared'

test('maxWidth: Length', () => {
  const received = style({
    maxWidth: px(40),
  })
  const expected = {
    maxWidth: '40px',
  }
  expect(received).toEqual(expected)
})

test('maxWidth: Calculation', () => {
  const received = style({
    maxWidth: cmult(cdiv(per(100), 7), 3),
  })
  const expected = {
    maxWidth: 'calc(calc(100% / 7) * 3)',
  }
  expect(received).toEqual(expected)
})
