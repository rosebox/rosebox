import { RoseboxProperties } from '..'

export const EL_ATTRIBUTE_NAME = 'data-rosebox-st-id'
const STYLE_TAG_ATTRIBUTE_NAME = 'data-rosebox-id'

type PseudoElement = 'before'

export const camelCaseToDash = (str: string) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

export const toCss = (
  style: any,
  attributeValue: string,
  pseudoElement: PseudoElement
) =>
  Object.keys(style).reduce((acc, key, idx) => {
    return (
      acc +
      '\t' +
      camelCaseToDash(key) +
      ': ' +
      style[key] +
      ';\n' +
      (idx === Object.keys(style).length - 1 ? '}' : '')
    )
  }, `\n[${EL_ATTRIBUTE_NAME}="${attributeValue}"]::${pseudoElement} {\n`)

export const createStyleTag = (
  id: string,
  css: RoseboxProperties,
  pseudoElement: PseudoElement
): HTMLStyleElement => {
  const head = document.head || document.getElementsByTagName('head')[0]
  const style = document.createElement('style')
  style.setAttribute('type', 'text/css')
  style.setAttribute(STYLE_TAG_ATTRIBUTE_NAME, id)
  head.appendChild(style)
  style.appendChild(document.createTextNode(toCss(css, id, pseudoElement)))
  return style
}
