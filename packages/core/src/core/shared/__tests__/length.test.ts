import { mult } from '../utils'
import {
    px,
    em,
    rem,
    ex,
    vw,
    vh,
    vmax,
    vmin,
    ch,
    q,
    cm,
    mm,
    In,
    pc,
    pt,
} from '../types/length'

test('Serialize Length<"px">', () => {
    const received = px(300).serialize()
    const expected = '300px'
    expect(received).toEqual(expected)
})

test('Serialize Length<"em">', () => {
    const received = em(300).serialize()
    const expected = '300em'
    expect(received).toEqual(expected)
})

test('Serialize Length<"rem">', () => {
    const received = rem(300).serialize()
    const expected = '300rem'
    expect(received).toEqual(expected)
})

test('Serialize Length<"ex">', () => {
    const received = ex(300).serialize()
    const expected = '300ex'
    expect(received).toEqual(expected)
})

test('Serialize Length<"vmin">', () => {
    const received = vmin(300).serialize()
    const expected = '300vmin'
    expect(received).toEqual(expected)
})

test('Serialize Length<"vmax">', () => {
    const received = vmax(300).serialize()
    const expected = '300vmax'
    expect(received).toEqual(expected)
})
test('Serialize Length<"vw">', () => {
    const received = vw(300).serialize()
    const expected = '300vw'
    expect(received).toEqual(expected)
})

test('Serialize Length<"vh">', () => {
    const received = vh(300).serialize()
    const expected = '300vh'
    expect(received).toEqual(expected)
})

test('Serialize Length<"ch">', () => {
    const received = ch(300).serialize()
    const expected = '300ch'
    expect(received).toEqual(expected)
})

test('Serialize Length<"q">', () => {
    const received = q(300).serialize()
    const expected = '300q'
    expect(received).toEqual(expected)
})
test('Serialize Length<"cm">', () => {
    const received = cm(300).serialize()
    const expected = '300cm'
    expect(received).toEqual(expected)
})
test('Serialize Length<"mm">', () => {
    const received = mm(300).serialize()
    const expected = '300mm'
    expect(received).toEqual(expected)
})
test('Serialize Length<"In">', () => {
    const received = In(300).serialize()
    const expected = '300in'
    expect(received).toEqual(expected)
})
test('Serialize Length<"pc">', () => {
    const received = pc(300).serialize()
    const expected = '300pc'
    expect(received).toEqual(expected)
})
test('Serialize Length<"pt">', () => {
    const received = pt(300).serialize()
    const expected = '300pt'
    expect(received).toEqual(expected)
})

test('Serialize Length<"pt">', () => {
    const received = mult(px(300), 3).serialize()
    const expected = '900px'
    expect(received).toEqual(expected)
})
