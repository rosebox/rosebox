import { RoseBoxCssProperties } from '..'

export const EL_ATTRIBUTE_NAME = 'data-rosebox-st-id'
const STYLE_TAG_ATTRIBUTE_NAME = 'data-rosebox-id'

export const camelCaseToDash = (str: string) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

const toCss = (x: any, dataStyleId: string) =>
  Object.keys(x).reduce((acc, key, idx) => {
    return (
      acc +
      '\t' +
      camelCaseToDash(key) +
      ': ' +
      x[key] +
      ';\n' +
      (idx === Object.keys(x).length - 1 ? '}' : '')
    )
  }, `\n[${EL_ATTRIBUTE_NAME}="${dataStyleId}"]::before {\n`)

export const createStyleTag = (id: string, css: RoseBoxCssProperties): void => {
  const head = document.head || document.getElementsByTagName('head')[0]
  const style = document.createElement('style')
  style.setAttribute('type', 'text/css')
  style.setAttribute(STYLE_TAG_ATTRIBUTE_NAME, id)
  head.appendChild(style)
  style.appendChild(document.createTextNode(toCss(css, id)))
}
