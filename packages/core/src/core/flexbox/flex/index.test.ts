import { style } from '../../..'
import { px } from '../../shared'

test('flex', () => {
    const received = style({
        flex: [0, 1, px(100)],
    })
    const expected = {
        flex: '0 1 100px',
    }
    expect(received).toEqual(expected)
})

test('flex: FlexObject', () => {
    const received = style({
        flex: {
            grow: 1,
            basis: px(100),
        },
    })
    const expected = {
        flex: '1 1 100px',
    }
    expect(received).toEqual(expected)
})
