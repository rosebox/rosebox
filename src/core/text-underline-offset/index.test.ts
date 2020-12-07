import { style } from '../../index'
import { px } from '../shared'

test('textUnderlineOffset: Length', () => {
    const received = style({
        textUnderlineOffset: px(65),
    })
    const expected = {
        textUnderlineOffset: '65px',
    }
    expect(received).toEqual(expected)
})
