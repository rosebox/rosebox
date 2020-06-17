import { serializeTransformOriginPropertyValue } from './transform-origin'
import { per, px } from '../shared/value-constructors'

test('transormOrigin([keyword, keyword])', () => {
  const received = {
    transformOrigin: serializeTransformOriginPropertyValue(['center', 'top']),
  }
  const expected = {
    transformOrigin: 'center top',
  }
  expect(received).toEqual(expected)
})

test('transormOrigin([keyword, LengthPercentage])', () => {
  const received = {
    transformOrigin: serializeTransformOriginPropertyValue(['center', px(100)]),
  }
  const expected = {
    transformOrigin: 'center 100px',
  }
  expect(received).toEqual(expected)
})

test('transormOrigin([keyword, LengthPercentage, Length])', () => {
  const received = {
    transformOrigin: serializeTransformOriginPropertyValue([
      'center',
      per(100),
      px(50),
    ]),
  }
  const expected = {
    transformOrigin: 'center 100% 50px',
  }
  expect(received).toEqual(expected)
})

test('transormOrigin(GlobalCssKeyword)', () => {
  const received = {
    transformOrigin: serializeTransformOriginPropertyValue('initial'),
  }
  const expected = {
    transformOrigin: 'initial',
  }
  expect(received).toEqual(expected)
})
