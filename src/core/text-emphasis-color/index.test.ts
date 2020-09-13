import { style } from '../../index'
import { rgb } from '../shared'

test('textEmphasisColor: Color', () => {
  const received = style({
    textEmphasisColor: rgb(115, 15, 20),
  })
  const expected = {
    textEmphasisColor: 'rgb(115, 15, 20)',
  }
  expect(received).toEqual(expected)
})
