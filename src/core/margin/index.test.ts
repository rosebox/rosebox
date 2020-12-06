import { style } from '../../index';
import { px } from '../shared';

test('marginLeft: Length', () => {
    const received = style({
        marginLeft: px(100),
    });
    const expected = {
        marginLeft: '100px',
    };
    expect(received).toEqual(expected);
});

test('marginBottom: Length', () => {
    const received = style({
        marginBottom: px(100),
    });
    const expected = {
        marginBottom: '100px',
    };
    expect(received).toEqual(expected);
});
