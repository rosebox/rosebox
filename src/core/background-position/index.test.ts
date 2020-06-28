import { style } from '../../index'
import { per } from '../shared/value-constructors'

test('backgroundPosition: [center, bottom]', () => {
  const received = style({
    backgroundPosition: ['center', 'bottom'],
  })
  const expected = {
    backgroundPosition: 'center bottom',
  }
  expect(received).toEqual(expected)
})

test('backgroundPosition: [[left, 60%], [bottom, 30%]]', () => {
  const received = style({
    backgroundPosition: [
      ['left', per(60)],
      ['bottom', per(30)],
    ],
  })
  const expected = {
    backgroundPosition: 'left 60% bottom 30%',
  }
  expect(received).toEqual(expected)
})

test('backgroundPosition: [center, [bottom, 30%]]', () => {
  const received = style({
    backgroundPosition: ['center', ['bottom', per(30)]],
  })
  const expected = {
    backgroundPosition: 'center bottom 30%',
  }
  expect(received).toEqual(expected)
})
