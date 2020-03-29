import { useState, useCallback, useEffect } from 'react'
import { isEqual } from 'lodash'
import { generate as generateId } from 'short-uuid'

import { RoseBoxCssProperties, style } from '..'
import { createStyleTag, EL_ATTRIBUTE_NAME } from '../dom'

export const useStyle = () => {
  // Set up state
  const [ref, setRef] = useState({ current: null })
  const [elStyleState, setElStyle] = useState<RoseBoxCssProperties>({})
  const [beforeStyleState, setBeforeStyleState] = useState<
    RoseBoxCssProperties
  >()
  const [styleTagId] = useState('rb-' + generateId())

  const callbackRef = useCallback(
    node => {
      setRef({ current: node })
      if (node !== null && beforeStyleState) {
        createStyleTag(styleTagId, beforeStyleState, 'before')
      } else {
        document.querySelector(`[data-rosebox-id=${styleTagId}]`)?.remove()
      }
    },
    [styleTagId, beforeStyleState]
  )

  useEffect(() => {
    const styleTag = document.querySelector(`[data-rosebox-id=${styleTagId}]`)
    if (beforeStyleState && styleTag) {
      styleTag?.remove()
      createStyleTag(styleTagId, beforeStyleState, 'before')
    }
  }, [beforeStyleState, styleTagId])
  const actualStyle = elStyleState

  const styleEl = (style: RoseBoxCssProperties) => {
    if (!isEqual(style, elStyleState)) {
      setElStyle(style)
    }
  }

  const styleBefore = (before: RoseBoxCssProperties) => {
    if (!isEqual(before, beforeStyleState)) {
      setBeforeStyleState(before)
    }
  }

  return {
    styleEl,
    styleBefore,
    ref,
    props: {
      [EL_ATTRIBUTE_NAME]: `${styleTagId}`,
      style: style(actualStyle || {}),
      ref: callbackRef
    }
  }
}