import { style } from '../..'
import { px } from '../shared'

test('outlineWidth', () => {
    const received = style({
        outlineWidth: px(3),
    })
    const expected = {
        outlineWidth: '3px',
    }
    expect(received).toEqual(expected)
})
