import { style } from '../../..'
import { px } from '../../shared'

test('flex', () => {
  const received = style({
    flex: [px(100), 0, 1],
  })
  const expected = {
    flex: '100px 0 1',
  }
  expect(received).toEqual(expected)
})
