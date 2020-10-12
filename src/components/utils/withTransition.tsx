import React from 'react'
import { Transition } from 'react-transition-group'
import get from 'lodash.get'

type withThemeProps = {
  inState: boolean
}

const withTheme = <P extends withThemeProps>(WrappedComponent: React.ComponentType<P & withThemeProps>, { inState, ...rest }: { instate: string[] | number[] | symbol[], [x: string]: any; }) => {
  const WithTransition = (componentProps: P) =>
    <Transition in={get(componentProps, inState)} timeout={0} {...rest}>
      {state => <WrappedComponent {...componentProps} transition={state} />}
    </Transition>

  WithTransition.displayName = `WithTransition(${WrappedComponent.displayName})`

  return WithTransition
}

export default withTheme