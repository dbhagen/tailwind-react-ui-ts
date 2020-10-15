import React from 'react'
import { Transition } from 'react-transition-group'
import get from 'lodash.get'

// TODO: Remove Any Types
const withTheme = (Component: any, { inState, ...rest }: { inState: any }) => {
  const WithTransition = (componentProps: any) => (
    <Transition in={get(componentProps, inState)} timeout={0} {...rest}>
      {state => <Component {...componentProps} transition={state} />}
    </Transition>
  )

  WithTransition.displayName = `WithTransition(${Component.displayName})`

  return WithTransition
}

export default withTheme
