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
import { rgb, hex } from '../core/color'

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
    backgroundColor: rgb([2, 3, 4]),
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
  }
  expect(received).toEqual(expected)
})
