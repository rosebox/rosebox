import { useState, useCallback, useEffect, MutableRefObject } from 'react'
import { isEqual } from 'lodash'
import { generate as generateId } from 'short-uuid'

import { RoseBoxCssProperties } from '..'
import { createStyleTag, EL_ATTRIBUTE_NAME } from '../dom'

export const usePseudo = (elRef?: (ref: MutableRefObject<null>) => void) => {
  // Set up state
  const [beforeStyleState, setBeforeStyleState] = useState<
    RoseBoxCssProperties
  >()
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

  const styleBefore = (before: RoseBoxCssProperties) => {
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
}
