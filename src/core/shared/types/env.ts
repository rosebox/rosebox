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
    serialize: () => string

    private constructor(x: SafeAreaInsetVariable, y: any) {
        this.data = [x, y]
        this.valueConstructor = Env.env
        this.serialize = () => serialize(this)
    }

    /** Constructs a value of type **`Env`**. This functions maps to CSS's **`env()`**  */
    static env(safeAreaInsetVariable: SafeAreaInsetVariable): Env
    static env(safeAreaInsetVariable: SafeAreaInsetVariable, x: any): Env
    static env(safeAreaInsetVariable: SafeAreaInsetVariable, x?: any): Env {
        return new Env(safeAreaInsetVariable, x)
    }
}

/** @category Value constructor */
export const env = Env.env
