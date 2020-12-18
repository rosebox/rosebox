import { style } from '../../..'
import { per, px } from '../../shared'

test('flex', () => {
    const received = style({
        flex: [0, 1, px(100)],
    })
    const expected = {
        flex: '0 1 100px',
    }
    expect(received).toEqual(expected)
})

test('flex', () => {
    const received = style({
        flex: per(50),
    })
    const expected = {
        flex: '50%',
    }
    expect(received).toEqual(expected)
})
