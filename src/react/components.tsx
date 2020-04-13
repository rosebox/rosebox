import React, {
  Fragment,
  Children,
  ReactNode,
  useEffect,
  MutableRefObject,
} from 'react'
import { usePseudo } from './hooks'
import { RoseboxProperties } from '../index'

type Props = {
  children: ReactNode
  before: RoseboxProperties
  elRef?: (ref: MutableRefObject<null>) => void
}

export const CSSPseudo: React.SFC<Props> = ({ children, before, elRef }) => {
  const { styleBefore, props: wrappedComponentProps } = usePseudo(elRef)
  const props = {
    'data-rosebox-st-id': wrappedComponentProps['data-rosebox-st-id'],
    ref: wrappedComponentProps.ref,
  }
  useEffect(() => {
    styleBefore(before)
  })
  return (
    <Fragment>
      {Children.map(children, (child: any) =>
        React.cloneElement(child, { ...child.props, ...props })
      )}
    </Fragment>
  )
}
