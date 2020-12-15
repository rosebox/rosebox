import { style } from '../../index'
import { px } from '../shared'

test('borderCollapse: Length', () => {
    const received = style({
        borderSpacing: px(30),
    })
    const expected = {
        borderSpacing: '30px',
    }
    expect(received).toEqual(expected)
})
