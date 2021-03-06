export * from './types'
export * from './animatable-props'
export * from './utils'

export type DoubleBar2<A, B> = A | B | [B, A] | [A, B]
export type DoubleBar3<A, B, C> =
    | DoubleBar2<A, B>
    | C
    | [C, A]
    | [A, C]
    | [C, B]
    | [B, C]
    | [C, B, A]
    | [C, A, B]
    | [B, C, A]
    | [B, A, C]
    | [A, C, B]
    | [A, B, C]
export type DoubleBar4<A, B, C, D> =
    | DoubleBar3<A, B, C>
    | D
    | [D, A]
    | [A, D]
    | [D, B]
    | [B, D]
    | [D, B, A]
    | [D, A, B]
    | [B, D, A]
    | [B, A, D]
    | [A, D, B]
    | [A, B, D]
    | [D, C]
    | [C, D]
    | [D, C, A]
    | [D, A, C]
    | [C, D, A]
    | [C, A, D]
    | [A, D, C]
    | [A, C, D]
    | [D, C, B]
    | [D, B, C]
    | [C, D, B]
    | [C, B, D]
    | [B, D, C]
    | [B, C, D]
    | [D, C, B, A]
    | [D, C, A, B]
    | [D, B, C, A]
    | [D, B, A, C]
    | [D, A, C, B]
    | [D, A, B, C]
    | [C, D, B, A]
    | [C, D, A, B]
    | [C, B, D, A]
    | [C, B, A, D]
    | [C, A, D, B]
    | [C, A, B, D]
    | [B, D, C, A]
    | [B, D, A, C]
    | [B, C, D, A]
    | [B, C, A, D]
    | [B, A, D, C]
    | [B, A, C, D]
    | [A, D, C, B]
    | [A, D, B, C]
    | [A, C, D, B]
    | [A, C, B, D]
    | [A, B, D, C]
    | [A, B, C, D]

export type DoubleBar5<A, B, C, D, E> =
    | DoubleBar4<A, B, C, D>
    | E
    | [E, A]
    | [A, E]
    | [E, B]
    | [B, E]
    | [E, B, A]
    | [E, A, B]
    | [B, E, A]
    | [B, A, E]
    | [A, E, B]
    | [A, B, E]
    | [E, C]
    | [C, E]
    | [E, C, A]
    | [E, A, C]
    | [C, E, A]
    | [C, A, E]
    | [A, E, C]
    | [A, C, E]
    | [E, C, B]
    | [E, B, C]
    | [C, E, B]
    | [C, B, E]
    | [B, E, C]
    | [B, C, E]
    | [E, C, B, A]
    | [E, C, A, B]
    | [E, B, C, A]
    | [E, B, A, C]
    | [E, A, C, B]
    | [E, A, B, C]
    | [C, E, B, A]
    | [C, E, A, B]
    | [C, B, E, A]
    | [C, B, A, E]
    | [C, A, E, B]
    | [C, A, B, E]
    | [B, E, C, A]
    | [B, E, A, C]
    | [B, C, E, A]
    | [B, C, A, E]
    | [B, A, E, C]
    | [B, A, C, E]
    | [A, E, C, B]
    | [A, E, B, C]
    | [A, C, E, B]
    | [A, C, B, E]
    | [A, B, E, C]
    | [A, B, C, E]
    | [E, D]
    | [D, E]
    | [E, D, A]
    | [E, A, D]
    | [D, E, A]
    | [D, A, E]
    | [A, E, D]
    | [A, D, E]
    | [E, D, B]
    | [E, B, D]
    | [D, E, B]
    | [D, B, E]
    | [B, E, D]
    | [B, D, E]
    | [E, D, B, A]
    | [E, D, A, B]
    | [E, B, D, A]
    | [E, B, A, D]
    | [E, A, D, B]
    | [E, A, B, D]
    | [D, E, B, A]
    | [D, E, A, B]
    | [D, B, E, A]
    | [D, B, A, E]
    | [D, A, E, B]
    | [D, A, B, E]
    | [B, E, D, A]
    | [B, E, A, D]
    | [B, D, E, A]
    | [B, D, A, E]
    | [B, A, E, D]
    | [B, A, D, E]
    | [A, E, D, B]
    | [A, E, B, D]
    | [A, D, E, B]
    | [A, D, B, E]
    | [A, B, E, D]
    | [A, B, D, E]
    | [E, D, C]
    | [E, C, D]
    | [D, E, C]
    | [D, C, E]
    | [C, E, D]
    | [C, D, E]
    | [E, D, C, A]
    | [E, D, A, C]
    | [E, C, D, A]
    | [E, C, A, D]
    | [E, A, D, C]
    | [E, A, C, D]
    | [D, E, C, A]
    | [D, E, A, C]
    | [D, C, E, A]
    | [D, C, A, E]
    | [D, A, E, C]
    | [D, A, C, E]
    | [C, E, D, A]
    | [C, E, A, D]
    | [C, D, E, A]
    | [C, D, A, E]
    | [C, A, E, D]
    | [C, A, D, E]
    | [A, E, D, C]
    | [A, E, C, D]
    | [A, D, E, C]
    | [A, D, C, E]
    | [A, C, E, D]
    | [A, C, D, E]
    | [E, D, C, B]
    | [E, D, B, C]
    | [E, C, D, B]
    | [E, C, B, D]
    | [E, B, D, C]
    | [E, B, C, D]
    | [D, E, C, B]
    | [D, E, B, C]
    | [D, C, E, B]
    | [D, C, B, E]
    | [D, B, E, C]
    | [D, B, C, E]
    | [C, E, D, B]
    | [C, E, B, D]
    | [C, D, E, B]
    | [C, D, B, E]
    | [C, B, E, D]
    | [C, B, D, E]
    | [B, E, D, C]
    | [B, E, C, D]
    | [B, D, E, C]
    | [B, D, C, E]
    | [B, C, E, D]
    | [B, C, D, E]
    | [E, D, C, B, A]
    | [E, D, C, A, B]
    | [E, D, B, C, A]
    | [E, D, B, A, C]
    | [E, D, A, C, B]
    | [E, D, A, B, C]
    | [E, C, D, B, A]
    | [E, C, D, A, B]
    | [E, C, B, D, A]
    | [E, C, B, A, D]
    | [E, C, A, D, B]
    | [E, C, A, B, D]
    | [E, B, D, C, A]
    | [E, B, D, A, C]
    | [E, B, C, D, A]
    | [E, B, C, A, D]
    | [E, B, A, D, C]
    | [E, B, A, C, D]
    | [E, A, D, C, B]
    | [E, A, D, B, C]
    | [E, A, C, D, B]
    | [E, A, C, B, D]
    | [E, A, B, D, C]
    | [E, A, B, C, D]
    | [D, E, C, B, A]
    | [D, E, C, A, B]
    | [D, E, B, C, A]
    | [D, E, B, A, C]
    | [D, E, A, C, B]
    | [D, E, A, B, C]
    | [D, C, E, B, A]
    | [D, C, E, A, B]
    | [D, C, B, E, A]
    | [D, C, B, A, E]
    | [D, C, A, E, B]
    | [D, C, A, B, E]
    | [D, B, E, C, A]
    | [D, B, E, A, C]
    | [D, B, C, E, A]
    | [D, B, C, A, E]
    | [D, B, A, E, C]
    | [D, B, A, C, E]
    | [D, A, E, C, B]
    | [D, A, E, B, C]
    | [D, A, C, E, B]
    | [D, A, C, B, E]
    | [D, A, B, E, C]
    | [D, A, B, C, E]
    | [C, E, D, B, A]
    | [C, E, D, A, B]
    | [C, E, B, D, A]
    | [C, E, B, A, D]
    | [C, E, A, D, B]
    | [C, E, A, B, D]
    | [C, D, E, B, A]
    | [C, D, E, A, B]
    | [C, D, B, E, A]
    | [C, D, B, A, E]
    | [C, D, A, E, B]
    | [C, D, A, B, E]
    | [C, B, E, D, A]
    | [C, B, E, A, D]
    | [C, B, D, E, A]
    | [C, B, D, A, E]
    | [C, B, A, E, D]
    | [C, B, A, D, E]
    | [C, A, E, D, B]
    | [C, A, E, B, D]
    | [C, A, D, E, B]
    | [C, A, D, B, E]
    | [C, A, B, E, D]
    | [C, A, B, D, E]
    | [B, E, D, C, A]
    | [B, E, D, A, C]
    | [B, E, C, D, A]
    | [B, E, C, A, D]
    | [B, E, A, D, C]
    | [B, E, A, C, D]
    | [B, D, E, C, A]
    | [B, D, E, A, C]
    | [B, D, C, E, A]
    | [B, D, C, A, E]
    | [B, D, A, E, C]
    | [B, D, A, C, E]
    | [B, C, E, D, A]
    | [B, C, E, A, D]
    | [B, C, D, E, A]
    | [B, C, D, A, E]
    | [B, C, A, E, D]
    | [B, C, A, D, E]
    | [B, A, E, D, C]
    | [B, A, E, C, D]
    | [B, A, D, E, C]
    | [B, A, D, C, E]
    | [B, A, C, E, D]
    | [B, A, C, D, E]
    | [A, E, D, C, B]
    | [A, E, D, B, C]
    | [A, E, C, D, B]
    | [A, E, C, B, D]
    | [A, E, B, D, C]
    | [A, E, B, C, D]
    | [A, D, E, C, B]
    | [A, D, E, B, C]
    | [A, D, C, E, B]
    | [A, D, C, B, E]
    | [A, D, B, E, C]
    | [A, D, B, C, E]
    | [A, C, E, D, B]
    | [A, C, E, B, D]
    | [A, C, D, E, B]
    | [A, C, D, B, E]
    | [A, C, B, E, D]
    | [A, C, B, D, E]
    | [A, B, E, D, C]
    | [A, B, E, C, D]
    | [A, B, D, E, C]
    | [A, B, D, C, E]
    | [A, B, C, E, D]
    | [A, B, C, D, E]
