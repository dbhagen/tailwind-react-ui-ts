import React from 'react'
import { Class } from 'utility-types'

import Box from './Box'

export type FlexProps = {
  is: string | (() => void) | Class<React.ComponentType>
  children?: React.ReactNode
  inline?: boolean
  inlineFlex?: boolean
  col?: boolean
  reverse?: boolean
  wrap?: boolean
  wrapReverse?: boolean
  items: any
}

const Flex: React.FunctionComponent<FlexProps> = ({
  is,
  children,
  inline,
  inlineFlex,
  col,
  reverse,
  wrap,
  wrapReverse,
  ...rest
}) => {
  const el = is === 'div' && (inline || inlineFlex) ? 'span' : is

  const flex = ['true']

  if (col) {
    flex.push(reverse ? 'col-reverse' : 'col')
  } else if (reverse) {
    flex.push('row-reverse')
  }

  if (wrap || wrapReverse) {
    flex.push(wrap ? 'wrap' : 'wrap-reverse')
  }

  return (
    <Box is={el} flex={flex} inlineFlex={inline || inlineFlex} {...rest}>
      {children}
    </Box>
  )
}

// Flex.defaultProps = {
//   is: 'div',
//   children: undefined,
//   inline: false,
//   inlineFlex: false,
//   col: false,
//   reverse: false,
//   wrap: false,
//   wrapReverse: false
// }

export default Flex
