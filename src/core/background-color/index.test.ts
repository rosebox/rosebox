import { style } from '../../index'
import { rgb } from '../shared'

test('backgroundColor: Color<RGB>', () => {
  const received = style({
    backgroundColor: rgb(144, 136, 10),
  })
  const expected = {
    backgroundColor: 'rgb(144, 136, 10)',
  }
  expect(received).toEqual(expected)
})
