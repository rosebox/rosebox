import { style } from '../../index'
import { cdiv, cmulti, per, px, vw } from '../shared'

test('paddingX: LengthPercentage', () => {
  const received = style({
    paddingX: px(15),
  })
  const expected = {
    paddingLeft: '15px',
    paddingRight: '15px',
  }
  expect(received).toEqual(expected)
})

test('paddingX: [LengthPercentage, LengthPercentage]', () => {
  const received = style({
    paddingX: [px(15), px(100)],
  })
  const expected = {
    paddingLeft: '15px',
    paddingRight: '100px',
  }
  expect(received).toEqual(expected)
})

test('padding: PaddingObject', () => {
  const received = style({
    padding: {
      top: px(15),
      bottom: px(100),
    },
  })
  const expected = {
    paddingTop: '15px',
    paddingBottom: '100px',
  }
  expect(received).toEqual(expected)
})

test('paddingX: WidthCalculation', () => {
  const received = style({
    paddingX: cmulti(cdiv(per(100), 7), 3),
  })
  const expected = {
    paddingLeft: 'calc((100% / 7) * 3)',
    paddingRight: 'calc((100% / 7) * 3)',
  }
  expect(received).toEqual(expected)
})

test('padding: WidthCalculation', () => {
  const received = style({
    padding: cmulti(cdiv(per(100), 7), 3),
  })
  const expected = {
    padding: 'calc((100% / 7) * 3)',
  }
  expect(received).toEqual(expected)
})

test('padding: WidthCalculation', () => {
  const received = style({
    padding: [cmulti(per(100), 2), px(50), cdiv(vw(100), 7), px(100)],
  })
  const expected = {
    padding: 'calc(100% * 2) 50px calc(100vw / 7) 100px',
  }
  expect(received).toEqual(expected)
})
