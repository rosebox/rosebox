import {
  serializeMatrix,
  matrix,
  serializeYAxisTranslation,
  translateY,
  serializeTranslation,
  translate
} from './index'
import { px, per } from '../shared/value-constructors'

test('serializeMatrix', () => {
  const received = serializeMatrix(matrix([1, 2, 3]))
  const expected = 'matrix(1, 2, 3)'
  expect(received).toEqual(expected)
})

test('serializeYAxisTranslation', () => {
  const received = serializeYAxisTranslation(translateY(px(3)))
  const expected = 'translateY(3px)'
  expect(received).toEqual(expected)
})

test('serializeTranslation', () => {
  const received = serializeTranslation(translate(px(3), per(50)))
  const expected = 'translate(3px, 50%)'
  expect(received).toEqual(expected)
})
