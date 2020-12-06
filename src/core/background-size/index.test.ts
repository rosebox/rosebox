import { style } from '../../index'
import { per } from '../shared'

test('backgroundSize: BackgroundSize', () => {
    const received = style({
        backgroundSize: [per(50), 'auto'],
    })
    const expected = {
        backgroundSize: '50% auto',
    }
    expect(received).toEqual(expected)
})

test('backgroundSize: BackgroundSize[]', () => {
    const received = style({
        backgroundSize: [
            [per(50), 'auto'],
            [per(100), per(50)],
        ],
    })
    const expected = {
        backgroundSize: '50% auto, 100% 50%',
    }
    expect(received).toEqual(expected)
})
