import { style } from '../../index'
import { px } from '../shared'

test('margin: [Length, Length, Length, Length]', () => {
  const received = style({
    margin: [px(40), px(40), px(40), px(40)],
  })
  const expected = {
    margin: '40px 40px 40px 40px',
  }
  expect(received).toEqual(expected)
})

test('margin: MarginObject', () => {
  const received = style({
    margin: {
      top: 'auto',
      left: px(100),
    },
  })
  const expected = {
    marginTop: 'auto',
    marginLeft: '100px',
  }
  expect(received).toEqual(expected)
})

test('marginX', () => {
  const received = style({
    marginX: [px(100), 'auto'],
  })
  const expected = {
    marginLeft: '100px',
    marginRight: 'auto',
  }
  expect(received).toEqual(expected)
})

test('marginY', () => {
  const received = style({
    marginY: 'auto',
  })
  const expected = {
    marginTop: 'auto',
    marginBottom: 'auto',
  }
  expect(received).toEqual(expected)
})
