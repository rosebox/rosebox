
import { style2 } from '.'
import { hex } from './core'

test('alignContent: center', () => {
  const received = style2({
    'background-color': hex('#fff'),
  })
  const expected = {
    'background-color': '#fff',
  }
  expect(received).toEqual(expected)
})

