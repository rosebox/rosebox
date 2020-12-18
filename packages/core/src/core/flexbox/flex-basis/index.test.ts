import { style } from '../../..'
import { px } from '../../shared'

test('flexBasis: keyword', () => {
    const received = style({
        flexBasis: 'content',
    })
    const expected = {
        flexBasis: 'content',
    }
    expect(received).toEqual(expected)
})

test('flexBasis: Length', () => {
    const received = style({
        flexBasis: px(100),
    })
    const expected = {
        flexBasis: '100px',
    }
    expect(received).toEqual(expected)
})
