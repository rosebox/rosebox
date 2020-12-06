import { ms } from '../shared'
import { style } from '../..'

test('transitionDelay', () => {
    const received = style({
        transitionDelay: [ms(300), ms(1000)],
    })
    const expected = {
        transitionDelay: '300ms, 1000ms',
    }
    expect(received).toEqual(expected)
})
