import React from 'react'

import TailwindTheme from './TailwindTheme'

export type themeType = {
  prefix: string
  radius: string
  spacing: {
    zero: number
    sm: number
    md: number
    lg: number
    xl: number
  }
  container: {
    sm: string
    md: string
    lg: string
  }
  text: {
    size: {
      body: string[]
      title: string[]
    },
    family: {
      body: string
      subtitle: string
      title: string
    }
  }
  brandColors: {
    primary: string
    secondary: string
    success: string
    danger: string
    warning: string
    info: string
  }
  textColors: {
    body: string
    link: string
    linkDark: string
    emphasis: string
    on: {
      primary: string
      secondary: string
      success: string
      danger: string
      warning: string
      info: string
      dark: string
    }
  }
  surfaceColors: {
    default: string
    dark: string
    light: string
  }
  highlightOffset: number
  accentSize: number
  breakpoints: {
    sm: string
    md: string
    lg: string
    xl: string
  }
}

export type withThemeProps = {
  theme: themeType
}

const withTheme = <T extends withThemeProps>(WrappedComponent: React.ComponentType<T & withThemeProps>) => {
  const WithTheme = (props: T) =>
    <TailwindTheme.Consumer >
      {theme => < WrappedComponent {...props} theme={theme} />}
    </TailwindTheme.Consumer >


  WithTheme.displayName = `WithTheme(${WrappedComponent.displayName})`

  return WithTheme
}

export default withTheme
