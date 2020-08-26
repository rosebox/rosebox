import { style } from '../../index'

test('textEmphasisSkip: keyword[]', () => {
  const received = style({
    textEmphasisSkip: ['narrow', 'punctuation'],
  })
  const expected = {
    textEmphasisSkip: 'narrow punctuation',
  }
  expect(received).toEqual(expected)
})
