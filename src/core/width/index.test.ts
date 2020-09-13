import { style } from '../..'
import { cdiv, cmulti, per } from '../shared'

test('width', () => {
  const received = style({
    width: per(3),
  })
  const expected = {
    width: '3%',
  }
  expect(received).toEqual(expected)
})

test('width: WidthCalculation', () => {
  const received = style({
    width: cmulti(cdiv(per(100), 7), 3),
  })
  const expected = {
    width: 'calc((calc(100% / 7)) * 3)',
  }
  expect(received).toEqual(expected)
})
