import { style } from '../../index'
import { uri } from '../shared'

test('borderImageSource: URI', () => {
    const received = style({
        borderImageSource: uri('/hidden-stuff'),
    })
    const expected = {
        borderImageSource: 'uri(/hidden-stuff)',
    }
    expect(received).toEqual(expected)
})
