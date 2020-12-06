import { TransformFunction } from '../shared';

/**
 * @category Value constructor
 * @added 0.2.3
 */
export const matrix = (
    x1: number,
    x2: number,
    x3: number,
    x4: number,
    x5: number,
    x6: number,
): TransformFunction<'matrix'> => {
    return {
        type: 'TransformFunction',
        valueConstructor: matrix,
        value: [x1, x2, x3, x4, x5, x6],
    };
};

/**
 * Translates to CSS's **`matrix3d(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13 x14, x15, x16)`**
 * @category Value constructor
 * @added 0.2.3
 */
export const matrix3d = (
    x1: number,
    x2: number,
    x3: number,
    x4: number,
    x5: number,
    x6: number,
    x7: number,
    x8: number,
    x9: number,
    x10: number,
    x11: number,
    x12: number,
    x13: number,
    x14: number,
    x15: number,
    x16: number,
): TransformFunction<'matrix3d'> => {
    return {
        type: 'TransformFunction',
        valueConstructor: matrix3d,
        value: [x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16],
    };
};

export const isMatrix = (x: TransformFunction): boolean => x.valueConstructor === matrix;

export const isMatrix3d = (x: TransformFunction): boolean => x.valueConstructor === matrix3d;

export const serializeMatrix = (x: TransformFunction<'matrix'>): string =>
    `matrix(${x.value.reduce((acc, val, idx) => (idx !== x.value.length - 1 ? acc + `${val}, ` : acc + val), '')})`;

export const serializeMatrix3d = (x: TransformFunction<'matrix3d'>): string =>
    `matrix3d(${x.value.reduce((acc, val, idx) => (idx !== x.value.length - 1 ? acc + `${val}, ` : acc + val), '')})`;
