import { serializeBoxShadowPropertyValue } from '../index'
import { px } from '../../shared/value-constructors'
import { rgb } from '../../color'

test('boxShadow(x: none)', () => {
  const received = serializeBoxShadowPropertyValue('none')
  const expected = 'none'
  expect(received).toEqual(expected)
})

test('boxShadow(x: Shadow)', () => {
  const received = serializeBoxShadowPropertyValue(['inset', [px(2), px(2)]])
  const expected = 'inset 2px 2px'
  expect(received).toEqual(expected)
})

test('boxShadow(x: Shadow[])', () => {
  const received = serializeBoxShadowPropertyValue([
    ['inset', [px(2), px(2)]],
    ['inset', [px(2), px(2)], rgb(155, 155, 155)],
  ])
  const expected = 'inset 2px 2px, inset 2px 2px rgb(155, 155, 155)'
  expect(received).toEqual(expected)
})
