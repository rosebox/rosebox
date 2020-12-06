import { RBStyle, style } from '../..';
import { per, px, rem } from '../shared';

const styleObj: RBStyle = {
    borderTopRightRadius: px(3),
    borderBottomRightRadius: per(20),
    borderBottomLeftRadius: rem(3),
    borderTopLeftRadius: 'unset',
    borderRadius: [per(10), per(20)],
};

test('borderRadius', () => {
    const received = style(styleObj);
    const expected = {
        borderTopRightRadius: '3px',
        borderBottomRightRadius: '20%',
        borderBottomLeftRadius: '3rem',
        borderTopLeftRadius: 'unset',
        borderRadius: '10% 20%',
    };
    expect(received).toEqual(expected);
});
