import { Calculation } from './calc';
import { LengthPercentage, RBType, serializeAtomicValue } from './shared';

/**
 * A value of this type defines an (x, y) coordinate.
 * @added 0.2.7
 */
export class Position implements RBType<[LengthPercentage | Calculation, LengthPercentage | Calculation]> {
    data: [LengthPercentage | Calculation, LengthPercentage | Calculation];
    valueConstructor: Function;
    serialize: () => string;

    private constructor(x: [LengthPercentage | Calculation, LengthPercentage | Calculation]) {
        this.data = x;
        this.valueConstructor = Position.pos;
        this.serialize = () => serializePosition(this);
    }

    /**
     * Constructs a value of type `Position`.
     */
    static pos(x: LengthPercentage, y: LengthPercentage): Position {
        return new Position([x, y]);
    }
}

export const pos = Position.pos;

export const serializePosition = (x: Position): string =>
    (x.data as (LengthPercentage | Calculation)[]).reduce((acc, val, idx) => {
        const serializedVal = serializeAtomicValue(val);
        return acc + serializedVal + (idx === x.data.length - 1 ? '' : ' ');
    }, '');
