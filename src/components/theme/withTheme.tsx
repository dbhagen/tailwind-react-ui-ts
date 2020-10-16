import React from 'react'

import TailwindTheme from './TailwindTheme'

// TODO: Remove Any Types
const withTheme = (Component: any) => {
  const WithTheme = (props: any) => (
    <TailwindTheme.Consumer>
      {theme => <Component {...props} theme={theme} />}
    </TailwindTheme.Consumer>
  )

  WithTheme.displayName = `WithTheme(${Component.displayName})`

  return WithTheme
}

export default withTheme
