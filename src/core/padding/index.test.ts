import { style } from '../../index'
import { div, multi, per, px, vw } from '../shared'

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
    paddingX: multi(div(per(100), 7), 3),
  })
  const expected = {
    paddingLeft: 'calc((100% / 7) * 3)',
    paddingRight: 'calc((100% / 7) * 3)',
  }
  expect(received).toEqual(expected)
})

test('padding: WidthCalculation', () => {
  const received = style({
    padding: multi(div(per(100), 7), 3),
  })
  const expected = {
    padding: 'calc((100% / 7) * 3)',
  }
  expect(received).toEqual(expected)
})

test('padding: WidthCalculation', () => {
  const received = style({
    padding: [multi(per(100), 2), px(50), div(vw(100), 7), px(100)],
  })
  const expected = {
    padding: 'calc(100% * 2) 50px calc(100vw / 7) 100px',
  }
  expect(received).toEqual(expected)
})
