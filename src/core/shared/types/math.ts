export interface Setoid<A> {
    /** @ignore */
    eq(x: A, y: A): boolean
}
