import { useState, useEffect, useCallback } from 'react'
import { generate as generateId } from 'short-uuid'

import { createStyleTag, toCss, removeStyleTag } from '../dom'
import { style, RoseboxProperties } from '..'

export type ListItemStyle = {
  class: RoseboxProperties
  inline: RoseboxProperties
}

type UseStyleCallback = (
  ...args: any[]
) => {
  class: RoseboxProperties
  inline: RoseboxProperties
}

/**
 * @experimental
 */
export const useListItemStyle = (styleFunc: UseStyleCallback) => {
  const [className] = useState(`rb-${generateId()}`)
  const [mounted, setMounted] = useState(false)
  const [dataStyle, setDataStyle] = useState<any>({})

  const func = useCallback(
    (...args: any[]) => {
      const { class: cls, inline } = styleFunc(...args)
      if (JSON.stringify(cls) !== JSON.stringify(dataStyle)) setDataStyle(cls)
      return {
        className,
        style: style({
          ...inline,
          ...(!mounted && {
            display: 'none',
          }),
        }),
      }
    },
    [dataStyle, styleFunc, className, mounted]
  )

  useEffect(() => {
    if (className && Object.keys(dataStyle).length) {
      const css = toCss(dataStyle, `.${className}`)
      createStyleTag(css, className)
      setMounted(true)
    }
    return () => removeStyleTag(className)
  }, [dataStyle, className])

  return func
}

/*export const usePseudo = (elRef?: (ref: MutableRefObject<null>) => void) => {
  // Set up state
  const [beforeStyleState, setBeforeStyleState] = useState<RoseboxProperties>()
  const [styleTagId] = useState('rb-' + generateId())

  const callbackRef = useCallback(
    (node) => {
      const ref = { current: node }
      if (elRef) elRef(ref)

      if (node !== null && beforeStyleState)
        createStyleTag(styleTagId, beforeStyleState, 'before')
      else document.querySelector(`[data-rosebox-id=${styleTagId}]`)?.remove()
    },
    [styleTagId, beforeStyleState, elRef]
  )

  useEffect(() => {
    const styleTag = document.querySelector(`[data-rosebox-id=${styleTagId}]`)
    if (beforeStyleState && styleTag) {
      styleTag?.remove()
      createStyleTag(styleTagId, beforeStyleState, 'before')
    }
  }, [beforeStyleState, styleTagId])

  const styleBefore = (before: RoseboxProperties) => {
    if (before !== beforeStyleState && !isEqual(before, beforeStyleState)) {
      setBeforeStyleState(before)
    }
  }

  return {
    styleBefore,
    props: {
      [EL_ATTRIBUTE_NAME]: `${styleTagId}`,
      ref: callbackRef,
    },
  }
}*/
