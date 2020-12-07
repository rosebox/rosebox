import { ms } from '../shared'
import { style } from '../..'

test('animationDuration', () => {
    const received = style({
        animationDuration: [ms(500), ms(1000)],
    })
    const expected = {
        animationDuration: '500ms, 1000ms',
    }
    expect(received).toEqual(expected)
})
