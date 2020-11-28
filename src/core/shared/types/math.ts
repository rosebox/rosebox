import { Duration, DurationUnit, isDuration } from './duration'
import { Length, LengthUnit } from './length'

export interface Setoid<A> {
  eq(x: A, y: A): boolean
}

export function sub<A extends LengthUnit>(x1: Length<A>, x2: Length<A>): Length<A>
export function sub(x1: any, x2: any): any {
  return x1.sub(x1, x2)
}


export function add<A extends LengthUnit>(x1: Length<A>, x2: Length<A>): Length<A>
export function add(x1: Duration, x2: Duration): Duration
export function add(x1: any, x2: any): any {
  return x1.add(x1, x2)
  return null
}

export function mult<A extends DurationUnit>(x1: Duration<A>, x2: number): Duration<A>
export function mult<A extends DurationUnit>(x1: number, x2: Duration<A>): Duration<A>
export function mult<A extends LengthUnit>(x1: Length<A>, x2: number): Length<A>
export function mult<A extends LengthUnit>(x1: number, x2: Length<A>): Length<A>
export function mult(x1: any, x2: any) {
  const func = x1?.mult ?? x2?.mult
  return func(x1, x2)
}

export function eq(x1: Duration, x2: Duration): boolean
export function eq(x1: any, x2: any): boolean {
  return x1.eq(x1, x2)
}