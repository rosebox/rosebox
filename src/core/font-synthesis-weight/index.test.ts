import { style } from '../../index'

test('fontSynthesisWeight: keyword', () => {
  const received = style({
    fontSynthesisWeight: 'auto',
  })
  const expected = {
    fontSynthesisWeight: 'auto',
  }
  expect(received).toEqual(expected)
})
