import { bgColor } from '../internal'

import { rgb } from '../../color/internal'

import { per } from '../../shared/value-constructors'

test('bgColor(RGB<number>)', () => {
  const color = rgb([2, 2, 2])
  const received = bgColor(color)
  const expected = {
    backgroundColor: 'rgb(2, 2, 2)'
  }
  expect(received).toEqual(expected)
})

test('bgColor(RGB<Percentage>)', () => {
  const color = rgb([per(2), per(20), per(200)])
  const received = bgColor(color)
  const expected = {
    backgroundColor: 'rgb(2%, 20%, 200%)'
  }
  expect(received).toEqual(expected)
})
