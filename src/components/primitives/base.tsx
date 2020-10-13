import React from 'react'
import classnames from 'classnames'

import { withTheme } from '../theme'
import { filterProps } from '../utils'
import { getTailwindClassNames, tailwindProps, propTypes } from '../tailwind'

export interface BaseProps {
  theme: Object
  is?: string | Function | Object
  children: React.ReactNode
  className: string
  focusable: boolean
  innerRef: Function | Object
}
class Base extends React.Component<BaseProps, any> {
  constructor(props: BaseProps) {
    super(props)
  }

  static defaultProps = {
    is: 'div',
    children: undefined,
    className: undefined,
    innerRef: undefined,
  }

  render() {
    const WrappedComponent = this.props.is

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
      </WrappedComponent >
    )
  }
}

export { Base as component }
export default withTheme(Base)
