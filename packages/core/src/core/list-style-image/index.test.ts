import { style } from '../../index'
import { linGrad, per } from '../shared'

test('listStyleImage: keyword', () => {
    const received = style({
        listStyleImage: linGrad({
            direction: 'to left',
            colorStopList: ['red', per(30), ['black', per(20)]],
        }),
    })
    const expected = {
        listStyleImage: 'linear-gradient(to left, red, 30%, black 20%)',
    }
    expect(received).toEqual(expected)
})
