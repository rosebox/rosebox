import { style } from '../../index'
import { uri } from '../shared'
import { styleCSS__ } from '../../integrations'

test('borderImageSource: URI', () => {
    const received = style({
        borderImageSource: uri('/hidden-stuff'),
    })
    const expected = {
        borderImageSource: 'uri(/hidden-stuff)',
    }
    expect(received).toEqual(expected)
})

test('border-image-source: URI', () => {
    const received = styleCSS__({
        'border-image-source': uri('/hidden-stuff'),
    })
    const expected = {
        'border-image-source': 'uri(/hidden-stuff)',
    }
    expect(received).toEqual(expected)
})
