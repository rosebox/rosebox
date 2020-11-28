import { cadd, per, px, csub, cmult, cdiv, vw } from '../types'

test('Serialize Calculation<addition>', () => {
    const received = cadd(px(300), per(100)).serialize()
    const expected = 'calc(300px + 100%)'
    expect(received).toEqual(expected)
})

test('Serialize Calculation<addition>', () => {
    const received = cadd(px(300), cadd(px(200), per(100))).serialize()
    const expected = 'calc(300px + calc(200px + 100%))'
    expect(received).toEqual(expected)
})

test('Serialize Calculation<substraction>', () => {
    const received = csub(per(100), px(100)).serialize()
    const expected = 'calc(100% - 100px)'
    expect(received).toEqual(expected)
})


test('Serialize Calculation<multiplication>', () => {
    const received = cmult(per(100), 3).serialize()
    const expected = 'calc(100% * 3)'
    expect(received).toEqual(expected)
})

test('Serialize Calculation<division>', () => {
    const received = cdiv(vw(100), 3).serialize()
    const expected = 'calc(100vw / 3)'
    expect(received).toEqual(expected)
})
