import { style } from '../../index'

test('fontSynthesisStyle: keyword', () => {
    const received = style({
        fontSynthesisStyle: 'auto',
    })
    const expected = {
        fontSynthesisStyle: 'auto',
    }
    expect(received).toEqual(expected)
})
