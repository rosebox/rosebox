import { matrix } from './index'
import { style } from '../../../index'

test('matrix()', () => {
    const received = style({
        transform: matrix(1, 2, 3, 4, 5, 6),
    })
    const expected = {
        transform: 'matrix(1, 2, 3, 4, 5, 6)',
    }
    expect(received).toEqual(expected)
})
