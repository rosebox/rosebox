import { translateX } from '..'
import { style } from '../../style'
import { per } from '../types'

test('Serialize Length<"px">', () => {
    const received = style({
        transform: translateX(per(50)),
    })
    const expected = {
        transform: 'translateX(50%)',
    }
    expect(received).toEqual(expected)
})
