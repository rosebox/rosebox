import ColorM from 'color'
import { pipe } from 'ramda'

import {
  Percentage,
  GlobalCssKeyword,
  RBType,
  NAMESPACE,
  getData,
  getTypeName,
  per,
} from '../shared'
import { serializePercentage } from '../shared'

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

type RGBInput =
  | [RGBInteger, RGBInteger, RGBInteger]
  | [Percentage, Percentage, Percentage]
type RGBAInput =
  | [RGBInteger, RGBInteger, RGBInteger, number]
  | [Percentage, Percentage, Percentage, number]
type HSLInput = [number, Percentage, Percentage]
type HSLAInput = [number, Percentage, Percentage, number]

/**
 *
 * A type that maps to CSS's **`<rgb()>`**
 * @added 0.1.4
 */
export interface RGB extends RBType<'RGB', RGBInput> {}

/**
 *
 * A type that maps to CSS's **`<rgba()>`**.
 * @added 0.1.4
 */
export interface RGBA extends RBType<'RGBA', RGBAInput> {}
/**
 *
 * A type that maps to CSS's **`<hsl()>`**.
 * @added 0.1.4
 */
export interface HSL extends RBType<'HSL', HSLInput> {}

/**
 *
 * A type that maps to CSS's **`<hsla()>`**.
 * @added 0.1.0
 */
export interface HSLA extends RBType<'HSLA', HSLAInput> {}

/**
 *
 * A type that maps to CSS's **`<hex-color>`**.
 * @added 0.1.4
 * @note Currently this type is just a wrapper around the **`string`** type, and is not safe, consider using other color types if you need type-safe colors.
 */
export interface HEX extends RBType<'HEX', string> {}

/**
 * Constructs a value of type **`HEX`**.
 * @category Value constructor
 * @added 0.1.4
 */
export const hex = (x: string): HEX => ({
  [NAMESPACE]: {
    type: 'HEX',
    data: x,
    valueConstructor: hex,
  },
})

export function rgb(x1: Percentage, x2: Percentage, x3: Percentage): RGB

export function rgb(x1: RGBInteger, x2: RGBInteger, x3: RGBInteger): RGB

/**
 * Constructs a value of type **`RGB`**.
 * @category Value constructor
 * @added 0.1.4
 */
export function rgb(
  x1: Percentage | RGBInteger,
  x2: Percentage | RGBInteger,
  x3: Percentage | RGBInteger
): RGB {
  return {
    [NAMESPACE]: {
      type: 'RGB',
      data: [x1, x2, x3] as RGBInput,
      valueConstructor: rgb,
    },
  }
}

export function rgba(
  x1: Percentage,
  x2: Percentage,
  x3: Percentage,
  x4: number
): RGBA

export function rgba(
  x1: RGBInteger,
  x2: RGBInteger,
  x3: RGBInteger,
  x4: number
): RGBA

/**
 * Constructs a value of type **`RGBA`**.
 * @category Value constructor
 * @added 0.1.4
 */
export function rgba(
  x1: Percentage | RGBInteger,
  x2: Percentage | RGBInteger,
  x3: Percentage | RGBInteger,
  x4: number
): RGBA {
  return {
    [NAMESPACE]: {
      type: 'RGBA',
      data: [x1, x2, x3, x4] as RGBAInput,
      valueConstructor: rgba,
    },
  }
}

/**
 * Constructs a value of type **`HSL`**.
 * @category Value constructor
 * @added 0.1.4
 */
export const hsl = (x1: number, x2: Percentage, x3: Percentage): HSL => ({
  [NAMESPACE]: {
    type: 'HSL',
    data: [x1, x2, x3],
    valueConstructor: hsl,
  },
})

/**
 * Constructs a value of type **`HSLA`**.
 * @category Value constructor
 * @added 0.1.4
 */
export const hsla = (
  x1: number,
  x2: Percentage,
  x3: Percentage,
  x4: number
): HSLA => ({
  [NAMESPACE]: {
    type: 'HSLA',
    data: [x1, x2, x3, x4],
    valueConstructor: hsl,
  },
})

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

export type Color =
  | HEX
  | RGB
  | RGBA
  | HSL
  | HSLA
  | StandaloneColorKeyword
  | NamedColorKeyword

const isHex = (x: any): x is HEX => getTypeName(x) === 'HEX'
const isRGB = (x: any): x is RGB => getTypeName(x) === 'RGB'
const isRGBA = (x: any): x is RGBA => getTypeName(x) === 'RGBA'
const isHSL = (x: any): x is HSL => getTypeName(x) === 'HSL'
const isHSLA = (x: any): x is HSLA => getTypeName(x) === 'HSLA'
const isExtendedColorKeyword = (value: any): value is NamedColorKeyword =>
  extendedColorKeywords.includes(value)
const isStandaloneColorKeyword = (
  value: any
): value is StandaloneColorKeyword => standaloneKeywords.includes(value)

const serializeHex = (x: HEX): string => getData(x)

const serializeRGB = (x: RGB): string => {
  const value = getData(x)
  return typeof value[0] === 'number'
    ? `rgb(${value[0]}, ${value[1]}, ${value[2]})`
    : `rgb(${serializePercentage(value[0])}, ${serializePercentage(
        value[1] as Percentage
      )}, ${serializePercentage(value[2] as Percentage)})`
}

const serializeRGBA = (x: RGBA): string => {
  const value = getData(x)
  return typeof value[0] === 'number'
    ? `rgba(${value[0]}, ${value[1]}, ${value[2]}, ${value[3]})`
    : `rgba(${serializePercentage(value[0])}, ${serializePercentage(
        value[1] as Percentage
      )}, ${serializePercentage(value[2] as Percentage)}, ${value[3]})`
}

const serializeHSL = (x: HSL): string => {
  const value = getData(x)
  return `hsl(${value[0]}, ${serializePercentage(
    value[1]
  )}, ${serializePercentage(value[2])})`
}

const serializeHSLA = (x: HSLA): string => {
  const value = getData(x)
  return `hsla(${value[0]}, ${serializePercentage(
    value[1]
  )}, ${serializePercentage(value[2])}, ${value[3]})`
}

export const isColor = (value: any): value is Color =>
  isHex(value) ||
  isRGB(value) ||
  isRGBA(value) ||
  isHSL(value) ||
  isHSLA(value) ||
  isStandaloneColorKeyword(value) ||
  isExtendedColorKeyword(value)

export const serializeColorValue = (x: Color): string =>
  isHex(x)
    ? serializeHex(x)
    : isRGB(x)
    ? serializeRGB(x)
    : isRGBA(x)
    ? serializeRGBA(x)
    : isHSL(x)
    ? serializeHSL(x)
    : isHSLA(x)
    ? serializeHSLA(x)
    : x

export const serializeColor = (x: Color | GlobalCssKeyword) => ({
  color: isColor(x) ? serializeColorValue(x) : x,
})

/**
 * @category RBDeclarationTypeAlias
 */
export type ColorDeclaration = {
  /**
   * Maps to CSS's **`color`** property
   * @category RBProperty
   * @formalSyntaxForValue <color>
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/2018/REC-css-color-3-20180619/#color0
   */
  color: Color | GlobalCssKeyword
}

export const lighten = (x: HEX | RGB | HSL, y: number): typeof x => {
  if (isRGB(x)) {
    const lightened = ColorM.rgb(getData(x)).lighten(y)
    return rgb(
      lightened.red() as RGBInteger,
      lightened.green() as RGBInteger,
      lightened.blue() as RGBInteger
    )
  }

  if (isHSL(x)) {
    const fn = pipe(
      (x: HSL) => getData(x),
      (x: HSLInput) => ColorM.hsl(x[0], getData(x[1]), getData(x[2])),
      (x) => x.lighten(y).array(),
      (x) => hsl(x[0], per(x[1]), per(x[2]))
    )
    return fn(x)
  }

  const darkened = ColorM(getData(x)).lighten(y).hex()
  return hex(darkened)
}

export const darken = (x: HEX | RGB | HSL, y: number): typeof x => {
  if (isRGB(x)) {
    const darkened = ColorM.rgb(getData(x)).darken(y)
    return rgb(
      darkened.red() as RGBInteger,
      darkened.green() as RGBInteger,
      darkened.blue() as RGBInteger
    )
  }

  if (isHSL(x)) {
    const fn = pipe(
      (x: HSL) => getData(x),
      (x: HSLInput) => ColorM.hsl(x[0], getData(x[1]), getData(x[2])),
      (x) => x.darken(y).array(),
      (x) => hsl(x[0], per(x[1]), per(x[2]))
    )
    return fn(x)
  }

  if (isHex(x)) {
    const darkened = ColorM(getData(x)).darken(y).hex()
    return hex(darkened)
  }
  return x
}
