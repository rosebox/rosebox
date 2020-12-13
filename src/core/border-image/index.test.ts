import { style } from '../../index'
import { styleCSS__ } from '../../integrations/jss'
import { per, px, url } from '../shared'

test('borderImage: Object', () => {
    const received = style({
        borderImage: {
            source: url('/test'),
            outset: 3,
            width: px(30),
        },
    })
    const expected = {
        borderImage: 'url(/test) 100% / 30px / 3 stretch',
    }
    expect(received).toEqual(expected)
})

test('borderImage: Object', () => {
    const received = style({
        borderImage: {
            source: url('/test'),
            outset: 3,
            slice: [27, 3],
            width: [px(30), per(40)],
        },
    })
    const expected = {
        borderImage: 'url(/test) 27 3 / 30px 40% / 3 stretch',
    }
    expect(received).toEqual(expected)
})
