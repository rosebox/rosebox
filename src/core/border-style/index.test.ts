import { RBStyle, style } from '../..'

const styleObj: RBStyle = {
    borderTopStyle: 'dotted',
    borderRightStyle: 'double',
    borderBottomStyle: 'groove',
    borderLeftStyle: 'none',
    borderStyle: ['dotted', 'hidden', 'inset', 'none'],
}

test('borderStyle', () => {
    const received = style(styleObj)
    const expected = {
        borderTopStyle: 'dotted',
        borderRightStyle: 'double',
        borderBottomStyle: 'groove',
        borderLeftStyle: 'none',
        borderStyle: 'dotted hidden inset none',
    }
    expect(received).toEqual(expected)
})
