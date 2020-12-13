import { per, pos, radGrad, repRadGrad, px } from '../types'

test('Serialize radGrad', () => {
    const received = radGrad({
        position: pos(per(50), per(50)),
        endingShape: 'circle',
        colorStopList: ['red', px(30), ['black', per(20)]],
    }).serialize()
    const expected = 'radial-gradient(circle at 50% 50%, red, 30%, black 20%)'
    expect(received).toEqual(expected)
})

test('Serialize repRadGrad', () => {
    const received = repRadGrad({
        position: pos(per(50), per(50)),
        endingShape: 'circle',
        colorStopList: ['red', per(30), ['black', per(20)]],
    }).serialize()
    const expected = 'repeat-radial-gradient(circle at 50% 50%, red, 30%, black 20%)'
    expect(received).toEqual(expected)
})
