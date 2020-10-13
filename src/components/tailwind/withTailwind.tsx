import React from 'react'
import classnames from 'classnames'

import { filterProps } from '../utils'

import tailwindProps from './tailwindProps'
import getTailwindClassNames from './getTailwindClassNames'

type withTailwindProps = {
  ignore: string[]
}

const withTailwind = <P extends withTailwindProps>(WrappedComponent: React.ComponentType<P & withTailwindProps>, { ignore = [] } = {}) => {
  const WithTailwind = ({ className, ...props }: { className: string, props: P }) => (
    <WrappedComponent
      {...filterProps(
        props,
        tailwindProps.filter(prop => !ignore.includes(prop)),
      )}
      className={classnames([
        getTailwindClassNames(props, { ignore }),
        className,
      ])}
    />
  )

  WithTailwind.displayName = `WithTailwind(${WrappedComponent.displayName})`

  return WithTailwind
}

export default withTailwind
