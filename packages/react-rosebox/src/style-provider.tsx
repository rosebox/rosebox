import { Jss } from 'jss'
import React, { FC } from 'react'
import { JssProvider } from 'react-jss'

import { defaultJss } from './jss'

type StylesProviderProps = {
    jss?: Jss | undefined
}

export const StylesProvider: FC<StylesProviderProps> = ({
    children,
    ...props
}) => (
    <JssProvider {...props} jss={props.jss || defaultJss}>
        {children}
    </JssProvider>
)
