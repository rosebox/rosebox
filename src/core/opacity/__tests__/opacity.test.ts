import { opacity } from '../internal'
import { per } from '../../shared/value-constructors'

test('opacity(number)', () => {
  const received = opacity(0.5)
  const expected = {
    opacity: 0.5
  }
  expect(received).toEqual(expected)
})

test('opacity(Percentage)', () => {
  const received = opacity(per(30))
  const expected = {
    opacity: '30%'
  }
  expect(received).toEqual(expected)
})

test('opacity(initial)', () => {
  const received = opacity('initial')
  const expected = {
    opacity: 'initial'
  }
  expect(received).toEqual(expected)
})
