import { px } from '../core'
import {toNum} from '.'

test('toNum<Length>', () => {
    const received = toNum(px(30))
    const expected = 30
    expect(received).toEqual(expected)
  })