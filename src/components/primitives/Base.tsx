import React from 'react'
import classnames from 'classnames'

import { withTheme } from '../theme'
import { filterProps } from '../utils'
import { getTailwindClassNames, tailwindProps } from '../tailwind'

export type BaseType = {
  theme: {}
  is?: string | React.FunctionComponent | React.Component
  children?: React.ReactNode
  className?: string
  focusable: boolean
  innerRef?: (() => {}) | {}
}

const Base: React.FunctionComponent<BaseType> = ({
  theme,
  is,
  children,
  className,
  focusable,
  innerRef,
  ...rest
}) => {
  const Component = is

  return (
    <Component
      {...filterProps(rest, tailwindProps)}
      className={classnames(
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
    </Component>
  )
}

export { Base as component }
export default withTheme(Base)
