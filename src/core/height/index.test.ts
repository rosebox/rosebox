import { style } from '../../index'
import { cdiv, cmulti, per, px } from '../shared'

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
    height: cmulti(cdiv(per(100), 7), 3),
  })
  const expected = {
    height: 'calc(calc(100% / 7) * 3)',
  }
  expect(received).toEqual(expected)
})
