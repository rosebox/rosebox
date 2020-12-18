import React from 'react'
import { JssProvider } from 'react-jss'

import { defaultJss } from './jss'

export const StylesProvider: typeof JssProvider = ({ children, ...props }) => (
    <JssProvider {...props} jss={props.jss || defaultJss}>{ children }</JssProvider>
)
