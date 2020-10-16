import React from 'react'
import classnames from 'classnames'

import { withTheme } from '../theme'
import { filterProps } from '../utils'
import { getTailwindClassNames, tailwindProps } from '../tailwind'
import { Class } from 'utility-types'

export type BaseProps = {
  theme: any
  is: string | (() => void) | Class<React.ComponentType>
  children?: React.ReactNode
  className?: string
  innerRef?: (() => void) | Object
}

const Base: React.FunctionComponent<BaseProps> = ({
  theme,
  is = 'div',
  children = undefined,
  className = undefined,
  innerRef = undefined,
  ...rest
}) => {
  const WrappedComponent = is

  return (
    <WrappedComponent
      {...filterProps(rest, tailwindProps)}
      className={
        classnames(
          getTailwindClassNames(
            {
              ...rest,
              'outine-focus': 'none',
              'shadow-focus': 'outline',
            },
            { prefix: theme.prefix },
          ),
          className,
        )}
      ref={innerRef}
    >
      {children}
    </WrappedComponent>
  )
}

export { Base as component }
export default withTheme(Base)
