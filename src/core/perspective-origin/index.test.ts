import { style } from '../../index'
import { per, px } from '../shared/value-constructors'

test('perspectiveOrigin: [left center]', () => {
  const received = style({
    perspectiveOrigin: ['left', 'center'],
  })
  const expected = {
    perspectiveOrigin: 'left center',
  }
  expect(received).toEqual(expected)
})

test('perspectiveOrigin: [Perecentage center]', () => {
  const received = style({
    perspectiveOrigin: [per(30), 'center'],
  })
  const expected = {
    perspectiveOrigin: '30% center',
  }
  expect(received).toEqual(expected)
})

test('perspectiveOrigin: [right Percentage, bottom Percentage]', () => {
  const received = style({
    perspectiveOrigin: [
      ['right', px(30)],
      ['bottom', per(30)],
    ],
  })
  const expected = {
    perspectiveOrigin: 'right 30px bottom 30%',
  }
  expect(received).toEqual(expected)
})
