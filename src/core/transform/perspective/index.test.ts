import { style } from '../../../index';
import { perspective } from './perspective';
import { px } from '../../shared';

test('perspective()', () => {
    const received = style({
        transform: perspective(px(30)),
    });
    const expected = {
        transform: 'perspective(30px)',
    };
    expect(received).toEqual(expected);
});
