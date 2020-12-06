import { Length, serializeAtomicValue } from '../../shared';
import { TransformFunction } from '../shared';

/**
 * Translates to CSS's **`perspective(x)`**
 * @category Value constructor
 * @added 0.2.3
 */
export const perspective = (x: Length): TransformFunction<'perspective'> => ({
    type: 'TransformFunction',
    valueConstructor: perspective,
    value: x,
});

export const isPerspective = (x: TransformFunction): boolean => x.valueConstructor === perspective;

export const serializePerspective = (x: TransformFunction<'perspective'>): string =>
    `perspective(${serializeAtomicValue(x.value)})`;
