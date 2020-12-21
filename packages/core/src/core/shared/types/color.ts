/* eslint-disable @typescript-eslint/ban-types */
import { Percentage } from '.'
import { RBType, serializeAtomicValue } from '.'

/**
 * @typeTag IntRange
 * @added 0.1.4
 */
export type RGBInteger =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31
    | 32
    | 33
    | 34
    | 35
    | 36
    | 37
    | 38
    | 39
    | 40
    | 41
    | 42
    | 43
    | 44
    | 45
    | 46
    | 47
    | 48
    | 49
    | 50
    | 51
    | 52
    | 53
    | 54
    | 55
    | 56
    | 57
    | 58
    | 59
    | 60
    | 61
    | 62
    | 63
    | 64
    | 65
    | 66
    | 67
    | 68
    | 69
    | 70
    | 71
    | 72
    | 73
    | 74
    | 75
    | 76
    | 77
    | 78
    | 79
    | 80
    | 81
    | 82
    | 83
    | 84
    | 85
    | 86
    | 87
    | 88
    | 89
    | 90
    | 91
    | 92
    | 93
    | 94
    | 95
    | 96
    | 97
    | 98
    | 99
    | 100
    | 101
    | 102
    | 103
    | 104
    | 105
    | 106
    | 107
    | 108
    | 109
    | 110
    | 111
    | 112
    | 113
    | 114
    | 115
    | 116
    | 117
    | 118
    | 119
    | 120
    | 121
    | 122
    | 123
    | 124
    | 125
    | 126
    | 127
    | 128
    | 129
    | 130
    | 131
    | 132
    | 133
    | 134
    | 135
    | 136
    | 137
    | 138
    | 139
    | 140
    | 141
    | 142
    | 143
    | 144
    | 145
    | 146
    | 147
    | 148
    | 149
    | 150
    | 151
    | 152
    | 153
    | 154
    | 155
    | 156
    | 157
    | 158
    | 159
    | 160
    | 161
    | 162
    | 163
    | 164
    | 165
    | 166
    | 167
    | 168
    | 169
    | 170
    | 171
    | 172
    | 173
    | 174
    | 175
    | 176
    | 177
    | 178
    | 179
    | 180
    | 181
    | 182
    | 183
    | 184
    | 185
    | 186
    | 187
    | 188
    | 189
    | 190
    | 191
    | 192
    | 193
    | 194
    | 195
    | 196
    | 197
    | 198
    | 199
    | 200
    | 201
    | 202
    | 203
    | 204
    | 205
    | 206
    | 207
    | 208
    | 209
    | 210
    | 211
    | 212
    | 213
    | 214
    | 215
    | 216
    | 217
    | 218
    | 219
    | 220
    | 221
    | 222
    | 223
    | 224
    | 225
    | 226
    | 227
    | 228
    | 229
    | 230
    | 231
    | 232
    | 233
    | 234
    | 235
    | 236
    | 237
    | 238
    | 239
    | 240
    | 241
    | 242
    | 243
    | 244
    | 245
    | 246
    | 247
    | 248
    | 249
    | 250
    | 251
    | 252
    | 253
    | 254
    | 255

type RGBInput = [RGBInteger, RGBInteger, RGBInteger] | [Percentage, Percentage, Percentage]
type RGBAInput = [RGBInteger, RGBInteger, RGBInteger, number] | [Percentage, Percentage, Percentage, number]
type HSLInput = [number, Percentage, Percentage]
type HSLAInput = [number, Percentage, Percentage, number]

const serializeRGB = (x: RGB) => {
    const { data } = x
    const arr = (data as number[]).map(Math.round).map(serializeAtomicValue)
    return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`
}

const serializeRGBA = (x: RGBA) => {
    const { data } = x
    const numArray = (data as any[]).slice(0, 3).map(Math.round).map(serializeAtomicValue)
    return `rgba(${numArray[0]}, ${numArray[1]}, ${numArray[2]}, ${serializeAtomicValue(data[3])})`
}

const serializeHSL = (x: HSL) => {
    const { data } = x
    return `hsl(${serializeAtomicValue(data[0])}, ${serializeAtomicValue(data[1])}, ${serializeAtomicValue(data[2])})`
}

const serializeHSLA = (x: HSLA) => {
    const { data } = x
    return `hsla(${serializeAtomicValue(data[0])}, ${serializeAtomicValue(data[1])}, ${serializeAtomicValue(
        data[2],
    )}, ${serializeAtomicValue(data[3])})`
}

/**
 *
 * A type that maps to CSS's **`<rgb()>`**
 * @added 0.1.4
 */
export class RGB implements RBType<RGBInput> {
    valueConstructor: Function
    data: RGBInput
    serialize: () => string

    private constructor(data: RGBInput) {
        this.data = data
        this.valueConstructor = RGB.rgb
        this.serialize = () => serializeRGB(this)
    }

    /**
     * Constructs a value of type **`RGB`**.
     */
    static rgb(x1: Percentage, x2: Percentage, x3: Percentage): RGB
    static rgb(x1: RGBInteger, x2: RGBInteger, x3: RGBInteger): RGB
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static rgb(x1: any, x2: any, x3: any): RGB {
        return new RGB([x1, x2, x3])
    }
}
export const rgb = RGB.rgb

/**
 *
 * A type that maps to CSS's **`<rgba()>`**.
 * @added 0.1.4
 */
export class RGBA implements RBType<RGBAInput> {
    valueConstructor: Function
    data: RGBAInput
    serialize: () => string

    private constructor(data: RGBAInput) {
        this.data = data
        this.valueConstructor = RGBA.rgba
        this.serialize = () => serializeRGBA(this)
    }

    /**
     * Constructs a value of type **`RGBA`**.
     */
    static rgba(x1: Percentage, x2: Percentage, x3: Percentage, x4: number): RGBA
    static rgba(x1: RGBInteger, x2: RGBInteger, x3: RGBInteger, x4: number): RGBA
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static rgba(x1: any, x2: any, x3: any, x4: number): RGBA {
        return new RGBA([x1, x2, x3, x4])
    }
}

export const rgba = RGBA.rgba

/**
 *
 * A type that maps to CSS's **`<hsl()>`**.
 * @added 0.1.4
 */
export class HSL implements RBType<HSLInput> {
    valueConstructor: Function
    data: HSLInput
    serialize: () => string

    private constructor(data: HSLInput) {
        this.data = data
        this.valueConstructor = HSL.hsl
        this.serialize = () => serializeHSL(this)
    }
    /**
     * Constructs a value of type **`HSL`**.
     */
    static hsl(x1: number, x2: Percentage, x3: Percentage): HSL {
        return new HSL([x1, x2, x3])
    }
}

export const hsl = HSL.hsl

/**
 *
 * A type that maps to CSS's **`<hsla()>`**.
 * @added 0.1.0
 */
export class HSLA implements RBType<HSLAInput> {
    valueConstructor: Function
    data: HSLAInput
    serialize: () => string

    private constructor(data: HSLAInput) {
        this.data = data
        this.valueConstructor = HSLA.hsla
        this.serialize = () => serializeHSLA(this)
    }

    /**
     * Constructs a value of type **`HSLA`**.
     */
    static hsla(x1: number, x2: Percentage, x3: Percentage, x4: number): HSLA {
        return new HSLA([x1, x2, x3, x4])
    }
}

export const hsla = HSLA.hsla

/**
 *
 * A type that maps to CSS's **`<hex-color>`**.
 * @added 0.1.4
 * @note Currently this type is just a wrapper around the **`string`** type, and is not safe, consider using other color types if you need type-safe colors.
 */
export class HEX implements RBType<string> {
    valueConstructor: Function
    data: string
    serialize: () => string

    private constructor(data: string) {
        this.data = data
        this.valueConstructor = HEX.hex
        this.serialize = (): string => {
            return this.data
        }
    }
    /**
     * Constructs a value of type **`HEX`**.
     */
    static hex(x: string): HEX {
        return new HEX(x)
    }
}

export const hex = HEX.hex

const extendedColorKeywords = [
    'aliceblue',
    'antiquewhite',
    'aqua',
    'aquamarine',
    'azure',
    'beige',
    'bisque',
    'black',
    'blanchedalmond',
    'blue',
    'blueviolet',
    'brown',
    'burlywood',
    'cadetblue',
    'chartreuse',
    'chocolate',
    'coral',
    'cornflowerblue',
    'cornsilk',
    'crimson',
    'cyan',
    'darkblue',
    'darkcyan',
    'darkgoldenrod',
    'darkgray',
    'darkgreen',
    'darkgrey',
    'darkkhaki',
    'darkmagenta',
    'darkolivegreen',
    'darkorange',
    'darkorchid',
    'darkred',
    'darksalmon',
    'darkseagreen',
    'darkslateblue',
    'darkslategray',
    'darkslategrey',
    'darkturquoise',
    'darkviolet',
    'deeppink',
    'deepskyblue',
    'dimgray',
    'dimgrey',
    'dodgerblue',
    'firebrick',
    'floralwhite',
    'forestgreen',
    'fuchsia',
    'gainsboro',
    'ghostwhite',
    'gold',
    'goldenrod',
    'gray',
    'green',
    'greenyellow',
    'grey',
    'honeydew',
    'hotpink',
    'indianred',
    'indigo',
    'ivory',
    'khaki',
    'lavender',
    'lavenderblush',
    'lawngreen',
    'lemonchiffon',
    'lightblue',
    'lightcoral',
    'lightcyan',
    'lightgoldenrodyellow',
    'lightgray',
    'lightgreen',
    'lightgrey',
    'lightpink',
    'lightsalmon',
    'lightseagreen',
    'lightskyblue',
    'lightslategray',
    'lightslategrey',
    'lightsteelblue',
    'lightyellow',
    'lime',
    'limegreen',
    'linen',
    'magenta',
    'maroon',
    'mediumaquamarine',
    'mediumblue',
    'mediumorchid',
    'mediumpurple',
    'mediumseagreen',
    'mediumslateblue',
    'mediumspringgreen',
    'mediumturquoise',
    'mediumvioletred',
    'midnightblue',
    'mintcream',
    'mistyrose',
    'moccasin',
    'navajowhite',
    'navy',
    'oldlace',
    'olive',
    'olivedrab',
    'orange',
    'orange',
    'orangered',
    'orchid',
    'palegoldenrod',
    'palegreen',
    'paleturquoise',
    'palevioletred',
    'papayawhip',
    'peachpuff',
    'peru',
    'pink',
    'plum',
    'powderblue',
    'purple',
    'red',
    'rosybrown',
    'royalblue',
    'saddlebrown',
    'salmon',
    'sandybrown',
    'seagreen',
    'seashell',
    'sienna',
    'silver',
    'skyblue',
    'slateblue',
    'slategray',
    'slategrey',
    'snow',
    'springgreen',
    'steelblue',
    'tan',
    'teal',
    'thistle',
    'tomato',
    'turquoise',
    'violet',
    'wheat',
    'white',
    'whitesmoke',
    'yellow',
    'yellowgreen',
] as const

export type NamedColorKeyword = typeof extendedColorKeywords[number]

export const standaloneKeywords = ['currentColor', 'transparent'] as const
export type StandaloneColorKeyword = typeof standaloneKeywords[number]

/**
 * @global
 * A type that maps to CSS's **`<color>`** data-type
 * */
export type Color = HEX | RGB | RGBA | HSL | HSLA | StandaloneColorKeyword | NamedColorKeyword

export const isHex = (x: unknown): x is HEX => x instanceof HEX
export const isRGB = (x: unknown): x is RGB => x instanceof RGB
export const isRGBA = (x: unknown): x is RGBA => x instanceof RGBA
export const isHSL = (x: unknown): x is HSL => x instanceof HSL
export const isHSLA = (x: unknown): x is HSLA => x instanceof HSLA
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isExtendedColorKeyword = (value: any): value is NamedColorKeyword => extendedColorKeywords.includes(value)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isStandaloneColorKeyword = (value: any): value is StandaloneColorKeyword =>
    standaloneKeywords.includes(value)

/**
 *
 * @deprecated due to performance issues
 */
export const isColor = (value: unknown): value is Color =>
    isHex(value) ||
    isRGB(value) ||
    isRGBA(value) ||
    isHSL(value) ||
    isHSLA(value) ||
    isStandaloneColorKeyword(value) ||
    isExtendedColorKeyword(value)
