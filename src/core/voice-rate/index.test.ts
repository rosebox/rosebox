import { style } from '../..';
import { per } from '../shared';

test('voiceRate: normal', () => {
    const received = style({
        voiceRate: 'normal',
    });
    const expected = {
        voiceRate: 'normal',
    };
    expect(received).toEqual(expected);
});

test('voiceRate: Percentage', () => {
    const received = style({
        voiceRate: ['slow', per(72)],
    });
    const expected = {
        voiceRate: 'slow 72%',
    };
    expect(received).toEqual(expected);
});
