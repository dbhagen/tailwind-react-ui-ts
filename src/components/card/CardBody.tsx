import React from 'react'
import { Class } from 'utility-types'

import { withTheme } from '../theme'
import { Box } from '../primitives'

export type CardBodyProps = {
  theme: any
  is: string | (() => void) | Class<React.ComponentType>
  children?: React.ReactNode
}

const CardBody: React.FunctionComponent<CardBodyProps> = ({
  theme,
  is = 'div',
  children = undefined,
  ...rest
}) => (
    <Box is={is} p={theme.spacing.md} {...rest}>
      {children}
    </Box>
  )

export { CardBody as component }
export default withTheme(CardBody)
