import { getData, RBType, serializeAtomicValue } from './shared'

const serialize = (x: Env) => {
  const [x1, x2] = getData(x)
  return `env(${x1}${x2 ? serializeAtomicValue(x2) : ''})`
}

type SafeAreaInsetVariable =
  | 'safe-area-inset-top'
  | 'safe-area-inset-right'
  | 'safe-area-inset-bottom'
  | 'safe-area-inset-left'

export class Env implements RBType<any> {
  data: any
  valueConstructor: Function

  private constructor(x: SafeAreaInsetVariable, y: any) {
    this.data = [x, y]
    this.valueConstructor = Env.env
  }

<<<<<<< HEAD
  /** @category Value constructor */
=======
  /** Constructs a value of type **`Env`**. This functions maps to CSS's **`env()`**  */
>>>>>>> master
  static env(safeAreaInsetVariable: SafeAreaInsetVariable): Env
  static env(safeAreaInsetVariable: SafeAreaInsetVariable, x: any): Env
  static env(safeAreaInsetVariable: SafeAreaInsetVariable, x?: any): Env {
    return new Env(safeAreaInsetVariable, x)
  }
  serialize = () => serialize(this)
}

<<<<<<< HEAD
=======
/** @category Value constructor */
>>>>>>> master
export const env = Env.env
