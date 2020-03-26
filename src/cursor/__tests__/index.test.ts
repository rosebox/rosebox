import { cursor } from '..'
import { url } from '../../shared/value-constructors'

test('cursor([URL, CursorKeyword])', () => {
  const received = cursor([url('/image.png'), 'col-resize'])
  const expected = {
    cursor: 'url(/image.png) col-resize'
  }
  expect(received).toEqual(expected)
})

test('cursor([[], CursorKeyword])', () => {
  const received = cursor([[], 'col-resize'])
  const expected = {
    cursor: 'col-resize'
  }
  expect(received).toEqual(expected)
})

test('cursor([[URL, URL], CursorKeyword])', () => {
  const received = cursor([
    [url('/image1.png'), url('/image2.png')],
    'col-resize'
  ])
  const expected = {
    cursor: 'url(/image1.png), url(/image2.png) col-resize'
  }
  expect(received).toEqual(expected)
})
