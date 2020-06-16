import { style } from '../../index'
import { per } from '../shared/value-constructors'

test('fontStretch: keyword', () => {
  const received = style({
    fontStretch: 'ultra-expanded',
  })
  const expected = {
    fontStretch: 'ultra-expanded',
  }
  expect(received).toEqual(expected)
})

test('fontStretch: Percentage', () => {
  const received = style({
    fontStretch: per(100),
  })
  const expected = {
    fontStretch: '100%',
  }
  expect(received).toEqual(expected)
})
