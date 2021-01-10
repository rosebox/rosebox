import { translateX } from '..'
import { per } from '../types'

test('Serialize Length<"px">', () => {
    const received = translateX(per(50)).serialize()
    const expected = 'translateX(50%)'
    expect(received).toEqual(expected)
})
