import { style } from '../../index';

test('overflowX: keyword', () => {
    const received = style({
        overflowX: 'hidden',
    });
    const expected = {
        overflowX: 'hidden',
    };
    expect(received).toEqual(expected);
});

test('overflowY: keyword', () => {
    const received = style({
        overflowY: 'hidden',
    });
    const expected = {
        overflowY: 'hidden',
    };
    expect(received).toEqual(expected);
});

test('overflow: keyword', () => {
    const received = style({
        overflow: 'hidden',
    });
    const expected = {
        overflow: 'hidden',
    };
    expect(received).toEqual(expected);
});

test('overflow: [keyword, keyword]', () => {
    const received = style({
        overflow: ['hidden', 'auto'],
    });
    const expected = {
        overflow: 'hidden auto',
    };
    expect(received).toEqual(expected);
});
