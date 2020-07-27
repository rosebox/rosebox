import { style } from '../../index'
import { px } from '../shared'

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
