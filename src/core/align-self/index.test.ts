import { style } from '../../index';

test('alignSelf: center', () => {
    const received = style({
        alignSelf: 'center',
    });
    const expected = {
        alignSelf: 'center',
    };
    expect(received).toEqual(expected);
});

test('alignSelf: ["first", "baseline"]', () => {
    const received = style({
        alignSelf: ['safe', 'self-end'],
    });
    const expected = {
        alignSelf: 'safe self-end',
    };
    expect(received).toEqual(expected);
});
