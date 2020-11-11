import React from 'react'
import { Class } from 'utility-types'

import { Flex } from '../primitives'

export type CardFooterProps = {
  is: string | (() => void) | Class<React.ComponentType>
  children: React.ReactNode
}

const CardFooter: React.FunctionComponent<CardFooterProps> = ({
  is = 'div',
  children,
  ...rest
}) => (
    <Flex is={is} reverse items='end' {...rest}>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          rounded: 'none'
        })
      )}
    </Flex>
  )

export default CardFooter
