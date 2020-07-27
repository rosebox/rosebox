import { px } from '../shared'
import { style } from '../..'
import { rgb } from '../color'

test('boxShadow(x: none)', () => {
  const received = style({
    boxShadow: 'none',
  })
  const expected = {
    boxShadow: 'none',
  }
  expect(received).toEqual(expected)
})

test('boxShadow(x: Shadow)', () => {
  const received = style({
    boxShadow: ['inset', [px(2), px(2)]],
  })
  const expected = {
    boxShadow: 'inset 2px 2px',
  }
  expect(received).toEqual(expected)
})

test('boxShadow(x: Shadow[])', () => {
  const received = style({
    boxShadow: [
      ['inset', [px(2), px(2)]],
      ['inset', [px(2), px(2)], rgb(155, 155, 155)],
    ],
  })
  const expected = {
    boxShadow: 'inset 2px 2px, inset 2px 2px rgb(155, 155, 155)',
  }
  expect(received).toEqual(expected)
})
