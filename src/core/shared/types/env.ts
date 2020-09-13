import { getData, NAMESPACE, RBType, serializeAtomicValue } from './shared'

const serializer = (x: Env) => {
  const [x1, x2] = getData(x)
  return `env(${x1}${x2 ? serializeAtomicValue(x2) : ''})`
}

type SafeAreaInsetVariable =
  | 'safe-area-inset-top'
  | 'safe-area-inset-right'
  | 'safe-area-inset-bottom'
  | 'safe-area-inset-left'

export interface Env extends RBType<'Env', any> {}

export function env(safeAreaInsetVariable: SafeAreaInsetVariable): Env

export function env(safeAreaInsetVariable: SafeAreaInsetVariable, x: any): Env

export function env(
  safeAreaInsetVariable: SafeAreaInsetVariable,
  x?: any
): Env {
  return {
    [NAMESPACE]: {
      type: 'Env',
      data: [safeAreaInsetVariable, x],
      valueConstructor: env,
      serializer,
    },
  }
}
