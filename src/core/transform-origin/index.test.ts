import { serializeTransformOriginPropertyValue } from './transform-origin'
import { per, px } from '../shared'

test('transormOrigin([keyword, keyword])', () => {
  const received = {
    transformOrigin: serializeTransformOriginPropertyValue([per(50), px(0)]),
  }
  const expected = {
    transformOrigin: '50% 0px',
  }
  expect(received).toEqual(expected)
})

test('transormOrigin([LengthPercentage, LengthPercentage, Length])', () => {
  const received = {
    transformOrigin: serializeTransformOriginPropertyValue([
      per(100),
      per(100),
      px(50),
    ]),
  }
  const expected = {
    transformOrigin: '100% 100% 50px',
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
