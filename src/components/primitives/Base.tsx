import React from 'react'
import classnames from 'classnames'

// import { withTheme } from '../theme'
// import { filterProps } from '../utils'
// import { getTailwindClassNames, tailwindProps } from '../tailwind'
import { getTailwindClassNames } from '../tailwind'

export type BaseType = {
  theme: Object
  is: string | React.FunctionComponent | React.Component
  children?: React.ReactNode | React.ReactNode[]
  className?: string
  focusable: boolean
  innerRef?: Function | Object
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
  const WrappedComponent = is

  return (
    <WrappedComponent
      // {...filterProps(rest, tailwindProps)}
      className={classnames(
        getTailwindClassNames(
          {
            ...rest,
            'outine-focus': 'none',
            'shadow-focus': 'outline',
          },
          // { prefix: theme.prefix },
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
// export default withTheme(Base)
export default Base
