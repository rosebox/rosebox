import { style } from '../../index';
import { per } from '../shared';

test('textIndent: LengthPercentage', () => {
    const received = style({
        textIndent: per(40),
    });
    const expected = {
        textIndent: '40%',
    };
    expect(received).toEqual(expected);
});

test('textIndent: [LengthPercentage, hanging]', () => {
    const received = style({
        textIndent: [per(40), 'each-line'],
    });
    const expected = {
        textIndent: '40% each-line',
    };
    expect(received).toEqual(expected);
});
