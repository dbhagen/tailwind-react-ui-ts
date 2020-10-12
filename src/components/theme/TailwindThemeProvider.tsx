import React from 'react'
import merge from 'lodash.merge'

import defaultTheme from './defaultTheme'
import TailwindTheme from './TailwindTheme'

export type TailwindThemeProviderProps = {
  theme: {}
  children: React.ReactNode
}

const TailwindThemeProvider: React.FunctionComponent<TailwindThemeProviderProps> = ({ theme, children }) => {
  const mergedTheme = merge({}, defaultTheme, theme)

  return (
    <TailwindTheme.Provider value={mergedTheme}>
      {children}
    </TailwindTheme.Provider>
  )
}

export default TailwindThemeProvider
