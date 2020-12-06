import { style } from '../../index'
import { pos, px } from '../shared'

test('perspectiveOrigin: [left center]', () => {
    const received = style({
        perspectiveOrigin: pos(px(50), px(30)),
    })
    const expected = {
        perspectiveOrigin: '50px 30px',
    }
    expect(received).toEqual(expected)
})
