import { style } from '../../index';

test('fontSynthesis: keyword', () => {
    const received = style({
        fontSynthesis: ['weight', 'style'],
    });
    const expected = {
        fontSynthesis: 'weight style',
    };
    expect(received).toEqual(expected);
});
