import {
  flex,
  compose,
  width,
  per,
  __style2__,
  __RoseBoxCssProperties__,
} from '../index'
import { height } from '../core/height'
import { px, rem } from '../core/shared/value-constructors'
import { rgb, hex, hsl } from '../core/color'

test('compose', () => {
  const received = compose([flex(1), width(per(3)), height(per(40))])
  const expected = {
    flex: '1',
    width: '3%',
    height: '40%',
  }
  expect(received).toEqual(expected)
})

test('__style2__', () => {
  const widthStyle: __RoseBoxCssProperties__ = {
    width: per(3),
    height: px(100),
    top: px(3),
    right: px(3),
    bottom: per(10),
    left: rem(5),
    boxSizing: 'border-box',
    color: hex('#000'),
    maxHeight: px(190),
    maxWidth: per(100),
    minHeight: rem(12),
    minWidth: px(60),
    opacity: per(20),
    overflowX: 'clip',
    overflowY: 'auto',
    overflow: 'auto hidden',
    position: 'relative',
    visibility: 'collapse',
    borderColor: hsl([3, per(3), per(3)]),
    borderTopColor: hsl([3, per(3), per(3)]),
    borderRightColor: hsl([3, per(3), per(3)]),
    borderBottomColor: hsl([3, per(3), per(3)]),
    borderLeftColor: hsl([3, per(3), per(3)]),
    cursor: 'pointer',
    display: 'flex block',
    backgroundColor: rgb([2, 3, 4]),
    borderTopRightRadius: px(3),
    borderBottomRightRadius: per(20),
    borderBottomLeftRadius: rem(3),
    borderTopLeftRadius: 'unset',
    borderRadius: [per(10), per(20)],
    borderTopStyle: 'dotted',
  }
  const received = __style2__(widthStyle)
  const expected = {
    width: '3%',
    height: '100px',
    backgroundColor: 'rgb(2, 3, 4)',
    top: '3px',
    right: '3px',
    bottom: '10%',
    left: '5rem',
    boxSizing: 'border-box',
    color: '#000',
    maxHeight: '190px',
    maxWidth: '100%',
    minHeight: '12rem',
    minWidth: '60px',
    opacity: '20%',
    overflowX: 'clip',
    overflowY: 'auto',
    overflow: 'auto hidden',
    position: 'relative',
    visibility: 'collapse',
    borderColor: 'hsl(3, 3%, 3%)',
    borderTopColor: 'hsl(3, 3%, 3%)',
    borderRightColor: 'hsl(3, 3%, 3%)',
    borderBottomColor: 'hsl(3, 3%, 3%)',
    borderLeftColor: 'hsl(3, 3%, 3%)',
    cursor: 'pointer',
    display: 'flex block',
    borderTopRightRadius: '3px',
    borderBottomRightRadius: '20%',
    borderBottomLeftRadius: '3rem',
    borderTopLeftRadius: 'unset',
    borderRadius: '10% 20%',
    borderTopStyle: 'dotted',
  }
  expect(received).toEqual(expected)
})
