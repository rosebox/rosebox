import { Duration, isDuration, ms } from './duration'
import { NAMESPACE } from './shared'

export function subs(x1: Duration, x2: Duration): Duration

export function subs(x1: any, x2: any): any {
  if (isDuration(x1)) {
    const x1ms =
      x1[NAMESPACE].valueConstructor === ms
        ? x1[NAMESPACE].data
        : x1[NAMESPACE].data * 1000
     const x2m2 = x2[NAMESPACE].valueConstructor === ms
        ? x2[NAMESPACE].data
        : x2[NAMESPACE].data * 1000
    return ms(x1ms - x2m2)
  }
  return null
}

export function add(x1: Duration, x2: Duration): Duration

export function add(x1: any, x2: any): any {
  if (isDuration(x1)) {
    const x1ms =
      x1[NAMESPACE].valueConstructor === ms
        ? x1[NAMESPACE].data
        : x1[NAMESPACE].data * 1000
     const x2m2 = x2[NAMESPACE].valueConstructor === ms
        ? x2[NAMESPACE].data
        : x2[NAMESPACE].data * 1000
    return ms(x2m2 + x1ms)
  }
  return null
}
