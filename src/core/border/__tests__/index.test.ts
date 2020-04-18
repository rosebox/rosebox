import { borderLeft } from '../internal'
import { px } from '../../shared/value-constructors'
import { rgb } from '../../color/internal'

test('borderLeft([Length<px>])', () => {
  const received = borderLeft([px(3)])
  const expected = {
    borderLeft: '3px'
  }
  expect(received).toEqual(expected)
})

test('borderLeft([Length<px>, LineStyle])', () => {
  const received = borderLeft([px(3), 'solid'])
  const expected = {
    borderLeft: '3px solid'
  }
  expect(received).toEqual(expected)
})

test('borderLeft([Length<px>, LineStyle, Color<RGB>])', () => {
  const received = borderLeft([px(3), 'solid', rgb([255, 255, 255])])
  const expected = {
    borderLeft: '3px solid rgb(255, 255, 255)'
  }
  expect(received).toEqual(expected)
})

test('borderLeft([Length<px>, Color<RGB>])', () => {
  const received = borderLeft([px(3), rgb([255, 255, 255])])
  const expected = {
    borderLeft: '3px rgb(255, 255, 255)'
  }
  expect(received).toEqual(expected)
})
