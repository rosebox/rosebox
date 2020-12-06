import { style } from '../../index';
import { px } from '../shared';

test('wordSpacing: Length', () => {
    const received = style({
        wordSpacing: px(100),
    });
    const expected = {
        wordSpacing: '100px',
    };
    expect(received).toEqual(expected);
});

test('wordSpacing: normal', () => {
    const received = style({
        wordSpacing: 'normal',
    });
    const expected = {
        wordSpacing: 'normal',
    };
    expect(received).toEqual(expected);
});
