import { steps } from '../shared'
import { style } from '../..'

test('animationTimingFunction', () => {
    const received = style({
        animationTimingFunction: steps(3, 'jump-both'),
    })
    const expected = {
        animationTimingFunction: 'steps(3, jump-both)',
    }
    expect(received).toEqual(expected)
})
