import { style } from '../../index'

test('fontSynthesisSmallCaps: keyword', () => {
  const received = style({
    fontSynthesisSmallCaps: 'auto',
  })
  const expected = {
    fontSynthesisSmallCaps: 'auto',
  }
  expect(received).toEqual(expected)
})
