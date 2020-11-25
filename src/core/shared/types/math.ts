import { Duration, isDuration, ms } from './duration'
import { Length } from './length'

export interface Setoid<A> {
  eq(x: A, y: A): boolean
}

export function sub(x1: Duration, x2: Duration): Duration
export function sub(x1: any, x2: any): any {
  if (isDuration(x1)) return x1.sub(x1, x2)
  return null
}

export function add(x1: Duration, x2: Duration): Duration
export function add(x1: any, x2: any): any {
  if (isDuration(x1)) return x1.add(x1, x2)
  return null
}

export function mult(x1: Duration, x2: number): Duration
export function mult(x1: number, x2: Duration): Duration
export function mult(x1: Length, x2: number): Duration
export function mult(x1: number, x2: Length): Duration
export function mult(x1: any, x2: any) {
  const func = x1?.mult ?? x2?.mult
  return func(x1, x2)
}

export function eq(x1: Duration, x2: Duration): boolean
export function eq(x1: any, x2: any): boolean {
  return x1.eq(x1, x2)
}