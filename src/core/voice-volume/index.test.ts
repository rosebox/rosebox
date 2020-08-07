import { style } from '../..'
import { db } from '../shared'

test('voiceVolume: medium', () => {
  const received = style({
    voiceVolume: 'medium',
  })
  const expected = {
    voiceVolume: 'medium',
  }
  expect(received).toEqual(expected)
})

test('voiceVolume: Percentage', () => {
  const received = style({
    voiceVolume: ['medium', db(72)],
  })
  const expected = {
    voiceVolume: 'medium 72dB',
  }
  expect(received).toEqual(expected)
})
