import { style } from '../../index'
import { styleCSS__ } from '../../integrations/jss'

test('backgroundAttachment: keyword', () => {
    const received = style({
        backgroundAttachment: 'fixed',
    })
    const expected = {
        backgroundAttachment: 'fixed',
    }
    expect(received).toEqual(expected)
})

test('background-attachment: keyword', () => {
    const received = styleCSS__({
        'background-attachment': 'fixed',
    })
    const expected = {
        'background-attachment': 'fixed',
    }
    expect(received).toEqual(expected)
})
