import { fontFamily } from '../index'

test('fontFamily(string)', () => {
  const received = fontFamily('Arial')
  const expected = {
    fontFamily: 'Arial'
  }
  expect(received).toEqual(expected)
})

test('fontFamily(string[])', () => {
  const received = fontFamily(['Arial', 'sans-serif'])
  const expected = {
    fontFamily: 'Arial, sans-serif'
  }
  expect(received).toEqual(expected)
})
