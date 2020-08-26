import { style } from '../../index'

test('textEmphasisPosition: keyword[]', () => {
  const received = style({
    textEmphasisPosition: ['over', 'left'],
  })
  const expected = {
    textEmphasisPosition: 'over left',
  }
  expect(received).toEqual(expected)
})
