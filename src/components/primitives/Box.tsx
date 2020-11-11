import React from 'react'
import { Class } from 'utility-types'

import Base from './Base'

export type BoxProps = {
  is: string | (() => void) | Class<React.ComponentType>
  children?: React.ReactNode
  inline?: boolean
  inlineBlock?: boolean
  inlineFlex?: boolean
  overflow?: string
  rounded?: string
  bg?: string
  text?: string
  p?: string
  flex?: string | string[]
}
const Box: React.FunctionComponent<BoxProps> = ({
  is = 'div',
  children = undefined,
  inline = false,
  inlineBlock = false,
  ...rest
}) => {
  const el = is === 'div' && (inline || inlineBlock) ? 'span' : is

  return (
    <Base is={el} inline={inline} inlineBlock={inlineBlock} {...rest}>
      {children}
    </Base>
  )
}

export default Box
